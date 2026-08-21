import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { requireAdmin, isErrorResponse } from "@/lib/security";
import { uploadLimits } from "@/lib/file-validation";
import {
  isS3Provider,
  putStagingMeta,
  sweepStaging,
} from "@/lib/s3-staging";
import {
  blobToken,
  putStagingMetaBlob,
  sweepStagingBlob,
} from "@/lib/blob-staging";

export const runtime = "nodejs";

const ALLOWED_MIME: Record<string, "image" | "video"> = {
  "image/jpeg": "image",
  "image/png": "image",
  "image/webp": "image",
  "video/mp4": "video",
  "video/webm": "video",
};

const CHUNK_SIZE_IMAGE = 128 * 1024;
const CHUNK_SIZE_VIDEO = 512 * 1024;

export async function POST(req: Request) {
  const guard = await requireAdmin(req);
  if (isErrorResponse(guard)) return guard.response;

  let body: { fileName?: string; mimeType?: string; size?: number };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "بدنه درخواست نامعتبر است" }, { status: 400 });
  }

  const mimeType = (body.mimeType || "").toLowerCase();
  const kind = ALLOWED_MIME[mimeType];
  if (!kind) {
    return NextResponse.json(
      { ok: false, error: "نوع فایل مجاز نیست. فقط تصویر (jpg/png/webp) یا ویدیو (mp4/webm)" },
      { status: 415 }
    );
  }

  const size = Math.floor(Number(body.size));
  if (!Number.isFinite(size) || size <= 0) {
    return NextResponse.json({ ok: false, error: "اندازه فایل نامعتبر است" }, { status: 400 });
  }

  const limits = uploadLimits();
  const maxBytes = kind === "image" ? limits.image : limits.video;
  if (size > maxBytes) {
    const maxMb = Math.round(maxBytes / (1024 * 1024));
    return NextResponse.json(
      {
        ok: false,
        error: `حجم فایل بیش از حد مجاز است (حداکثر ${maxMb} مگابایت برای ${
          kind === "image" ? "تصویر" : "ویدیو"
        })`,
      },
      { status: 413 }
    );
  }

  const uploadId = randomUUID();
  const chunkSize = kind === "image" ? CHUNK_SIZE_IMAGE : CHUNK_SIZE_VIDEO;

  try {
    if (kind === "image" && blobToken()) {
      // Images: stage on Vercel Blob (internal, fast, never stalls).
      await sweepStagingBlob(); // opportunistic cleanup
      const { baseUrl } = await putStagingMetaBlob(uploadId, {
        expectedSize: size,
        chunkSize,
        mimeType,
      });
      return NextResponse.json({
        ok: true,
        uploadId,
        chunkSize,
        staging: "blob",
        baseUrl,
      });
    }

    if (isS3Provider()) {
      // Videos: stage on the object storage itself.
      await sweepStaging(); // opportunistic cleanup
      await putStagingMeta(uploadId, { expectedSize: size, chunkSize, mimeType });
      return NextResponse.json({ ok: true, uploadId, chunkSize, staging: "s3" });
    }

    return NextResponse.json(
      { ok: false, error: "آپلود تکه‌تکه در این حالت ذخیره‌سازی پشتیبانی نمی‌شود" },
      { status: 501 }
    );
  } catch (e) {
    console.error("chunk-start staging failed:", e);
    return NextResponse.json(
      { ok: false, error: "آماده‌سازی فضای ذخیره‌سازی ناموفق بود" },
      { status: 500 }
    );
  }
}