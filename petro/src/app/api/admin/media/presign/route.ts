import { NextResponse } from "next/server";
import { requireAdmin, isErrorResponse } from "@/lib/security";
import { getStagingMeta, getPresignedChunkUrl } from "@/lib/s3-staging";
import { isS3Provider } from "@/lib/s3-staging";

export const runtime = "nodejs";

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function POST(req: Request) {
  const guard = await requireAdmin(req);
  if (isErrorResponse(guard)) return guard.response;

  if (!isS3Provider()) {
    return NextResponse.json(
      { ok: false, error: "فضای ابری S3 پیکربندی نشده است" },
      { status: 500 }
    );
  }

  let body: { uploadId?: string; index?: number; contentType?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "بدنه درخواست نامعتبر است" }, { status: 400 });
  }

  const uploadId = body.uploadId;
  const index = Number(body.index);

  if (typeof uploadId !== "string" || !UUID_RE.test(uploadId)) {
    return NextResponse.json({ ok: false, error: "شناسه آپلود نامعتبر است" }, { status: 400 });
  }
  if (!Number.isInteger(index) || index < 0 || index > 9999) {
    return NextResponse.json({ ok: false, error: "شماره قطعه نامعتبر است" }, { status: 400 });
  }

  try {
    const meta = await getStagingMeta(uploadId);
    const expectedChunks = Math.ceil(meta.expectedSize / meta.chunkSize);
    if (index >= expectedChunks) {
      return NextResponse.json({ ok: false, error: "شماره قطعه خارج از محدوده است" }, { status: 400 });
    }

    const contentType = typeof body.contentType === "string" && body.contentType ? body.contentType : "application/octet-stream";
    const url = await getPresignedChunkUrl(uploadId, index, contentType);

    return NextResponse.json({ ok: true, url });
  } catch (e) {
    console.error("presign failed:", e);
    return NextResponse.json({ ok: false, error: "جلسه آپلود یافت نشد یا خطای سرور" }, { status: 404 });
  }
}
