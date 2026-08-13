import type { HomePost } from "@/lib/home-data";
import SmartImage from "./smart-image";
import { BlockTitle } from "./block-shared";

/**
 * "داغ‌ترین‌ها" (ABC "Trending Stories"): light gray band with small
 * thumb + red label + headline + red relative-time cards. Automatic (latest).
 */
export default function TrendingStories({ items }: { items: HomePost[] }) {
  if (items.length === 0) return null;

  return (
    <section id="trending" className="bg-bg-light">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-5 py-6 lg:py-8">
        <BlockTitle title="داغ‌ترین‌ها" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5">
          {items.map((p) => (
            <a key={p.id} href={p.href ?? "#"} className="group flex items-start gap-3">
              <span className="relative w-20 h-20 rounded-md overflow-hidden shrink-0 bg-zinc-200">
                <SmartImage
                  src={p.imageUrl}
                  alt={p.imageAlt}
                  ratio="auto"
                  category={p.categoryKey}
                  className="!w-full !h-full object-cover"
                />
              </span>
              <span className="min-w-0">
                <span className="block text-brand text-[12px] font-medium">{p.category}</span>
                <span className="block mt-1 text-[14px] font-bold text-ink leading-snug line-clamp-2 group-hover:text-brand transition-colors">
                  {p.title}
                </span>
                <span className="block mt-1 text-brand text-[12px]">{p.publishedAgo}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
