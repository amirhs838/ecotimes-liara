"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { HomePost } from "@/lib/home-data";
import { PostCard, BlockTitle } from "./block-shared";

/** Model B (ABC "War with Iran" carousel): scrollable row of 3 cards with arrows. */
export default function BlockModelB({ items }: { items: HomePost[] }) {
  const scroller = useRef<HTMLDivElement>(null);
  if (items.length === 0) return null;
  const title = items[0].category;
  const href = `/category/${items[0].categoryKey}`;

  function scroll(dir: 1 | -1) {
    scroller.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  }

  return (
    <section className="bg-white">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-5 py-6 lg:py-8">
        <div className="flex items-end justify-between mb-4 lg:mb-5">
          <BlockTitle title={title} href={href} />
          {items.length > 3 && (
            <div className="hidden lg:flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll(1)}
                aria-label="قبلی"
                className="w-8 h-8 rounded-full border border-hairline text-ink hover:border-brand hover:text-brand flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll(-1)}
                aria-label="بعدی"
                className="w-8 h-8 rounded-full border border-hairline text-ink hover:border-brand hover:text-brand flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
        <div
          ref={scroller}
          className="grid grid-cols-1 lg:grid-cols-3 lg:grid-flow-col lg:auto-cols-[calc(33.333%-1rem)] gap-5 lg:gap-6 lg:overflow-x-auto scrollbar-hidden"
        >
          {items.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
