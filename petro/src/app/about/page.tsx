import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "درباره اکو تایمز",
  description: "درباره اکو تایمز؛ رسانه خبری اقتصاد و فناوری ایران. با حوزه فعالیت، موضوعات پوشش‌دهی شده و هویت رسانه آشنا شوید.",
  alternates: { canonical: absoluteUrl("/about") },
  openGraph: {
    title: "درباره اکو تایمز",
    description: "درباره اکو تایمز؛ رسانه خبری اقتصاد و فناوری ایران. با حوزه فعالیت، موضوعات پوشش‌دهی شده و هویت رسانه آشنا شوید.",
    url: absoluteUrl("/about"),
    siteName: "اکو تایمز",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="max-w-[900px] mx-auto px-4 lg:px-6 py-8">
      <article className="prose prose-zinc max-w-none">
        <h1 className="text-2xl sm:text-3xl font-black text-zinc-950 mb-6">درباره اکو تایمز</h1>
        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed mb-5">
          اکو تایمز؛ رسانه خبری مستقل اقتصاد و فناوری ایران است. هدف ما ارائه دقیق‌ترین و به‌روزترین تحلیل‌ها و گزارش‌های مرتبط با اقتصاد، انرژی، صنعت و بازار ایران است.
        </p>
        <h2 className="text-lg font-bold text-zinc-900 mt-8 mb-3">حوزه‌های فعالیت</h2>
        <ul className="list-disc pr-5 space-y-2 text-zinc-600 leading-relaxed">
          <li>هوش مصنوعی و فناوری‌های نوین</li>
          <li>اقتصاد دیجیتال و فین‌تک</li>
          <li>سلامت و درمان</li>
          <li>زیست‌فناوری و نانو</li>
          <li>میکروالکترونیک و تراشه</li>
          <li>انرژی و منابع تجدیدپذیر</li>
          <li>آب و محیط‌زیست</li>
          <li>امنیت غذایی و کشاورزی</li>
          <li>صنایع خلاق و اقتصاد فرهنگ</li>
        </ul>
        <h2 className="text-lg font-bold text-zinc-900 mt-8 mb-3">هویت رسانه</h2>
        <p className="text-zinc-600 leading-relaxed">
          اکو تایمز با نام‌های اکوتایمز و Eco Times نیز شناخته می‌شود. تمامی محتوای این رسانه تحت مجوز Creative Commons Attribution 4.0 International License منتشر می‌شود.
        </p>
        <p className="text-zinc-600 leading-relaxed mt-4">
          آدرس: <a href="https://eco-times.ir" className="text-blue-700 hover:underline">eco-times.ir</a>
        </p>
      </article>
    </main>
  );
}
