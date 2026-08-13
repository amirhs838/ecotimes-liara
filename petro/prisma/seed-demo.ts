import { PrismaClient } from "@prisma/client";

/**
 * EcoTimes demo content (OPTIONAL — not part of the base seed).
 *
 *   npx tsx prisma/seed-demo.ts          → fill the site with demo posts
 *   npx tsx prisma/seed-demo.ts --clean  → remove all demo posts
 *
 * Demo posts have slugs starting with "demo-" so they are easy to identify
 * and wipe (also deletable one-by-one from the admin panel).
 */

const prisma = new PrismaClient();

// [title, categorySlug] — section -> items (position = order in array)
const CONTENT: Record<string, [string, string][] > = {
  hero: [["پیشرفت بزرگ ایران در تولید تراشه‌های هوش مصنوعی", "ai"]],
  breaking: [
    ["گزارش تازه از بازار تراشه‌های جهان", "microelectronics"],
    ["افتتاح بزرگ‌ترین نیروگاه خورشیدی کشور", "energy"],
    ["داروی جدید زیست‌فناوری مجوز گرفت", "biotech-nano"],
    ["اقتصاد دیجیتال ایران رشد ۲۰ درصدی را ثبت کرد", "digital-economy"],
    ["آب‌رسانی هوشمند به ۵ کلان‌شهر رسید", "water-environment"],
    ["صنایع خلاق و اقتصاد فرهنگ", "creative-industries"],
    ["امنیت غذایی با فناوری‌های نوین", "food-security"],
  ],
  videos: [
    ["مستند کوتاه: آینده هوش مصنوعی در ایران", "ai"],
    ["گزارش تصویری از بزرگ‌ترین مزرعه خورشیدی", "energy"],
    ["رونمایی از تراشه جدید ملی", "microelectronics"],
  ],
  photos: [
    ["گردهمایی شرکت‌های دانش‌بنیان", "digital-economy"],
    ["جشنواره فناوری تهران", "ai"],
    ["نمایشگاه انرژی‌های تجدیدپذیر", "energy"],
  ],
  ai: [
    ["مدل زبانی فارسی رکورد جهانی شکست", "ai"],
    ["هوش مصنوعی در بیمارستان‌های ایران", "ai"],
    ["استارتاپ ایرانی جایزه جهانی گرفت", "ai"],
    ["ربات‌های انسان‌نما به خط تولید آمدند", "ai"],
    ["آموزش هوش مصنوعی در مدارس", "ai"],
    ["تراشه عصبی ایرانی رونمایی شد", "ai"],
    ["هوش مصنوعی و آینده کار", "ai"],
    ["بهره‌وری صنعت با یادگیری ماشین", "ai"],
    ["دستیار صوتی فارسی معرفی شد", "ai"],
    ["هوش مصنوعی در کشاورزی دقیق", "ai"],
    ["تشخیص زودهنگام بیماری با AI", "ai"],
    ["مسابقه ملی رباتیک", "ai"],
    ["صندوق سرمایه‌گذاری هوش مصنوعی", "ai"],
  ],
  "digital-economy": [
    ["رشد پرداخت‌های دیجیتال در ایران", "digital-economy"],
    ["بانکداری باز چیست؟", "digital-economy"],
    ["رمزریال در مسیر آزمایشی", "digital-economy"],
  ],
  health: [["پیوند قلب با دستگاه ایرانی موفق شد", "health"]],
  "biotech-nano": [
    ["داروی نانویی ایرانی وارد بازار شد", "biotech-nano"],
    ["واکسن جدید در فاز بالینی", "biotech-nano"],
    ["نانوذرات در تصفیه آب", "biotech-nano"],
    ["زیست‌فناوری و امنیت غذایی", "biotech-nano"],
    ["سلول‌های بنیادی امید تازه", "biotech-nano"],
    ["نانوروبات جراح", "biotech-nano"],
    ["تولید انسولین ملی", "biotech-nano"],
    ["بانک ژن ایران گسترش یافت", "biotech-nano"],
  ],
  microelectronics: [
    ["فاب تراشه جدید افتتاح شد", "microelectronics"],
    ["واردات تجهیزات نیمه‌رسانا", "microelectronics"],
    ["طراحی چیپ ملی", "microelectronics"],
    ["رشد صادرات الکترونیک", "microelectronics"],
    ["خط تولید سنسور ایرانی", "microelectronics"],
  ],
  energy: [
    ["رکورد تولید برق خورشیدی", "energy"],
    ["ذخیره‌سازهای بزرگ باتری", "energy"],
    ["بخش‌نامه جدید انرژی", "energy"],
    ["هیدروژن سبز در ایران", "energy"],
  ],
  "water-environment": [
    ["پروژه انتقال آب هوشمند", "water-environment"],
    ["کاهش مصرف آب کشاورزی", "water-environment"],
    ["حفاظت از تالاب‌ها", "water-environment"],
  ],
  "food-security": [
    ["ذخایر استراتژیک گندم", "food-security"],
    ["کشت قراردادی گسترش یافت", "food-security"],
    ["فناوری در گلخانه‌ها", "food-security"],
  ],
  "creative-industries": [
    ["صادرات بازی‌های ایرانی", "creative-industries"],
    ["سینما و اقتصاد فرهنگ", "creative-industries"],
    ["استارتاپ‌های محتوا", "creative-industries"],
  ],
};

async function clean() {
  const d = await prisma.post.deleteMany({ where: { slug: { startsWith: "demo-" } } });
  console.log(`Demo posts removed: ${d.count}`);
}

async function seed() {
  await clean();
  const cats = await prisma.category.findMany();
  const cat = (s: string) => cats.find((c) => c.slug === s)!.id;
  let n = 0;

  for (const [section, items] of Object.entries(CONTENT)) {
    const sec = await prisma.homeSection.findUnique({ where: { key: section } });
    if (!sec) {
      console.log("missing section:", section);
      continue;
    }
    for (let i = 0; i < items.length; i++) {
      const [title, catSlug] = items[i];
      const post = await prisma.post.create({
        data: {
          slug: `demo-${section}-${i + 1}`,
          title,
          lead: "خلاصه نمونه این خبر برای نمایش چیدمان صفحه اصلی اکوتایمز تولید شده است و توسط تحریریه جایگزین می‌شود.",
          body: "<p>متن نمونه بدنه خبر.</p>",
          categoryId: cat(catSlug),
          status: "PUBLISHED",
          publishedAt: new Date(Date.now() - (n + 1) * 1800_000),
          homeImageAlt: title,
          views: 150 - n,
          ...(section === "videos"
            ? { videoType: "APARAT" as const, videoUrl: "https://www.aparat.com/v/xyz123", videoDuration: 68 + i * 40 }
            : {}),
          ...(i === 0 && (section === "hero" || section === "ai")
            ? { homepageVideoType: "APARAT" as const, homepageVideoUrl: "https://www.aparat.com/v/xyz123" }
            : {}),
        },
      });
      await prisma.sectionPlacement.create({
        data: { sectionId: sec.id, postId: post.id, position: i + 1 },
      });
      n++;
    }
  }
  console.log(`Demo posts created: ${n}`);
}

if (process.argv.includes("--clean")) {
  clean().finally(() => prisma.$disconnect());
} else {
  seed().finally(() => prisma.$disconnect());
}
