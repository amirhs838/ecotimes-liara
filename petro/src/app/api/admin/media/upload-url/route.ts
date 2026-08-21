import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { requireAdmin, isErrorResponse } from "@/lib/security";
import { getS3Client, s3Config, getStorageProvider } from "@/lib/storage";
import { uploadLimits } from "@/lib/file-validation";

export const runtime = "nodejs";

const MIME_TO_EXT: Record<string, { kind: "image" | "video"; ext: string }> = {
  "image/jpeg": { kind: "image", ext: "jpg" },
  "image/png": { kind: "image", ext: "png" },
  "image/webp": { kind: "image", ext: "webp" },
  "video/mp4": { kind: "video", ext: "mp4" },
  "video/webm": { kind: "video", ext: "webm" },
};

// Step 1 of the direct-to-storage upload flow: returns a short-lived
// presigned PUT URL. The browser uploads the file straight to the S3
// endpoint (no proxy through this function), then calls /media/confirm.
export async function POST(req: Request) {
  const guard = await requireAdmin(req);
  if (isErrorResponse(guard)) return guard.response;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "بدنه درخواست نامعتبر است" },
      { status: 400 }
    );
  }

  const { mimeType, size, alt } = (body ?? {}) as Record<string, unknown>;
  const def = typeof mimeType === "string" ? MIME_TO_EXT[mimeType.toLowerCase()] : undefined;
  if (!def) {
    return NextResponse.json(
      { ok: false, error: "فقط تصویر (jpg/png/webp) یا ویدیو (mp4/webm) مجاز است" },
      { status: 415 }
    );
  }
  if (typeof size !== "number" || !Number.isFinite(size) || size <= 0) {
    return NextResponse.json(
      { ok: false, error: "حجم فایل نامعتبر است" },
      { status: 400 }
    );
  }
  const maxBytes = uploadLimits()[def.kind];
  if (size > maxBytes) {
    return NextResponse.json(
      {
        ok: false,
        error: `حجم فایل بیشتر از حد مجاز است (${Math.round(
          maxBytes / 1024 / 1024
        )}MB)`,
      },
      { status: 413 }
    );
  }
  const cleanAlt = typeof alt === "string" ? alt.trim().slice(0, 300) : "";

  // Only the S3 provider supports presigned direct uploads; otherwise the
  // client falls back to the legacy multipart route.
  if (getStorageProvider() !== "s3") {
    return NextResponse.json({ ok: true, key: null, uploadUrl: null });
  }

  const key = `${randomUUID()}.${def.ext}`;
  let uploadUrl: string;
  try {
    uploadUrl = await getSignedUrl(
      getS3Client(),
      new PutObjectCommand({
        Bucket: s3Config().bucket,
        Key: key,
        ContentType: mimeType.toLowerCase(),
      }),
      { expiresIn: 900 }
    );
  } catch {
    return NextResponse.json(
      { ok: false, error: "آماده‌سازی آپلود ناموفق بود" },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, key, uploadUrl, expiresIn: 900, alt: cleanAlt });
}