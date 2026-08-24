// Site-wide constants used for SEO, canonical URLs and absolute links.
// Brand is configurable via env so the same codebase can power any news site.

export const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? "اکو تایمز";
export const siteNameEn = process.env.NEXT_PUBLIC_SITE_NAME_EN ?? "Eco Times";
export const siteTagline =
  process.env.NEXT_PUBLIC_SITE_TAGLINE ?? "پایگاه خبری اقتصاد و فناوری";
export const siteDescription =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
  "اکو تایمز؛ مرجع اخبار و تحلیل‌های روز اقتصاد، انرژی، صنعت و بازار ایران. تازه‌ترین اخبار و گزارش‌ها را در اکو تایمز دنبال کنید.";
export const siteKeywords = (
  process.env.NEXT_PUBLIC_SITE_KEYWORDS ??
  "اکو تایمز,اکوتایمز,Eco Times,eco-times,eco-times.ir,اخبار اقتصاد,اخبار فناوری,هوش مصنوعی,اقتصاد دیجیتال,انرژی"
).split(",");

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://eco-times.ir"
).replace(/\/$/, "");

/** Turns a path (or already-absolute URL) into an absolute site URL. */
export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function postUrl(slug: string): string {
  return `${siteUrl}/news/${slug}`;
}
