// Client-side helper for uploading media through the storage abstraction layer
// (POST /api/admin/media/upload). Used by the rich text editor and post forms.

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

export async function uploadMediaFile(
  file: File,
  alt = ""
): Promise<UploadedMedia> {
  const fd = new FormData();
  fd.append("file", file);
  if (alt) fd.append("alt", alt);

  const res = await fetch("/api/admin/media/upload", {
    method: "POST",
    body: fd,
  });
  const data = await res.json().catch(() => null);
  if (!res.ok || !data?.ok) {
    throw new Error(data?.error ?? "آپلود فایل ناموفق بود");
  }
  return data.media as UploadedMedia;
}
