"use client";

import { useRef, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Play } from "lucide-react";
import type { HomePost } from "@/lib/home-data";
import { BlockTitle } from "./block-shared";
import HomepageMedia from "./homepage-media";
import SmartImage from "./smart-image";

const INITIAL_HEADLINES = 5;

/**
 * ABC "Politics" list + "War with Iran" video row (RTL mirror):
 * featured story, two thumbnail rows, text headlines, a "بیشتر بخوانید"
 * button (expands more headlines, or links to the category when there are
 * none), then a horizontally scrollable video carousel below the button.
 */
export default function EnergySpotlight({
  title = "انرژی",
  categoryHref = "/category/energy",
  items,
  videos,
}: {
  title?: string;
  categoryHref?: string;
  items: HomePost[];
  videos: HomePost[];
}) {
  const [expanded, setExpanded] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);

  if (items.length === 0 && videos.length === 0) return null;

  const [featured, ...rest] = items;
  const thumbs = rest.slice(0, 2);
  const headlines = rest.slice(2, 2 + INITIAL_HEADLINES);
  const extra = rest.slice(2 + INITIAL_HEADLINES);

  // RTL scroller: negative left reveals the next cards (they sit to the left)
  function scrollByCards(dir: 1 | -1) {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.8), behavior: "smooth" });
  }

  return (
    <section className="bg-white">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-5">
        {items.length > 0 && (
          <div className="pt-8 lg:pt-10">
            <BlockTitle title={title} href={categoryHref} arrow />

            {/* Featured story */}
            <article>
              <a href={featured.href ?? "#"} className="group block">
                <div className="relative rounded-lg overflow-hidden aspect-video bg-zinc-100">
                  <HomepageMedia
                    imageUrl={featured.imageUrl}
                    imageAlt={featured.imageAlt}
                    categoryKey={featured.categoryKey}
                    video={featured.homepageVideo}
                  />
                </div>
                <span className="block mt-3 text-brand text-[13px] font-medium">
                  {featured.category}
                </span>
                <h3 className="mt-1 text-xl lg:text-2xl font-black text-ink leading-snug group-hover:text-brand transition-colors">
                  {featured.title}
                </h3>
              </a>
            </article>

            {/* Two thumbnail rows */}
            {thumbs.length > 0 && (
              <ul className="mt-4 border-t border-hairline">
                {thumbs.map((p) => (
                  <li key={p.id} className="border-b border-hairline">
                    <a href={p.href ?? "#"} className="group flex items-center gap-4 py-4">
                      <div className="relative w-[34%] sm:w-44 shrink-0 rounded-md overflow-hidden aspect-video bg-zinc-100">
                        <SmartImage
                          src={p.imageUrl}
                          alt={p.imageAlt}
                          ratio="auto"
                          category={p.categoryKey}
                          className="!w-full !h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <span className="text-brand text-[12px] font-medium">{p.category}</span>
                        <h3 className="mt-1 text-[15px] font-bold text-ink leading-snug line-clamp-3 group-hover:text-brand transition-colors">
                          {p.title}
                        </h3>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            )}

            {/* Text-only headlines (+ expanded extras) */}
            {headlines.length > 0 && (
              <ul>
                {headlines.map((p) => (
                  <HeadlineRow key={p.id} post={p} />
                ))}
                {expanded && extra.map((p) => <HeadlineRow key={p.id} post={p} />)}
              </ul>
            )}

            {/* Show more: expands in place, or links to the category archive */}
            <div className="mt-4">
              {extra.length > 0 ? (
                <button
                  type="button"
                  onClick={() => setExpanded((v) => !v)}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-brand/5 hover:bg-brand/10 text-brand text-[15px] font-bold py-3.5 rounded-lg transition-colors"
                >
                  {expanded ? "کمتر بخوانید" : "بیشتر بخوانید"}
                  {expanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              ) : (
                <a
                  href={categoryHref}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-brand/5 hover:bg-brand/10 text-brand text-[15px] font-bold py-3.5 rounded-lg transition-colors"
                >
                  بیشتر بخوانید
                  <ChevronLeft className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        )}

        {/* Horizontally scrollable videos (ABC topic row) */}
        {videos.length > 0 && (
          <div className={items.length > 0 ? "pt-7 pb-8 lg:pb-10" : "py-8 lg:py-10"}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl lg:text-[22px] font-black text-ink">ویدیوهای منتخب</h2>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollByCards(1)}
                  aria-label="قبلی"
                  className="w-9 h-9 rounded-full border border-hairline text-ink hover:border-brand hover:text-brand flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollByCards(-1)}
                  aria-label="بعدی"
                  className="w-9 h-9 rounded-full border border-hairline text-ink hover:border-brand hover:text-brand flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div
              ref={scroller}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-1 custom-scrollbar"
            >
              {videos.map((v) => (
                <a
                  key={v.id}
                  href={v.href ?? "#"}
                  className="group snap-start shrink-0 w-[74%] sm:w-[46%] lg:w-[31.5%]"
                >
                  <div className="relative rounded-md overflow-hidden aspect-video bg-zinc-100">
                    <SmartImage
                      src={v.imageUrl}
                      alt={v.imageAlt}
                      ratio="auto"
                      category={v.categoryKey}
                      className="!w-full !h-full object-cover"
                    />
                    {v.videoDuration && (
                      <span className="absolute bottom-1.5 left-1.5 inline-flex items-center gap-1 bg-black/85 text-white text-[11px] font-bold px-1.5 py-0.5 rounded tabular-nums">
                        <Play className="w-2.5 h-2.5 fill-current" />
                        {v.videoDuration}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 text-[14px] font-bold text-ink leading-snug line-clamp-2 group-hover:text-brand transition-colors">
                    {v.title}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function HeadlineRow({ post }: { post: HomePost }) {
  return (
    <li className="border-b border-hairline">
      <a
        href={post.href ?? "#"}
        className="block py-3.5 text-[15px] font-bold text-ink leading-relaxed hover:text-brand transition-colors line-clamp-2"
      >
        {post.title}
      </a>
    </li>
  );
}
