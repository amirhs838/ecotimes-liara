// Storage abstraction layer.
//
// - S3 (default in production): when S3_BUCKET + S3_ACCESS_KEY + S3_SECRET_KEY
//   are set, files are stored in Parspack (S3-compatible) object storage and
//   served from the CDN URL (https://<endpoint>/<bucket>/<key>).
// - Blob (legacy): when only BLOB_READ_WRITE_TOKEN is set, Vercel Blob.
// - Local (development): files are written to <project>/storage/uploads and
//   served through /api/media/<key> (outside public/, so only registered
//   media is reachable).

import path from "path";
import fs from "fs/promises";
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { NodeHttpHandler } from "@smithy/node-http-handler";

export type StorageProvider = "local" | "blob" | "s3";

export interface StoredFile {
  key: string;
  url: string;
  provider: StorageProvider;
}

export function getStorageProvider(): StorageProvider {
  if (
    process.env.S3_BUCKET &&
    process.env.S3_ACCESS_KEY &&
    process.env.S3_SECRET_KEY
  ) {
    return "s3";
  }
  return process.env.BLOB_READ_WRITE_TOKEN ? "blob" : "local";
}

export const LOCAL_UPLOAD_DIR = path.join(process.cwd(), "storage", "uploads");

export function localFilePath(key: string): string {
  return path.join(LOCAL_UPLOAD_DIR, key);
}

// --- S3 (Parspack object storage) ---

export function s3Config() {
  return {
    endpoint: (process.env.S3_ENDPOINT ?? "").replace(/\/+$/, ""),
    bucket: process.env.S3_BUCKET ?? "",
    accessKey: process.env.S3_ACCESS_KEY ?? "",
    secretKey: process.env.S3_SECRET_KEY ?? "",
    publicBase:
      (process.env.S3_PUBLIC_URL ?? "").replace(/\/+$/, "") || null,
  };
}

let s3Client: S3Client | null = null;

export function getS3Client(): S3Client {
  if (!s3Client) {
    const cfg = s3Config();
    s3Client = new S3Client({
      region: "us-east-1",
      endpoint: cfg.endpoint,
      forcePathStyle: true,
      // Parspack (OCDN) can stall on aws-chunked/checksummed uploads —
      // checksums are only sent when the API requires them.
      requestChecksumCalculation: "WHEN_REQUIRED",
      // Parspack intermittently stalls; fail fast and let callers/retries
      // decide instead of letting the SDK burn minutes on dead sockets.
      maxAttempts: 2,
      requestHandler: new NodeHttpHandler({
        connectionTimeout: 5000,
        socketTimeout: 15000,
      }),
      credentials: {
        accessKeyId: cfg.accessKey,
        secretAccessKey: cfg.secretKey,
      },
    });
  }
  return s3Client;
}

export function s3PublicBase(): string | null {
  const cfg = s3Config();
  return cfg.publicBase ?? (cfg.endpoint && cfg.bucket ? `${cfg.endpoint}/${cfg.bucket}` : null);
}

export async function uploadToStorage(
  key: string,
  data: Buffer,
  contentType: string
): Promise<StoredFile> {
  const provider = getStorageProvider();

  if (provider === "s3") {
    if (!s3PublicBase()) throw new Error("S3 public base URL is not configured");
    const cfg = s3Config();
    await getS3Client().send(
      new PutObjectCommand({
        Bucket: cfg.bucket,
        Key: key,
        Body: data,
        ContentType: contentType,
        CacheControl: "public, max-age=31536000, immutable",
      })
    );
    // Relative URL — /api/media/<key> decides between a direct CDN redirect
    // (public bucket) and a credentialed proxy (private bucket).
    return { key, url: `/api/media/${key}`, provider };
  }

  if (provider === "blob") {
    const { put } = await import("@vercel/blob");
    const blob = await put(key, data, {
      access: "public",
      contentType,
      token: process.env.BLOB_READ_WRITE_TOKEN,
      addRandomSuffix: false,
    });
    return { key, url: blob.url, provider };
  }

  await fs.mkdir(LOCAL_UPLOAD_DIR, { recursive: true });
  await fs.writeFile(localFilePath(key), data);
  return { key, url: `/api/media/${key}`, provider };
}

export async function deleteFromStorage(
  key: string,
  provider: string,
  url: string
): Promise<void> {
  if (provider === "s3") {
    await getS3Client()
      .send(new DeleteObjectCommand({ Bucket: s3Config().bucket, Key: key }))
      .catch(() => {
        // already gone — nothing to do
      });
    return;
  }
  if (provider === "blob") {
    const { del } = await import("@vercel/blob");
    await del(url, { token: process.env.BLOB_READ_WRITE_TOKEN });
    return;
  }
  await fs.unlink(localFilePath(key)).catch(() => {
    // already gone — nothing to do
  });
}