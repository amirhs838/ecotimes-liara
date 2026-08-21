import { NextResponse } from "next/server";
import {
  GetObjectCommand,
  HeadObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { db } from "@/lib/db";
import { requireAdmin, isErrorResponse } from "@/lib/security";
import { getS3Client, s3Config } from "@/lib/storage";
import {
  detectFileType,
  uploadLimits,
  MEDIA_KEY_REGEX,
} from "@/lib/file-validation";

export const runtime = "nodejs";

// Step 2 of the direct-to-storage upload flow: verifies the object that the
// browser uploaded straight to S3 (existence, size, magic bytes), then
// registers it in the Media table. Nothing is ever proxied through here.
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

  const { key, alt } = (body ?? {}) as Record<string, unknown>;
  if (typeof key !== "string" || !MEDIA_KEY_REGEX.test(key)) {
    return NextResponse.json(
      { ok: false, error: "کلید فایل نامعتبر است" },
      { status: 400 }
    );
  }
  const cleanAlt = typeof alt === "string" ? alt.trim().slice(0, 300) : "";

  const bucket = s3Config().bucket;
  let head;
  try {
    head = await getS3Client().send(
      new HeadObjectCommand({ Bucket: bucket, Key: key })
    );
  } catch {
    return NextResponse.json(
      { ok: false, error: "فایل در فضای ذخیره‌سازی یافت نشد" },
      { status: 404 }
    );
  }

  const size = head.ContentLength ?? 0;

  // Read only the first bytes to validate the content by magic number.
  let detected;
  try {
    const first = await getS3Client().send(
      new GetObjectCommand({ Bucket: bucket, Key: key, Range: "bytes=0-63" })
    );
    const chunk = Buffer.from(await first.Body!.transformToByteArray());
    detected = detectFileType(chunk);
  } catch {
    detected = null;
  }
  if (!detected) {
    await getS3Client()
      .send(new DeleteObjectCommand({ Bucket: bucket, Key: key }))
      .catch(() => {});
    return NextResponse.json(
      { ok: false, error: "محتوای فایل معتبر نیست (تصویر یا ویدیو)" },
      { status: 415 }
    );
  }

  const maxBytes = uploadLimits()[detected.kind];
  if (size > maxBytes) {
    await getS3Client()
      .send(new DeleteObjectCommand({ Bucket: bucket, Key: key }))
      .catch(() => {});
    return NextResponse.json(
      { ok: false, error: "حجم فایل بیشتر از حد مجاز است" },
      { status: 413 }
    );
  }

  const media = await db.media.create({
    data: {
      key,
      url: `/api/media/${key}`,
      provider: "s3",
      kind: detected.kind,
      mimeType: detected.mimeType,
      size,
      alt: cleanAlt,
    },
  });

  return NextResponse.json({ ok: true, media }, { status: 201 });
}