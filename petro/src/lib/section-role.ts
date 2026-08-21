// Human-readable role hint for each homepage section key. Shown next to the
// section name in the admin (post form display tab and the sections page) so
// editors pick the right slot — the raw DB names are ambiguous.
const HINTS: Record<string, string> = {
  hero: "کارت بزرگ هیرو",
  "hero-video": "گرید «برگزیده»",
  videos: "۱ = باکس کنار هیرو · ۲–۵ = گرید ویدیو",
  "top-stories": "سایدبار «اخبار برتر»",
  magazine: "بلوک مجله",
  "digital-economy": "بلوک اقتصاد دیجیتال",
  "ad-1": "بنر تبلیغ ۱",
  "ad-2": "بنر تبلیغ ۲",
  photos: "گالری عکس",
  breaking: "نوار اخبار فوری هدر",
  "category-video": "کارت ویدیوی صفحهٔ آرشیو",
};

export function sectionRoleHint(key: string): string | null {
  return HINTS[key] ?? null;
}
