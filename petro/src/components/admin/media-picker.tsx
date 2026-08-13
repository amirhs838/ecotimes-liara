"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { uploadMediaFile, type UploadedMedia } from "@/lib/upload-client";
import { ImagePlus, Loader2, X, Film } from "lucide-react";

interface MediaPickerProps {
  kind: "image" | "video";
  value: UploadedMedia | null;
  onSelect: (media: UploadedMedia) => void;
  onClear: () => void;
  placeholder?: string;
}

export default function MediaPicker({
  kind,
  value,
  onSelect,
  onClear,
  placeholder,
}: MediaPickerProps) {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"library" | "upload">("library");
  const [items, setItems] = useState<UploadedMedia[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    setError(null);
    fetch(`/api/admin/media?kind=${kind}&pageSize=48`)
      .then((r) => r.json())
      .then((d) => setItems(d.items ?? []))
      .catch(() => setError("بارگذاری کتابخانه ناموفق بود"))
      .finally(() => setLoading(false));
  }, [open, kind]);

  async function onUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setUploading(true);
    setError(null);
    try {
      const media = await uploadMediaFile(file);
      onSelect(media);
      setOpen(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "آپلود ناموفق بود");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      {value ? (
        <div className="relative border border-zinc-200 rounded-lg overflow-hidden bg-zinc-50">
          {kind === "image" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={value.url}
              alt={value.alt || ""}
              className="w-full h-40 object-cover"
            />
          ) : (
            <div className="w-full h-40 flex items-center justify-center bg-zinc-900 text-white gap-2">
              <Film className="w-5 h-5" />
              <span className="text-xs" dir="ltr">
                {value.url}
              </span>
            </div>
          )}
          <div className="absolute top-2 left-2 flex gap-1">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="text-[11px] bg-white/90 hover:bg-white border border-zinc-300 rounded px-2 py-1"
            >
              تغییر
            </button>
            <button
              type="button"
              onClick={onClear}
              className="text-[11px] bg-red-600/90 hover:bg-red-600 text-white rounded px-2 py-1 inline-flex items-center gap-1"
            >
              <X className="w-3 h-3" />
              حذف
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="w-full border-2 border-dashed border-zinc-300 hover:border-blue-500 rounded-lg py-8 text-sm text-zinc-500 hover:text-blue-700 transition-colors flex flex-col items-center gap-2"
        >
          <ImagePlus className="w-6 h-6" />
          {placeholder ??
            (kind === "image" ? "انتخاب یا آپلود تصویر" : "انتخاب یا آپلود ویدیو")}
        </button>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-3xl max-h-[85vh] overflow-y-auto" dir="rtl">
          <DialogHeader>
            <DialogTitle>
              {kind === "image" ? "انتخاب تصویر" : "انتخاب ویدیو"}
            </DialogTitle>
          </DialogHeader>

          <div className="flex gap-2 border-b border-zinc-200 pb-2">
            <button
              type="button"
              onClick={() => setTab("library")}
              className={`px-3 py-1.5 text-sm rounded-md ${
                tab === "library"
                  ? "bg-blue-600 text-white font-bold"
                  : "text-zinc-600 hover:bg-zinc-100"
              }`}
            >
              کتابخانه رسانه
            </button>
            <button
              type="button"
              onClick={() => setTab("upload")}
              className={`px-3 py-1.5 text-sm rounded-md ${
                tab === "upload"
                  ? "bg-blue-600 text-white font-bold"
                  : "text-zinc-600 hover:bg-zinc-100"
              }`}
            >
              آپلود جدید
            </button>
          </div>

          {error && <p className="text-sm text-red-600 pt-2">{error}</p>}

          {tab === "upload" ? (
            <div className="pt-3">
              <label
                className={`block w-full border-2 border-dashed border-zinc-300 hover:border-blue-500 rounded-lg py-10 text-sm text-zinc-600 hover:text-blue-700 transition-colors text-center cursor-pointer ${
                  uploading ? "opacity-50 pointer-events-none" : ""
                }`}
              >
                {uploading ? (
                  <span className="inline-flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    در حال آپلود...
                  </span>
                ) : kind === "image" ? (
                  "انتخاب تصویر (jpg / png / webp — حداکثر ۵ مگابایت)"
                ) : (
                  "انتخاب ویدیو (mp4 / webm — حداکثر ۱۰۰ مگابایت)"
                )}
                <input
                  type="file"
                  className="hidden"
                  accept={
                    kind === "image"
                      ? "image/jpeg,image/png,image/webp"
                      : "video/mp4,video/webm"
                  }
                  onChange={onUpload}
                />
              </label>
            </div>
          ) : (
            <div className="pt-3">
              {loading ? (
                <div className="py-10 text-center text-sm text-zinc-500">
                  <Loader2 className="w-5 h-5 animate-spin inline-block ml-2" />
                  در حال بارگذاری...
                </div>
              ) : items.length === 0 ? (
                <p className="py-10 text-center text-sm text-zinc-500">
                  هنوز رسانه‌ای آپلود نشده — از تب «آپلود جدید» استفاده کنید.
                </p>
              ) : (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {items.map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => {
                        onSelect(m);
                        setOpen(false);
                      }}
                      className="relative aspect-video border border-zinc-200 rounded-lg overflow-hidden hover:ring-2 hover:ring-blue-500 transition-all bg-zinc-100"
                      title={m.alt || m.key}
                    >
                      {m.kind === "image" ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={m.url}
                          alt={m.alt || ""}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="w-full h-full flex items-center justify-center bg-zinc-900 text-white">
                          <Film className="w-6 h-6" />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
