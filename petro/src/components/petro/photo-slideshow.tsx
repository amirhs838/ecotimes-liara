"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SmartImage from "./smart-image";
import type { HomePost } from "@/lib/home-data";

/**
 * Photo slideshow (ABC "Wildfires" gallery, RTL mirror): centered title, big
 * image with a stacked-deck effect, caption, dot navigation + prev/next arrows.
 */
export default function PhotoSlideshow({ items }: { items: HomePost[] }) {
  const [index, setIndex] = useState(0);
  if (items.length === 0) return null;

  const active = items[Math.min(index, items.length - 1)];
  const prev = items[(index - 1 + items.length) % items.length];
  const next = items[(index + 1) % items.length];

  return (
    <section id="photos" className="bg-white">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-5 py-8 lg:py-10">
        <h2 className="text-center">
          <a
            href={active.href ?? "#"}
            className="group inline-flex items-center gap-1.5 text-xl lg:text-[22px] font-black text-ink hover:text-brand transition-colors"
          >
            عکس و فیلم
            <ChevronLeft className="w-5 h-5" />
          </a>
        </h2>

        {/* Stacked deck */}
        <div className="relative mt-6">
          {/* back cards (deck effect) */}
          <div className="absolute inset-x-2 -top-3 bottom-0 rounded-lg overflow-hidden opacity-40 -rotate-1 bg-zinc-200">
            {prev && (
              <SmartImage src={prev.imageUrl} alt="" ratio="auto" category={prev.categoryKey} className="!w-full !h-full object-cover" />
            )}
          </div>
          <div className="absolute inset-x-2 -top-3 bottom-0 rounded-lg overflow-hidden opacity-40 rotate-1 bg-zinc-200">
            {next && (
              <SmartImage src={next.imageUrl} alt="" ratio="auto" category={next.categoryKey} className="!w-full !h-full object-cover" />
            )}
          </div>
          {/* active image */}
          <a
            href={active.href ?? "#"}
            className="relative block rounded-lg overflow-hidden aspect-[16/9] lg:aspect-[21/9] bg-zinc-100 shadow-lg"
          >
            <SmartImage
              src={active.imageUrl}
              alt={active.imageAlt}
              ratio="auto"
              category={active.categoryKey}
              priority
              className="!w-full !h-full object-cover"
            />
          </a>
        </div>

        {/* Caption */}
        <p className="mt-5 text-center text-[13px] text-muted-fg leading-relaxed max-w-2xl mx-auto">
          {active.lead || active.imageAlt}
        </p>

        {/* Nav: prev + dots + next */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)}
            aria-label="قبلی"
            className="w-9 h-9 rounded-full border border-hairline text-ink hover:border-brand hover:text-brand flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-1.5">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`اسلاید ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === index ? "bg-brand" : "bg-hairline hover:bg-muted-fg"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % items.length)}
            aria-label="بعدی"
            className="w-9 h-9 rounded-full border border-hairline text-ink hover:border-brand hover:text-brand flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
