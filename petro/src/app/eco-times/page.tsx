import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "اکو تایمز | Eco Times",
  description: "اکو تایمز (Eco Times) — اکوتایمز؛ رسانه خبری اقتصاد و فناوری ایران در eco-times.ir. آخرین اخبار و تحلیل‌های روز را دنبال کنید.",
  alternates: { canonical: absoluteUrl("/eco-times") },
  openGraph: {
    title: "اکو تایمز | Eco Times",
    description: "اکو تایمز (Eco Times) — اکوتایمز؛ رسانه خبری اقتصاد و فناوری ایران در eco-times.ir.",
    url: absoluteUrl("/eco-times"),
    siteName: "اکو تایمز",
    type: "website",
  },
};

export default function EcoTimesBrandPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "اکو تایمز | Eco Times",
    url: absoluteUrl("/eco-times"),
    description: "اکو تایمز (Eco Times) رسانه خبری اقتصاد و فناوری ایران",
    isPartOf: { "@type": "WebSite", name: "اکو تایمز", url: absoluteUrl("/") },
  };

  return (
    <main className="max-w-[900px] mx-auto px-4 lg:px-6 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-2xl sm:text-3xl font-black text-zinc-950 mb-6">اکو تایمز | Eco Times</h1>
      <div className="prose prose-zinc max-w-none">
        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed mb-5">
          <strong>اکو تایمز</strong> با نام‌های <strong>اکوتایمز</strong> و <strong>Eco Times</strong> در نشانی{" "}
          <a href="https://eco-times.ir" className="text-blue-700 hover:underline">
            eco-times.ir
          </a>{" "}
          منتشر می‌شود و مرجع اخبار و تحلیل‌های روز اقتصاد، انرژی، صنعت و بازار ایران است.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          برای مطالعه تازه‌ترین اخبار به <Link href="/" className="text-blue-700 hover:underline">صفحه اصلی اکو تایمز</Link> مراجعه کنید
          یا درباره ما بیشتر در <Link href="/about" className="text-blue-700 hover:underline">درباره اکو تایمز</Link> بخوانید.
        </p>
      </div>
    </main>
  );
}
