// Chunked-upload staging on Vercel Blob.
//
// Used for IMAGE uploads: Blob is Vercel-internal (no external network), so
// chunk writes/reads are ~300-500ms and never stall the way the Parspack S3
// API intermittently does. Chunks are deleted immediately after assembly, so
// the Blob quota is only touched transiently (the final image stays on Blob —
// downscaled to ~1MB, thousands of images fit in the free 5GB tier).
//
// Keys are deterministic (no random suffix), so the finish step can rebuild
// every chunk URL from the base URL returned at chunk-start.

import { put, del, list, type ListBlobResult } from "@vercel/blob";

const TMP_PREFIX = "tmp/";
const TMP_TTL_MS = 6 * 60 * 60 * 1000;

interface StagingMeta {
  expectedSize: number;
  chunkSize: number;
  mimeType: string;
}

function baseUrlOf(metaUrl: string): string {
  const idx = metaUrl.lastIndexOf(`/${TMP_PREFIX}`);
  return idx >= 0 ? metaUrl.slice(0, idx) : metaUrl;
}

export function blobToken(): string | undefined {
  return process.env.BLOB_READ_WRITE_TOKEN;
}

export async function putStagingMetaBlob(uploadId: string, meta: StagingMeta) {
  const res = await put(`${TMP_PREFIX}${uploadId}/meta`, JSON.stringify(meta), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    token: blobToken(),
  });
  return { metaUrl: res.url, baseUrl: baseUrlOf(res.url) };
}

export async function getStagingMetaBlob(baseUrl: string, uploadId: string) {
  const res = await fetch(`${baseUrl}/${TMP_PREFIX}${uploadId}/meta`);
  if (!res.ok) throw new Error(`meta fetch failed: ${res.status}`);
  return (await res.json()) as StagingMeta;
}

export async function putStagingChunkBlob(
  baseUrl: string,
  uploadId: string,
  index: number,
  data: Buffer,
  contentType: string
) {
  const key = `${TMP_PREFIX}${uploadId}/${String(index).padStart(6, "0")}`;
  await put(key, data, {
    access: "public",
    contentType,
    addRandomSuffix: false,
    token: blobToken(),
  });
  return `${baseUrl}/${key}`;
}

export function chunkUrl(baseUrl: string, uploadId: string, index: number) {
  return `${baseUrl}/${TMP_PREFIX}${uploadId}/${String(index).padStart(6, "0")}`;
}

export async function readStagingChunkBlob(
  baseUrl: string,
  uploadId: string,
  index: number
): Promise<Buffer> {
  const res = await fetch(chunkUrl(baseUrl, uploadId, index));
  if (!res.ok) throw new Error(`chunk fetch failed: ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

export async function deleteStagingBlob(
  baseUrl: string,
  uploadId: string,
  count: number
) {
  const urls = [
    `${baseUrl}/${TMP_PREFIX}${uploadId}/meta`,
    ...Array.from({ length: count }, (_, i) => chunkUrl(baseUrl, uploadId, i)),
  ];
  await del(urls, { token: blobToken() });
}

// Removes abandoned uploads (started but never finished). Best-effort.
export async function sweepStagingBlob() {
  try {
    const cutoff = Date.now() - TMP_TTL_MS;
    let cursor: string | undefined;
    do {
      const res = await list({
        prefix: TMP_PREFIX,
        limit: 100,
        cursor,
        token: blobToken(),
      });
      const stale = (res.blobs as ListBlobResult[]).filter(
        (b) => b.uploadedAt && new Date(b.uploadedAt).getTime() < cutoff
      );
      if (stale.length > 0) {
        await del(stale.map((b) => b.url), { token: blobToken() });
      }
      cursor = res.cursor;
    } while (cursor);
  } catch {
    // sweep is opportunistic
  }
}