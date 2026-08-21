// Chunked-upload staging on the object storage itself (Parspack S3).
//
// Each in-flight upload lives under tmp/<uploadId>/ as a small "meta" object
// plus one object per chunk (tmp/<uploadId>/000000, 000001, ...). Chunks are
// written directly to the object storage — NO database traffic per chunk —
// so uploads never exhaust the Neon free-tier connection limit the way
// per-chunk DB upserts did.

import {
  PutObjectCommand,
  GetObjectCommand,
  ListObjectsV2Command,
  DeleteObjectsCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { getS3Client, s3Config, getStorageProvider } from "./storage";

const TMP_PREFIX = "tmp/";
const TMP_TTL_MS = 6 * 60 * 60 * 1000;

export function isS3Provider(): boolean {
  return getStorageProvider() === "s3";
}

interface StagingMeta {
  expectedSize: number;
  chunkSize: number;
  mimeType: string;
}

function bucket() {
  return s3Config().bucket;
}

function metaKey(uploadId: string): string {
  return `${TMP_PREFIX}${uploadId}/meta`;
}

function chunkKey(uploadId: string, index: number): string {
  return `${TMP_PREFIX}${uploadId}/${String(index).padStart(6, "0")}`;
}

export async function putStagingMeta(uploadId: string, meta: StagingMeta) {
  await getS3Client().send(
    new PutObjectCommand({
      Bucket: bucket(),
      Key: metaKey(uploadId),
      Body: JSON.stringify(meta),
      ContentType: "application/json",
    })
  );
}

export async function getStagingMeta(uploadId: string): Promise<StagingMeta> {
  const res = await getS3Client().send(
    new GetObjectCommand({ Bucket: bucket(), Key: metaKey(uploadId) })
  );
  const text = await res.Body.transformToString();
  return JSON.parse(text) as StagingMeta;
}

export async function putStagingChunk(
  uploadId: string,
  index: number,
  data: Buffer
) {
  await getS3Client().send(
    new PutObjectCommand({
      Bucket: bucket(),
      Key: chunkKey(uploadId, index),
      Body: data,
      ContentType: "application/octet-stream",
    })
  );
}

export async function getPresignedChunkUrl(
  uploadId: string,
  index: number,
  contentType = "application/octet-stream",
  expiresSec = 3600
): Promise<string> {
  return getSignedUrl(
    getS3Client(),
    new PutObjectCommand({
      Bucket: bucket(),
      Key: chunkKey(uploadId, index),
      ContentType: contentType,
    }),
    { expiresIn: expiresSec }
  );
}

export async function listStagingChunks(
  uploadId: string
): Promise<{ index: number; key: string }[]> {
  const prefix = `${TMP_PREFIX}${uploadId}/`;
  const out: { index: number; key: string }[] = [];
  let token: string | undefined;
  do {
    const res = await getS3Client().send(
      new ListObjectsV2Command({
        Bucket: bucket(),
        Prefix: prefix,
        ContinuationToken: token,
      })
    );
    for (const obj of res.Contents ?? []) {
      if (!obj.Key) continue;
      const name = obj.Key.slice(prefix.length);
      if (name === "meta") continue;
      const index = Number(name);
      if (Number.isInteger(index)) out.push({ index, key: obj.Key });
    }
    token = res.IsTruncated ? res.NextContinuationToken : undefined;
  } while (token);
  out.sort((a, b) => a.index - b.index);
  return out;
}

export async function readStagingChunk(
  uploadId: string,
  index: number
): Promise<Buffer> {
  const res = await getS3Client().send(
    new GetObjectCommand({ Bucket: bucket(), Key: chunkKey(uploadId, index) })
  );
  return Buffer.from(await res.Body.transformToByteArray());
}

export async function deleteStaging(uploadId: string) {
  const chunks = await listStagingChunks(uploadId);
  const keys = [metaKey(uploadId), ...chunks.map((c) => c.key)];
  if (keys.length === 0) return;
  // DeleteObjects takes up to 1000 keys at once
  await getS3Client().send(
    new DeleteObjectsCommand({
      Bucket: bucket(),
      Delete: { Objects: keys.map((Key) => ({ Key })) },
    })
  );
}

// Removes abandoned uploads (started but never finished) so the tmp/ prefix
// never accumulates. Best-effort: failures are swallowed.
export async function sweepStaging() {
  try {
    const cutoff = new Date(Date.now() - TMP_TTL_MS).toISOString();
    let token: string | undefined;
    do {
      const res = await getS3Client().send(
        new ListObjectsV2Command({
          Bucket: bucket(),
          Prefix: TMP_PREFIX,
          ContinuationToken: token,
        })
      );
      const stale = (res.Contents ?? []).filter(
        (o) => o.LastModified && o.LastModified.toISOString() < cutoff
      );
      if (stale.length > 0) {
        await getS3Client().send(
          new DeleteObjectsCommand({
            Bucket: bucket(),
            Delete: { Objects: stale.map((o) => ({ Key: o.Key! })) },
          })
        );
      }
      token = res.IsTruncated ? res.NextContinuationToken : undefined;
    } while (token);
  } catch {
    // sweep is opportunistic
  }
}