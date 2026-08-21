"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Cropper, { type Area, type Point } from "react-easy-crop";
import { Loader2, RotateCcw, RotateCw, Scissors, X } from "lucide-react";
import { uploadMediaFile, type UploadedMedia } from "@/lib/upload-client";

interface Props {
  media: UploadedMedia;
  open: boolean;
  onClose: () => void;
  onDone: (media: UploadedMedia) => void;
}

const PRESETS: { key: string; label: string; aspect: number }[] = [
  { key: "free", label: "آزاد", aspect: 0 },
  { key: "16:9", label: "۱۶:۹ — اخبار", aspect: 16 / 9 },
  { key: "4:3", label: "۴:۳", aspect: 4 / 3 },
  { key: "3:2", label: "۳:۲", aspect: 3 / 2 },
  { key: "1:1", label: "۱:۱ — مربع", aspect: 1 },
  { key: "9:16", label: "۹:۱۶", aspect: 9 / 16 },
  { key: "21:9", label: "۲۱:۹ — پانوراما", aspect: 21 / 9 },
];

const MAX_OUTPUT = 2000;
const JPEG_QUALITY = 0.9;

export default function ImageCropDialog({ media, open, onClose, onDone }: Props) {
  const [src, setSrc] = useState<string | null>(null);
  const [imageDims, setImageDims] = useState<{ w: number; h: number } | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [preset, setPreset] = useState("16:9");
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedArea, setCroppedArea] = useState<Area | null>(null);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState<{ done: number; total: number } | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const aspect = preset === "free" && imageDims ? imageDims.w / imageDims.h : (PRESETS.find((p) => p.key === preset)?.aspect ?? 16 / 9);

  useEffect(() => {
    if (!open || !media) return;
    setLoadError(null);
    setSrc(null);
    setImageDims(null);
    setPreset("16:9");
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setRotation(0);
    setCroppedArea(null);
    setErr(null);
    setProgress(null);

    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(media.url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const blob = await res.blob();
        if (cancelled) return;
        const url = URL.createObjectURL(blob);
        const img = new Image();
        imgRef.current = img;
        img.onload = () => {
          if (cancelled) return;
          setImageDims({ w: img.naturalWidth, h: img.naturalHeight });
          setSrc(url);
        };
        img.onerror = () => {
          if (cancelled) return;
          setLoadError("بارگذاری تصویر برای برش ناموفق بود");
          URL.revokeObjectURL(url);
        };
        img.src = url;
      } catch {
        if (!cancelled) setLoadError("بارگذاری تصویر برای برش ناموفق بود");
      }
    })();

    return () => {
      cancelled = true;
      if (imgRef.current?.src.startsWith("blob:")) {
        URL.revokeObjectURL(imgRef.current.src);
      }
    };
  }, [open, media]);

  const onCropComplete = useCallback((_: Area, areaPixels: Area) => {
    setCroppedArea(areaPixels);
  }, []);

  async function save() {
    if (!src || !croppedArea || !imageDims) return;
    setBusy(true);
    setErr(null);
    setProgress(null);
    try {
      const img = await new Promise<HTMLImageElement>((resolve, reject) => {
        const el = new Image();
        el.onload = () => resolve(el);
        el.onerror = () => reject(new Error("decode failed"));
        el.src = src;
      });

      // Render the (possibly rotated) source onto a canvas.
      const rad = (rotation * Math.PI) / 180;
      const c = Math.abs(Math.cos(rad));
      const s = Math.abs(Math.sin(rad));
      const W = Math.max(1, Math.round(img.naturalWidth * c + img.naturalHeight * s));
      const H = Math.max(1, Math.round(img.naturalWidth * s + img.naturalHeight * c));
      const rotated = document.createElement("canvas");
      rotated.width = W;
      rotated.height = H;
      const rctx = rotated.getContext("2d");
      if (!rctx) throw new Error("canvas unsupported");
      rctx.translate(W / 2, H / 2);
      rctx.rotate(rad);
      rctx.drawImage(img, -img.naturalWidth / 2, -img.naturalHeight / 2);

      // Crop at a sensible output resolution (never upscale beyond source).
      const { x, y, width, height } = croppedArea;
      const scale = Math.min(1, MAX_OUTPUT / Math.max(width, height));
      const outW = Math.max(1, Math.round(width * scale));
      const outH = Math.max(1, Math.round(height * scale));

      const out = document.createElement("canvas");
      out.width = outW;
      out.height = outH;
      const octx = out.getContext("2d");
      if (!octx) throw new Error("canvas unsupported");
      octx.imageSmoothingQuality = "high";
      octx.drawImage(rotated, x, y, width, height, 0, 0, outW, outH);

      const isPng = media.mimeType === "image/png";
      const type = isPng ? "image/png" : "image/jpeg";
      const blob = await new Promise<Blob | null>((resolve) =>
        out.toBlob(resolve, type, JPEG_QUALITY)
      );
      if (!blob) throw new Error("export failed");
      const name =
        media.key.replace(/\.[^.]+$/, "") +
        (isPng ? ".png" : "-cropped.jpg");
      const file = new File([blob], name, { type });

      const uploaded = await uploadMediaFile(file, media.alt, (done, total) =>
        setProgress({ done, total })
      );
      onDone(uploaded);
    } catch (e) {
      setErr(e instanceof Error ? e.message : "برش تصویر ناموفق بود");
    } finally {
      setBusy(false);
      setProgress(null);
    }
  }

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4 ${
        open ? "" : "hidden"
      }`}
      dir="rtl"
    >
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[92vh] flex flex-col overflow-hidden">
        {/* header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-200">
          <h3 className="font-bold text-zinc-900 flex items-center gap-2">
            <Scissors className="w-4 h-4 text-blue-600" />
            برش حرفه‌ای تصویر
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="text-zinc-400 hover:text-zinc-700"
            aria-label="بستن"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* crop area */}
        <div className="relative flex-1 min-h-[320px] bg-zinc-900 overflow-hidden">
          {loadError ? (
            <div className="absolute inset-0 flex items-center justify-center text-sm text-red-400 px-6 text-center">
              {loadError}
            </div>
          ) : !src ? (
            <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-sm">
              <Loader2 className="w-5 h-5 animate-spin ml-2" />
              در حال آماده‌سازی تصویر...
            </div>
          ) : (
            <Cropper
              image={src}
              crop={crop}
              zoom={zoom}
              rotation={rotation}
              aspect={aspect}
              minZoom={0.5}
              maxZoom={4}
              zoomWithScroll
              showGrid
              restrictPosition={false}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onRotationChange={setRotation}
              onCropComplete={onCropComplete}
            />
          )}
        </div>

        {/* controls */}
        <div className="px-5 py-4 space-y-4 border-t border-zinc-200">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-zinc-500 font-bold w-14 shrink-0">
              نسبت:
            </span>
            {PRESETS.map((p) => (
              <button
                key={p.key}
                type="button"
                onClick={() => setPreset(p.key)}
                className={`px-2.5 py-1 text-[11px] rounded-full border transition-colors ${
                  preset === p.key
                    ? "bg-blue-600 text-white border-blue-600 font-bold"
                    : "border-zinc-300 text-zinc-600 hover:border-blue-400"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-between text-[11px] text-zinc-500 mb-1">
                <span>بزرگ‌نمایی</span>
                <span dir="ltr">{zoom.toFixed(2)}×</span>
              </div>
              <input
                type="range"
                min={0.5}
                max={4}
                step={0.01}
                value={zoom}
                onChange={(e) => setZoom(parseFloat(e.target.value))}
                className="w-full accent-blue-600"
              />
            </div>
            <div>
              <div className="flex items-center justify-between text-[11px] text-zinc-500 mb-1">
                <span>چرخش</span>
                <span dir="ltr">{rotation}°</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setRotation((r) => r - 90)}
                  className="p-1.5 rounded-md border border-zinc-300 text-zinc-600 hover:border-blue-400"
                  title="چرخش ۹۰ درجه به چپ"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <input
                  type="range"
                  min={-45}
                  max={45}
                  step={1}
                  value={rotation}
                  onChange={(e) => setRotation(parseInt(e.target.value, 10))}
                  className="flex-1 accent-blue-600"
                />
                <button
                  type="button"
                  onClick={() => setRotation((r) => r + 90)}
                  className="p-1.5 rounded-md border border-zinc-300 text-zinc-600 hover:border-blue-400"
                  title="چرخش ۹۰ درجه به راست"
                >
                  <RotateCw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {err && <p className="text-[12px] text-red-600 font-medium">{err}</p>}
          {progress && (
            <p className="text-[12px] text-zinc-500 flex items-center gap-2">
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              در حال آپلود نسخه برش‌خورده...{" "}
              {Math.round((progress.done / progress.total) * 100)}٪
            </p>
          )}

          <div className="flex items-center justify-between gap-3">
            <p className="text-[11px] text-zinc-400">
              نسخه برش‌خورده به‌عنوان تصویر جدید آپلود و در کتابخانه ذخیره
              می‌شود.
            </p>
            <div className="flex gap-2 shrink-0">
              <button
                type="button"
                onClick={onClose}
                disabled={busy}
                className="px-4 py-2 text-sm rounded-md border border-zinc-300 text-zinc-700 hover:bg-zinc-50 disabled:opacity-50"
              >
                انصراف
              </button>
              <button
                type="button"
                onClick={save}
                disabled={busy || !src || !croppedArea}
                className="inline-flex items-center gap-2 px-5 py-2 text-sm font-bold rounded-md bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-60"
              >
                {busy && <Loader2 className="w-4 h-4 animate-spin" />}
                ذخیره و استفاده
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}