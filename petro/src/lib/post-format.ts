// Display formatting helpers for posts on the public site (server-side).

export function faDigits(s: string | number): string {
  return String(s).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]);
}

export function faDate(d: Date): string {
  return d.toLocaleDateString("fa-IR");
}

export function faTime(d: Date): string {
  return d.toLocaleTimeString("fa-IR", { hour: "2-digit", minute: "2-digit" });
}

export function faDateLong(d: Date): string {
  return d.toLocaleDateString("fa-IR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function faViews(n: number): string {
  return n.toLocaleString("fa-IR");
}

/** seconds -> "m:ss" in Persian digits */
export function faDuration(seconds: number | null | undefined): string | null {
  if (seconds == null || seconds <= 0) return null;
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return faDigits(`${m}:${String(s).padStart(2, "0")}`);
}

/** Relative time in Persian: "۲ ساعت پیش" */
export function faRelativeTime(d: Date): string {
  const diff = Date.now() - d.getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return "همین حالا";
  if (m < 60) return `${faDigits(m)} دقیقه پیش`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${faDigits(h)} ساعت پیش`;
  const days = Math.floor(h / 24);
  return `${faDigits(days)} روز پیش`;
}
