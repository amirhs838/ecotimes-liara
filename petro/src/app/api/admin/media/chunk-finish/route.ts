import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { db } from "@/lib/db";
import { requireAdmin, isErrorResponse } from "@/lib/security";
import { detectFileType, uploadLimits } from "@/lib/file-validation";
import { getImageDims } from "@/lib/image-dims";
import { uploadToStorage, deleteFromStorage } from "@/lib/storage";
import { faststartMp4 } from "@/lib/mp4-faststart";
import {
  getStagingMeta,
  listStagingChunks,
  readStagingChunk,
  deleteStaging,
} from "@/lib/s3-staging";
import {
  getStagingMetaBlob,
  readStagingChunkBlob,
  deleteStagingBlob,
} from "@/lib/blob-staging";

export const runtime = "nodejs";
// Assembling big videos + one object-storage write can take a while.
export const maxDuration = 300;

export async function POST(req: Request) {
  const guard = await requireAdmin(req);
  if (isErrorResponse(guard)) return guard.response;

  let body: { uploadId?: string; staging?: string; baseUrl?: string; alt?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "بدنه درخواست نامعتبر است" }, { status: 400 });
  }

  const { uploadId, staging, baseUrl, alt } = body;
  if (typeof uploadId !== "string" || uploadId.length === 0) {
    return NextResponse.json({ ok: false, error: "شناسه آپلود نامعتبر است" }, { status: 400 });
  }
  if (staging !== "blob" && staging !== "s3") {
    return NextResponse.json({ ok: false, error: "حالت آپلود نامعتبر است" }, { status: 400 });
  }
  if (staging === "blob" && typeof baseUrl !== "string") {
    return NextResponse.json({ ok: false, error: "آدرس آپلود نامعتبر است" }, { status: 400 });
  }
  const altText = typeof alt === "string" ? alt.trim().slice(0, 300) : "";

  // --- Read staging meta + assemble the full file ---

  let expectedSize: number;
  let chunkSize: number;
  let mimeType: string;
  let parts: Buffer[];

  try {
    if (staging === "blob") {
      const meta = await getStagingMetaBlob(baseUrl as string, uploadId);
      expectedSize = meta.expectedSize;
      chunkSize = meta.chunkSize;
      mimeType = meta.mimeType;
      const expectedChunks = Math.ceil(expectedSize / chunkSize);
      parts = await Promise.all(
        Array.from({ length: expectedChunks }, (_, i) =>
          readStagingChunkBlob(baseUrl as string, uploadId, i)
        )
      );
    } else {
      const meta = await getStagingMeta(uploadId);
      expectedSize = meta.expectedSize;
      chunkSize = meta.chunkSize;
      mimeType = meta.mimeType;
      const chunks = await listStagingChunks(uploadId);
      const expectedChunks = Math.ceil(expectedSize / chunkSize);
      if (chunks.length < expectedChunks) {
        return NextResponse.json(
          { ok: false, error: "برخی از قطعات فایل هنوز ارسال نشده است" },
          { status: 400 }
        );
      }
      parts = await Promise.all(
        chunks.map((c) => readStagingChunk(uploadId, c.index))
      );
    }
  } catch (e) {
    console.error("chunk-finish staging read failed:", e);
    if (staging === "blob") {
      return NextResponse.json({ ok: false, error: "جلسه آپلود یافت نشد" }, { status: 404 });
    }
    return NextResponse.json({ ok: false, error: "جلسه آپلود یافت نشد" }, { status: 404 });
  }

  let buffer: Buffer = Buffer.concat(parts);

  const fail = async (error: string, status: number) => {
    try {
      if (staging === "blob") {
        const expectedChunks = Math.ceil(expectedSize / chunkSize);
        await deleteStagingBlob(baseUrl as string, uploadId, expectedChunks);
      } else {
        await deleteStaging(uploadId);
      }
    } catch {
      // cleanup is best-effort
    }
    return NextResponse.json({ ok: false, error }, { status });
  };

  if (buffer.length === 0) {
    return fail("فایل خالی است", 400);
  }

  // Real content validation (magic bytes) — extension/MIME from client is ignored
  const detected = detectFileType(buffer);
  if (!detected) {
    return fail(
      "نوع فایل مجاز نیست. فقط تصویر (jpg/png/webp) یا ویدیو (mp4/webm)",
      415
    );
  }

  const limits = uploadLimits();
  const maxBytes = detected.kind === "image" ? limits.image : limits.video;
  if (buffer.length > maxBytes) {
    const maxMb = Math.round(maxBytes / (1024 * 1024));
    return fail(
      `حجم فایل بیش از حد مجاز است (حداکثر ${maxMb} مگابایت برای ${
        detected.kind === "image" ? "تصویر" : "ویدیو"
      })`,
      413
    );
  }

  // Image dimensions (best effort — sharp when available, header parsing otherwise)
  let width: number | null = null;
  let height: number | null = null;
  if (detected.kind === "image") {
    const dims = await getImageDims(buffer);
    width = dims.width;
    height = dims.height;
  }

  // Move the moov atom to the front of MP4 videos so browsers can start
  // playback immediately instead of downloading the whole file first.
  if (detected.kind === "video" && detected.ext === "mp4") {
    buffer = faststartMp4(buffer);
  }

  // --- Final storage: everything goes to the object storage (Parspack) ---

  const key = `${randomUUID()}.${detected.ext}`;
  let url: string | undefined;
  let provider: string | undefined;

  try {
    // Parspack's API intermittently stalls; retry the put a few times so
    // uploads ride through temporary hiccups instead of failing.
    let lastErr: unknown;
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const stored = await uploadToStorage(key, buffer, detected.mimeType);
        url = stored.url;
        provider = stored.provider;
        break;
      } catch (e) {
        lastErr = e;
        if (attempt < 2) await new Promise((r) => setTimeout(r, 2000));
      }
    }
    if (!url || !provider) throw lastErr ?? new Error("storage put failed");
  } catch (e) {
    console.error("Chunked media upload to storage failed:", e);
    return NextResponse.json({ ok: false, error: "ذخیره فایل ناموفق بود" }, { status: 500 });
  }

  try {
    const media = await db.media.create({
      data: {
        key,
        url,
        provider,
        kind: detected.kind,
        mimeType: detected.mimeType,
        size: buffer.length,
        width,
        height,
        alt: altText,
      },
    });

    // Staged chunks are transient — remove them right after assembly.
    if (staging === "blob") {
      const expectedChunks = Math.ceil(expectedSize / chunkSize);
      await deleteStagingBlob(baseUrl as string, uploadId, expectedChunks).catch(() => {});
    } else {
      await deleteStaging(uploadId).catch(() => {});
    }

    return NextResponse.json({ ok: true, media }, { status: 201 });
  } catch (e) {
    console.error("chunk-finish media create failed:", e);
    // the final object exists but the row failed — remove it to avoid orphans
    await deleteFromStorage(key, provider, url).catch(() => {});
    return NextResponse.json({ ok: false, error: "ثبت فایل ناموفق بود" }, { status: 500 });
  }
}