import { NextResponse } from "next/server";
import { requireAdmin, isErrorResponse } from "@/lib/security";
import { putStagingChunk } from "@/lib/s3-staging";
import { putStagingChunkBlob } from "@/lib/blob-staging";

export const runtime = "nodejs";

const MAX_CHUNK_BYTES = 512 * 1024;
const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function POST(req: Request) {
  const guard = await requireAdmin(req);
  if (isErrorResponse(guard)) return guard.response;

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json(
      { ok: false, error: "بدنه درخواست باید multipart/form-data باشد" },
      { status: 400 }
    );
  }

  const uploadId = form.get("uploadId");
  const staging = form.get("staging");
  const baseUrl = form.get("baseUrl");
  const indexField = form.get("index");
  const chunk = form.get("chunk");

  if (typeof uploadId !== "string" || !UUID_RE.test(uploadId)) {
    return NextResponse.json({ ok: false, error: "شناسه آپلود نامعتبر است" }, { status: 400 });
  }
  if (staging !== "blob" && staging !== "s3") {
    return NextResponse.json({ ok: false, error: "حالت آپلود نامعتبر است" }, { status: 400 });
  }
  if (staging === "blob" && typeof baseUrl !== "string") {
    return NextResponse.json({ ok: false, error: "آدرس آپلود نامعتبر است" }, { status: 400 });
  }
  const index = Number(indexField);
  if (!Number.isInteger(index) || index < 0 || index > 9999) {
    return NextResponse.json({ ok: false, error: "شماره قطعه نامعتبر است" }, { status: 400 });
  }
  if (!(chunk instanceof File)) {
    return NextResponse.json({ ok: false, error: "قطعه‌ای ارسال نشده است" }, { status: 400 });
  }
  if (chunk.size > MAX_CHUNK_BYTES) {
    return NextResponse.json(
      { ok: false, error: "اندازه قطعه بیش از حد مجاز است" },
      { status: 413 }
    );
  }

  const data = Buffer.from(await chunk.arrayBuffer());
  try {
    if (staging === "blob") {
      await putStagingChunkBlob(
        baseUrl as string,
        uploadId,
        index,
        data,
        chunk.type || "application/octet-stream"
      );
    } else {
      await putStagingChunk(uploadId, index, data);
    }
  } catch (e) {
    console.error("chunk staging put failed:", e);
    return NextResponse.json(
      { ok: false, error: "ذخیره قطعه ناموفق بود" },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}