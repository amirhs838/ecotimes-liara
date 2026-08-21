import { NextRequest } from "next/server";
import fs from "fs/promises";
import { createReadStream } from "fs";
import { Readable } from "stream";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { db } from "@/lib/db";
import { MEDIA_KEY_REGEX } from "@/lib/file-validation";
import {
  localFilePath,
  getS3Client,
  s3Config,
  s3PublicBase,
} from "@/lib/storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Public media serving.
// - s3:    redirect to the CDN URL when the bucket is public, otherwise proxy
//          the object through S3 credentials (range requests supported).
// - blob:  redirect to Vercel's CDN.
// - local: stream from disk.
// Only files with a registered Media record are reachable.

// Bucket visibility is probed once and cached briefly (per function instance).
const S3_PROBE_TTL_MS = 5 * 60 * 1000;
const s3Visibility = new Map<string, { public: boolean; at: number }>();

async function s3IsPublic(url: string): Promise<boolean> {
  const base = url.split("/").slice(0, 3).join("/");
  const cached = s3Visibility.get(base);
  if (cached && Date.now() - cached.at < S3_PROBE_TTL_MS) return cached.public;
  let isPublic = false;
  try {
    const res = await fetch(url, {
      method: "HEAD",
      signal: AbortSignal.timeout(5000),
    });
    isPublic = res.status < 400;
  } catch {
    isPublic = false;
  }
  s3Visibility.set(base, { public: isPublic, at: Date.now() });
  return isPublic;
}

async function proxyS3Media(
  req: NextRequest,
  key: string,
  mimeType: string
): Promise<Response> {
  const range = req.headers.get("range");
  try {
    const out = await getS3Client().send(
      new GetObjectCommand({
        Bucket: s3Config().bucket,
        Key: key,
        ...(range ? { Range: range } : {}),
      })
    );
    const headers: Record<string, string> = {
      "Content-Type": out.ContentType ?? mimeType,
      "X-Content-Type-Options": "nosniff",
      "Content-Disposition": "inline",
      "Accept-Ranges": "bytes",
      "Cache-Control": "public, max-age=31536000, immutable",
    };
    if (out.ContentRange) headers["Content-Range"] = out.ContentRange;
    if (typeof out.ContentLength === "number")
      headers["Content-Length"] = String(out.ContentLength);
    return new Response(out.Body as unknown as ReadableStream, {
      status: out.ContentRange ? 206 : 200,
      headers,
    });
  } catch (e) {
    const code = (e as { $metadata?: { httpStatusCode?: number } })?.$metadata
      ?.httpStatusCode;
    if (code === 416) {
      return new Response(null, { status: 416 });
    }
    return new Response("Storage unavailable", { status: 502 });
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ key: string }> }
) {
  const { key } = await params;
  if (!MEDIA_KEY_REGEX.test(key)) {
    return new Response("Not found", { status: 404 });
  }

  const media = await db.media.findUnique({ where: { key } });
  if (!media) {
    return new Response("Not found", { status: 404 });
  }

  if (media.provider === "s3") {
    const base = s3PublicBase();
    if (base) {
      const url = `${base}/${key}`;
      if (await s3IsPublic(url)) {
        return Response.redirect(url, 302);
      }
      return proxyS3Media(req, key, media.mimeType);
    }
    return proxyS3Media(req, key, media.mimeType);
  }

  // Blob-stored media is served directly from Vercel's CDN
  if (media.provider === "blob") {
    return Response.redirect(media.url, 302);
  }

  let stat;
  try {
    stat = await fs.stat(localFilePath(key));
  } catch {
    return new Response("Not found", { status: 404 });
  }

  const baseHeaders: Record<string, string> = {
    "Content-Type": media.mimeType,
    "X-Content-Type-Options": "nosniff",
    "Accept-Ranges": "bytes",
    "Content-Disposition": "inline",
    // keys are content-unique uuids, safe to cache forever
    "Cache-Control": "public, max-age=31536000, immutable",
  };

  // Basic single-range support (needed for video seeking / Safari playback)
  const range = req.headers.get("range");
  if (range) {
    const m = /^bytes=(\d*)-(\d*)$/.exec(range.trim());
    if (m && (m[1] || m[2])) {
      let start = m[1] ? parseInt(m[1], 10) : NaN;
      let end = m[2] ? parseInt(m[2], 10) : NaN;
      if (isNaN(start) && !isNaN(end)) {
        // suffix range: last N bytes
        start = Math.max(0, stat.size - end);
        end = stat.size - 1;
      }
      if (isNaN(end) || end >= stat.size) end = stat.size - 1;

      if (!isNaN(start) && start >= 0 && start <= end && start < stat.size) {
        const stream = createReadStream(localFilePath(key), { start, end });
        return new Response(
          Readable.toWeb(stream) as unknown as ReadableStream,
          {
            status: 206,
            headers: {
              ...baseHeaders,
              "Content-Range": `bytes ${start}-${end}/${stat.size}`,
              "Content-Length": String(end - start + 1),
            },
          }
        );
      }
      return new Response(null, {
        status: 416,
        headers: { "Content-Range": `bytes */${stat.size}` },
      });
    }
  }

  const stream = createReadStream(localFilePath(key));
  return new Response(Readable.toWeb(stream) as unknown as ReadableStream, {
    headers: { ...baseHeaders, "Content-Length": String(stat.size) },
  });
}