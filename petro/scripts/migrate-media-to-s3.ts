// Migrates existing media (local disk + Vercel Blob) to Parspack S3 storage
// and updates the Media records in the PRODUCTION database.
// The source object is deleted only after a successful S3 upload + DB update.
//
// Usage (PowerShell):
//   $env:DATABASE_URL="postgresql://..."; $env:BLOB_READ_WRITE_TOKEN="vercel_blob_rw_...";
//   $env:S3_ENDPOINT="https://c164900.parspack.net"; $env:S3_BUCKET="c164900";
//   $env:S3_ACCESS_KEY="..."; $env:S3_SECRET_KEY="...";
//   npx tsx scripts/migrate-media-to-s3.ts

import { PrismaClient } from "@prisma/client";
import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { del } from "@vercel/blob";
import fs from "fs/promises";
import path from "path";

const UPLOAD_DIR = path.join(process.cwd(), "storage", "uploads");
const prisma = new PrismaClient();

function s3Config() {
  return {
    endpoint: (process.env.S3_ENDPOINT ?? "").replace(/\/+$/, ""),
    bucket: process.env.S3_BUCKET ?? "",
    accessKey: process.env.S3_ACCESS_KEY ?? "",
    secretKey: process.env.S3_SECRET_KEY ?? "",
  };
}

async function main() {
  const cfg = s3Config();
  if (!cfg.endpoint || !cfg.bucket || !cfg.accessKey || !cfg.secretKey) {
    throw new Error("S3_* env vars are required");
  }
  const masked = (process.env.DATABASE_URL ?? "").replace(/:[^:@]+@/, ":***@");
  console.log("DATABASE_URL points to:", masked);
  if (process.env.DATABASE_URL?.includes("localhost")) {
    console.warn("WARNING: DATABASE_URL is localhost — set it to the PRODUCTION database before migrating!");
  }

  const client = new S3Client({
    region: "us-east-1",
    endpoint: cfg.endpoint,
    forcePathStyle: true,
    credentials: {
      accessKeyId: cfg.accessKey,
      secretAccessKey: cfg.secretKey,
    },
  });

  const items = await prisma.media.findMany({ where: { provider: { not: "s3" } } });
  console.log(`${items.length} media file(s) to migrate`);

  let migrated = 0;
  for (const m of items) {
    try {
      let data: Buffer;
      let sourceDesc = m.provider;
      if (m.provider === "local") {
        data = await fs.readFile(path.join(UPLOAD_DIR, m.key));
      } else if (m.provider === "blob") {
        const res = await fetch(m.url);
        if (!res.ok) throw new Error(`download failed (${res.status})`);
        data = Buffer.from(await res.arrayBuffer());
      } else {
        console.log(`SKIP ${m.key}: unknown provider "${m.provider}"`);
        continue;
      }

      await client.send(
        new PutObjectCommand({
          Bucket: cfg.bucket,
          Key: m.key,
          Body: data,
          ContentType: m.mimeType,
          CacheControl: "public, max-age=31536000, immutable",
        })
      );

      await prisma.media.update({
        where: { id: m.id },
        data: { url: `/api/media/${m.key}`, provider: "s3" },
      });

      if (m.provider === "blob" && process.env.BLOB_READ_WRITE_TOKEN) {
        await del(m.url, { token: process.env.BLOB_READ_WRITE_TOKEN }).catch(() => {});
      } else if (m.provider === "local") {
        await fs.unlink(path.join(UPLOAD_DIR, m.key)).catch(() => {});
      }

      migrated++;
      console.log(`OK  ${m.key} (${sourceDesc}) -> /api/media/${m.key}`);
    } catch (e) {
      console.error(`SKIP ${m.key} (${m.provider}): ${e instanceof Error ? e.message : e}`);
    }
  }
  console.log(`done — ${migrated}/${items.length} migrated`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());