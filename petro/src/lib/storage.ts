// Storage abstraction layer.
//
// - Development (default): files are written to <project>/storage/uploads and
//   served through /api/media/<key> (outside public/, so only registered
//   media is reachable).
// - Production: when BLOB_READ_WRITE_TOKEN is set, the same functions store
//   in Vercel Blob instead. The rest of the app never knows the difference —
//   it only sees the returned URL.

import path from "path";
import fs from "fs/promises";

export type StorageProvider = "local" | "blob";

export interface StoredFile {
  key: string;
  url: string;
  provider: StorageProvider;
}

export function getStorageProvider(): StorageProvider {
  return process.env.BLOB_READ_WRITE_TOKEN ? "blob" : "local";
}

export const LOCAL_UPLOAD_DIR = path.join(process.cwd(), "storage", "uploads");

export function localFilePath(key: string): string {
  return path.join(LOCAL_UPLOAD_DIR, key);
}

export async function uploadToStorage(
  key: string,
  data: Buffer,
  contentType: string
): Promise<StoredFile> {
  const provider = getStorageProvider();

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
  if (provider === "blob") {
    const { del } = await import("@vercel/blob");
    await del(url, { token: process.env.BLOB_READ_WRITE_TOKEN });
    return;
  }
  await fs.unlink(localFilePath(key)).catch(() => {
    // already gone — nothing to do
  });
}
