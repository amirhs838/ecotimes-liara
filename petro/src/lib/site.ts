// Site-wide constants used for SEO, canonical URLs and absolute links.
// Brand is configurable via env so the same codebase can power any news site.

export const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? "اکوتایمز";
export const siteNameEn = process.env.NEXT_PUBLIC_SITE_NAME_EN ?? "EcoTimes";
export const siteTagline =
  process.env.NEXT_PUBLIC_SITE_TAGLINE ?? "پایگاه خبری اقتصاد و فناوری";
export const siteDescription =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
  "اکوتایمز، پایگاه خبری اقتصاد و فناوری؛ تازه‌ترین اخبار و تحلیل‌های هوش مصنوعی، اقتصاد دیجیتال، سلامت و درمان، زیست‌فناوری و نانو، میکروالکترونیک، انرژی، آب و محیط‌زیست، امنیت غذایی و صنایع خلاق.";
export const siteKeywords = (
  process.env.NEXT_PUBLIC_SITE_KEYWORDS ?? "اکوتایمز,اخبار اقتصاد,اخبار فناوری,هوش مصنوعی,اقتصاد دیجیتال,انرژی,زیست‌فناوری"
).split(",");

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

/** Turns a path (or already-absolute URL) into an absolute site URL. */
export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function postUrl(slug: string): string {
  return `${siteUrl}/news/${slug}`;
}
