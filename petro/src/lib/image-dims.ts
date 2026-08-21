// Image dimension reader with a resilient fallback.
//
// Primary: sharp (fast, full-featured). On serverless runtimes where the
// sharp native binary may be unavailable (e.g. lockfile generated on a
// different platform), fall back to parsing PNG/JPEG/WebP headers directly —
// dimensions are only metadata, so uploads must never fail because of it.

export interface ImageDims {
  width: number | null;
  height: number | null;
}

function parsePng(b: Buffer): ImageDims | null {
  // IHDR: width/height are 32-bit big-endian at bytes 16..23
  if (b.length < 24) return null;
  return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
}

function parseJpeg(b: Buffer): ImageDims | null {
  // Walk SOF markers: FFC0..FFCF except C4 (DHT), C8 (JPG), CC (DAC)
  let i = 2; // skip SOI
  while (i + 9 < b.length) {
    if (b[i] !== 0xff) return null;
    const marker = b[i + 1];
    const len = b.readUInt16BE(i + 2);
    if (
      marker >= 0xc0 &&
      marker <= 0xcf &&
      marker !== 0xc4 &&
      marker !== 0xc8 &&
      marker !== 0xcc
    ) {
      return { height: b.readUInt16BE(i + 5), width: b.readUInt16BE(i + 7) };
    }
    i += 2 + len;
  }
  return null;
}

function parseWebp(b: Buffer): ImageDims | null {
  if (b.length < 30) return null;
  const fourCC = b.toString("ascii", 12, 16);
  if (fourCC === "VP8X") {
    // canvas width/height: 24-bit little-endian at bytes 24..29, minus 1
    const w = (b[24] | (b[25] << 8) | (b[26] << 16)) + 1;
    const h = (b[27] | (b[28] << 8) | (b[29] << 16)) + 1;
    return { width: w, height: h };
  }
  if (fourCC === "VP8 ") {
    // lossy bitstream: 14-bit LE dims at bytes 26..29
    const w = b.readUInt16LE(26) & 0x3fff;
    const h = b.readUInt16LE(28) & 0x3fff;
    return { width: w, height: h };
  }
  if (fourCC === "VP8L") {
    // lossless: 14-bit dims packed at bytes 21..24
    const bits = b.readUInt32LE(21);
    return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
  }
  return null;
}

function parseHeaderDims(b: Buffer): ImageDims | null {
  try {
    if (b.length > 24 && b[0] === 0x89 && b[1] === 0x50) return parsePng(b);
    if (b.length > 9 && b[0] === 0xff && b[1] === 0xd8) return parseJpeg(b);
    if (
      b.length > 30 &&
      b.toString("ascii", 0, 4) === "RIFF" &&
      b.toString("ascii", 8, 12) === "WEBP"
    ) {
      return parseWebp(b);
    }
  } catch {
    // fall through
  }
  return null;
}

/** Best-effort image dimensions; returns nulls when undetectable. */
export async function getImageDims(buffer: Buffer): Promise<ImageDims> {
  try {
    const sharp = (await import("sharp")).default;
    const meta = await sharp(buffer).metadata();
    if (meta.width && meta.height) {
      return { width: meta.width, height: meta.height };
    }
  } catch {
    // sharp unavailable on this runtime — fall back to header parsing
  }
  return parseHeaderDims(buffer) ?? { width: null, height: null };
}
