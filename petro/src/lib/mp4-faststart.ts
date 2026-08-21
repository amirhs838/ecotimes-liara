// qtfaststart-style faststart: move the moov atom to the front of an MP4 so
// browsers can start playback after a tiny prefix instead of downloading the
// whole file. Returns the same buffer (identity) when no reordering is needed.

export interface Mp4Box {
  offset: number;
  size: number;
  type: string;
}

function walkBoxes(buf: Buffer, start = 0, end = buf.length): Mp4Box[] {
  const boxes: Mp4Box[] = [];
  let offset = start;
  while (offset + 8 <= end) {
    let size = buf.readUInt32BE(offset);
    let headerSize = 8;
    if (size === 1) {
      if (offset + 16 > end) break;
      const high = buf.readUInt32BE(offset + 8);
      const low = buf.readUInt32BE(offset + 12);
      if (high !== 0) break;
      size = low;
      headerSize = 16;
    } else if (size === 0) {
      size = end - offset;
    }
    if (size < headerSize || offset + size > end) break;
    boxes.push({ offset, size, type: buf.toString("ascii", offset + 4, offset + 8) });
    offset += size;
  }
  return boxes;
}

/**
 * Reorders an MP4 so the moov atom precedes the mdat atom. Chunk-offset
 * tables (stco/co64) inside moov are shifted by the new moov size so media
 * data stays addressable. Returns the original buffer untouched when the
 * file is already faststart or when the layout cannot be safely rewritten.
 */
export function faststartMp4(input: Buffer): Buffer {
  if (input.length < 16) return input;

  const boxes = walkBoxes(input);
  const ftyp = boxes.find((b) => b.type === "ftyp");
  const moov = boxes.find((b) => b.type === "moov");
  const mdat = boxes.find((b) => b.type === "mdat");

  if (!ftyp || !moov || !mdat) return input;
  if (moov.offset <= mdat.offset) return input; // already faststart

  // Work on a scratch copy of the moov atom (including its 8-byte header).
  const scratch = Buffer.from(input.subarray(moov.offset, moov.offset + moov.size));
  const offsetTables: { boxOffset: number; entryCount: number; isCo64: boolean }[] = [];
  let failed = false;

  function walkChildren(containerStart: number, containerEnd: number) {
    let o = containerStart;
    while (o + 8 <= containerEnd) {
      let size = scratch.readUInt32BE(o);
      let headerSize = 8;
      if (size === 1) {
        if (o + 16 > containerEnd) { failed = true; return; }
        const high = scratch.readUInt32BE(o + 8);
        const low = scratch.readUInt32BE(o + 12);
        if (high !== 0) { failed = true; return; }
        size = low;
        headerSize = 16;
      } else if (size === 0) {
        size = containerEnd - o;
      }
      if (size < headerSize || o + size > containerEnd) { failed = true; return; }
      const type = scratch.toString("ascii", o + 4, o + 8);
      if (type === "stco" || type === "co64") {
        if (o + 16 > containerEnd) { failed = true; return; }
        offsetTables.push({ boxOffset: o, entryCount: scratch.readUInt32BE(o + 12), isCo64: type === "co64" });
      }
      if (type === "moov" || type === "trak" || type === "mdia" || type === "minf" || type === "stbl" || type === "edts" || type === "dinf") {
        walkChildren(o + headerSize, o + size);
      }
      o += size;
    }
  }

  walkChildren(8, scratch.length); // moov's children start after its own header
  if (failed) return input;

  // No size changes occur (boxes stay 32-bit for < 4GiB atoms), so the moov
  // keeps its original size and the media data shifts by exactly that much.
  const delta = scratch.length;
  for (const t of offsetTables) {
    const step = t.isCo64 ? 8 : 4;
    const tableOffset = t.boxOffset + 16;
    if (tableOffset + t.entryCount * step > scratch.length) return input;
    for (let i = 0; i < t.entryCount; i++) {
      const at = tableOffset + i * step;
      if (t.isCo64) {
        const high = scratch.readUInt32BE(at);
        const low = scratch.readUInt32BE(at + 4);
        if (high !== 0) return input;
        scratch.writeUInt32BE(low + delta, at + 4);
      } else {
        scratch.writeUInt32BE(scratch.readUInt32BE(at) + delta, at);
      }
    }
  }

  const prefix = Buffer.from(input.subarray(0, mdat.offset));
  const suffix = Buffer.from(input.subarray(mdat.offset, moov.offset));
  const tail = Buffer.from(input.subarray(moov.offset + moov.size));
  const out = Buffer.concat([prefix, scratch, suffix, tail]);
  if (out.length !== input.length) return input;
  return out;
}
