// Client-side helper for uploading media through the storage abstraction layer.
// Every upload is CHUNKED: the file is split into small pieces (128KB images /
// 512KB videos) and each piece is POSTed to the server separately. Small
// requests pass through networks that drop or hang larger bodies (the admin
// panel's own traffic already proves small requests work). The server stages
// the pieces and assembles the final object into the object storage.
// Every request has a timeout + retries so the UI can never spin forever.

export interface UploadedMedia {
  id: string;
  key: string;
  url: string;
  provider: string;
  kind: "image" | "video";
  mimeType: string;
  size: number;
  width: number | null;
  height: number | null;
  alt: string;
}

const NETWORK_HINT =
  "خطا در ارتباط با سرور — اینترنت خود را بررسی کنید و دوباره تلاش کنید.";

const CHUNK_UNSUPPORTED = "__chunk_unsupported__";

const MAX_IMAGE_DIMENSION = 2000;
const MAX_IMAGE_BYTES = 2 * 1024 * 1024;
const IMAGE_QUALITY = 0.85;

const TIMEOUT_API = 60_000;
const TIMEOUT_CHUNK = 90_000;
const MAX_ATTEMPTS = 6;
const BACKOFF_MS = [2000, 4000, 8000, 16000, 30000];
const CONCURRENCY_IMAGE = 2;
const CONCURRENCY_VIDEO = 1;

// Downscales large images in the browser so uploads stay small and reliable,
// even over slow or filtered connections. Returns the original file untouched
// for videos, tiny images, or when re-encoding fails.
async function prepareImageFile(file: File): Promise<File> {
  if (!file.type.startsWith("image/")) return file;
  if (file.type === "image/gif") return file;
  if (file.size <= MAX_IMAGE_BYTES && file.size <= 4 * 1024 * 1024) return file;

  try {
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const el = new Image();
      el.onload = () => resolve(el);
      el.onerror = () => reject(new Error("decode failed"));
      el.src = URL.createObjectURL(file);
    });
    const w = img.naturalWidth;
    const h = img.naturalHeight;
    if (!w || !h) return file;

    const scale = Math.min(1, MAX_IMAGE_DIMENSION / Math.max(w, h));
    const outW = Math.max(1, Math.round(w * scale));
    const outH = Math.max(1, Math.round(h * scale));

    const canvas = document.createElement("canvas");
    canvas.width = outW;
    canvas.height = outH;
    const ctx = canvas.getContext("2d");
    if (!ctx) return file;
    ctx.drawImage(img, 0, 0, outW, outH);

    const type = file.type === "image/png" ? "image/png" : "image/jpeg";
    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, type, IMAGE_QUALITY)
    );
    URL.revokeObjectURL(img.src);
    if (!blob || blob.size >= file.size) return file;
    const name =
      file.name.replace(/\.[^.]+$/, "") + (type === "image/png" ? ".png" : ".jpg");
    return new File([blob], name, { type });
  } catch {
    return file;
  }
}

async function fetchJson(url: string, init: RequestInit, timeoutMs: number) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    return await fetch(url, { ...init, signal: ctrl.signal });
  } finally {
    clearTimeout(timer);
  }
}

// Errors carrying a real server-side validation message are FINAL — they must
// surface verbatim (e.g. size limits), not be masked by network hints.
function isFinalError(e: unknown): boolean {
  return e instanceof Error && e.message.startsWith("حجم فایل");
}

// True when the request never reached the server (connection reset, timeout).
// Server responses — even errors — produce regular Error objects with the
// server's own message and must NOT be replaced by the generic network hint.
function isNetworkError(e: unknown): boolean {
  if (e instanceof TypeError) return true;
  if (typeof DOMException !== "undefined" && e instanceof DOMException) return true;
  return e instanceof Error && /fetch failed|ECONNRESET|ECONNREFUSED|ETIMEDOUT|UND_ERR/i.test(e.message);
}

// Runs an async action with retries; only final errors are rethrown
// immediately, everything else retries up to MAX_ATTEMPTS times.
async function withRetries<T>(
  action: () => Promise<T>,
  isFinal: (e: unknown) => boolean
): Promise<T> {
  let lastErr: unknown;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      return await action();
    } catch (e) {
      lastErr = e;
      if (isFinal(e)) throw e;
      if (attempt < MAX_ATTEMPTS) {
        const wait = BACKOFF_MS[attempt - 1] ?? 8000;
        await new Promise((r) => setTimeout(r, wait));
      }
    }
  }
  throw lastErr;
}

// Fallback for non-S3 storage (local dev / legacy): single multipart POST.
async function legacyUpload(file: File, alt: string): Promise<UploadedMedia> {
  try {
    const fd = new FormData();
    fd.append("file", file);
    if (alt) fd.append("alt", alt);
    const up = await fetchJson(
      "/api/admin/media/upload",
      { method: "POST", body: fd },
      TIMEOUT_API
    );
    const upData = await up.json().catch(() => null);
    if (!up.ok || !upData?.ok) {
      throw new Error(upData?.error ?? "آپلود فایل ناموفق بود");
    }
    return upData.media as UploadedMedia;
  } catch (e) {
    if (isFinalError(e)) throw e;
    if (isNetworkError(e)) {
      throw new Error(`آپلود فایل: ${NETWORK_HINT}`);
    }
    throw e instanceof Error ? e : new Error(String(e));
  }
}

// Video is uploaded in full — homepage loop shows only first 15s via
// AutoPlayVideo (onTimeUpdate). No browser trimming so news page keeps full video.
async function prepareVideoFile(file: File): Promise<File> {
  return file;
}

export async function uploadMediaFile(
  file: File,
  alt = "",
  onProgress?: (done: number, total: number) => void
): Promise<UploadedMedia> {
  let prepared = await prepareImageFile(file);
  if (prepared.type.startsWith("video/")) {
    prepared = await prepareVideoFile(prepared);
  }

  // 1) Open a staging session
  async function openSession(): Promise<{
    uploadId: string;
    chunkSize: number;
    staging: "blob" | "s3";
    baseUrl: string | null;
  }> {
    const data = await withRetries(
      async () => {
        const init = await fetchJson(
          "/api/admin/media/chunk-start",
          {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              fileName: prepared.name,
              mimeType: prepared.type || "application/octet-stream",
              size: prepared.size,
            }),
          },
          TIMEOUT_API
        );
        const d = await init.json().catch(() => null);
        if (init.status === 501) {
          throw new Error(CHUNK_UNSUPPORTED); // non-S3 storage: legacy upload
        }
        if (!init.ok || !d?.ok) {
          throw new Error(d?.error ?? "آماده‌سازی آپلود ناموفق بود");
        }
        return d as { ok: boolean; uploadId: string; chunkSize: number; staging: "blob" | "s3"; baseUrl?: string };
      },
      isFinalError
    );
    return {
      uploadId: data.uploadId,
      chunkSize: data.chunkSize,
      staging: data.staging,
      baseUrl: data.baseUrl ?? null,
    };
  }

  // 2) Send every piece; direct to S3 for s3 staging (no Vercel traffic),
  //    old path for blob staging (images). Direct S3 is 3-5x faster.
  async function sendAllChunks(
    uploadId: string,
    chunkSize: number,
    staging: "blob" | "s3",
    baseUrl: string | null
  ): Promise<void> {
    const totalChunks = Math.max(1, Math.ceil(prepared.size / chunkSize));
    // Direct S3 can handle more parallelism (no Vercel bottleneck)
    const concurrency =
      staging === "s3" ? 4 : prepared.type.startsWith("image/") ? CONCURRENCY_IMAGE : CONCURRENCY_VIDEO;
    let completed = 0;

    async function sendChunk(index: number) {
      const start = index * chunkSize;
      const slice = prepared.slice(start, Math.min(start + chunkSize, prepared.size));
      if (staging === "s3") {
        // Direct upload to Parspack S3 via presigned URL — bytes never touch Vercel
        await withRetries(
          async () => {
            const pres = await fetchJson(
              "/api/admin/media/presign",
              {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ uploadId, index }),
              },
              TIMEOUT_API
            );
            const presData = await pres.json().catch(() => null);
            if (!pres.ok || !presData?.ok || !presData?.url) {
              throw new Error(presData?.error ?? "دریافت لینک آپلود ناموفق بود");
            }
            const putRes = await fetchJson(
              presData.url as string,
              {
                method: "PUT",
                body: slice,
                headers: { "Content-Type": "application/octet-stream" },
              },
              TIMEOUT_CHUNK
            );
            if (!putRes.ok) {
              throw new Error(`ارسال قطعه ${index + 1} ناموفق بود (${putRes.status})`);
            }
          },
          (e) => e instanceof Error && e.message === "اندازه قطعه بیش از حد مجاز است"
        );
      } else {
        await withRetries(
          async () => {
            const fd = new FormData();
            fd.append("uploadId", uploadId);
            fd.append("staging", staging);
            if (baseUrl) fd.append("baseUrl", baseUrl);
            fd.append("index", String(index));
            fd.append("chunk", slice, `chunk-${index}`);
            const up = await fetchJson(
              "/api/admin/media/chunk",
              { method: "POST", body: fd },
              TIMEOUT_CHUNK
            );
            if (!up.ok) {
              const d = await up.json().catch(() => null);
              throw new Error(d?.error ?? `ارسال قطعه ${index + 1} ناموفق بود`);
            }
          },
          (e) => e instanceof Error && e.message === "اندازه قطعه بیش از حد مجاز است"
        );
      }
      completed++;
      onProgress?.(completed, totalChunks);
    }

    for (let offset = 0; offset < totalChunks; offset += concurrency) {
      const batch = Array.from(
        { length: Math.min(concurrency, totalChunks - offset) },
        (_, i) => offset + i
      );
      await Promise.all(batch.map(sendChunk));
    }
  }

  // 1+2) Open a session and send every piece. If the connection dies mid-way
  //      (filtered networks reset parallel requests), restart the whole upload
  //      automatically — staged pieces are simply re-sent to a fresh session.
  let session: {
    uploadId: string;
    chunkSize: number;
    staging: "blob" | "s3";
    baseUrl: string | null;
  } | null = null;
  for (let cycle = 0; cycle < 2; cycle++) {
    try {
      session = await openSession();
      await sendAllChunks(
        session.uploadId,
        session.chunkSize,
        session.staging,
        session.baseUrl
      );
      break;
    } catch (e) {
      if (e instanceof Error && e.message === CHUNK_UNSUPPORTED) {
        return legacyUpload(prepared, alt);
      }
      if (isFinalError(e)) throw e;
      if (cycle === 1) {
        if (isNetworkError(e)) {
          throw new Error(`آپلود فایل: ${NETWORK_HINT}`);
        }
        throw e instanceof Error ? e : new Error(String(e));
      }
    }
  }
  if (!session) {
    throw new Error(`آپلود فایل: ${NETWORK_HINT}`);
  }

  // 3) Assemble on the server and register the Media row.
  //    The final step touches the object storage (Parspack) once; a stall there
  //    would otherwise surface as a generic failure, so retry it.
  try {
    const finishData = await withRetries(
      async () => {
        const finish = await fetchJson(
          "/api/admin/media/chunk-finish",
          {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              uploadId: session!.uploadId,
              staging: session!.staging,
              baseUrl: session!.baseUrl,
              alt,
            }),
          },
          TIMEOUT_API
        );
        const d = await finish.json().catch(() => null);
        if (!finish.ok || !d?.ok) {
          throw new Error(d?.error ?? "ثبت فایل ناموفق بود");
        }
        return d.media as UploadedMedia;
      },
      isFinalError
    );
    return finishData;
  } catch (e) {
    if (isFinalError(e)) throw e;
    if (isNetworkError(e)) {
      throw new Error(`ثبت فایل: ${NETWORK_HINT}`);
    }
    throw e instanceof Error ? e : new Error(String(e));
  }
}