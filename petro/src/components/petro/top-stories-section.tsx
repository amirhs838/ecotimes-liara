import type { HomePost } from "@/lib/home-data";
import HomepageMedia from "./homepage-media";

interface Props {
  cards: HomePost[];
  mostViewed: HomePost[];
}

/**
 * ABC-style "top stories" row (RTL mirror): image cards on the right/main area
 * and the most-viewed sidebar box on the left. Sidebar is automatic (view counter).
 */
export default function TopStoriesSection({ cards, mostViewed }: Props) {
  if (cards.length === 0 && mostViewed.length === 0) return null;

  return (
    <section className="bg-white">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-5 pb-6 lg:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
          {/* Cards — main area (right in RTL). Mobile: horizontal list
              (small thumb on the right + text on the left, hairline dividers);
              sm and up: vertical cards, 2 rows of 4 on xl. */}
          {cards.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 sm:gap-5">
              {cards.map((p) => (
                <article key={p.id} className="border-b border-hairline last:border-b-0 sm:border-b-0">
                  <a href={p.href ?? "#"} className="group flex items-start gap-3 py-3 sm:block sm:py-0">
                    <div className="relative w-[28%] shrink-0 rounded-md overflow-hidden aspect-[3/2] bg-zinc-100 sm:w-full">
                      <HomepageMedia
                        imageUrl={p.imageUrl}
                        imageAlt={p.imageAlt}
                        categoryKey={p.categoryKey}
                        video={p.homepageVideo}
                      />
                    </div>
                    <div className="min-w-0 flex-1 sm:mt-2.5">
                      <span className="text-brand text-[13px] font-medium">{p.category}</span>
                      <h3 className="mt-1 text-[15px] font-bold text-ink leading-snug line-clamp-3 group-hover:text-brand transition-colors">
                        {p.title}
                      </h3>
                      {/* Relative time only for fresh news (< 3h), in red */}
                      {p.isRecent && (
                        <span className="block mt-1 text-brand text-[12px]">{p.publishedAgo}</span>
                      )}
                    </div>
                  </a>
                </article>
              ))}
            </div>
          )}

          {/* Most-viewed sidebar — left in RTL */}
          {mostViewed.length > 0 && (
            <aside className="rounded-lg overflow-hidden border border-hairline bg-bg-light self-start">
              <h2 className="bg-navy text-white font-black text-[17px] px-4 py-2.5">
                پربازدیدترین‌ها
              </h2>
              <ol className="px-4">
                {mostViewed.map((p, i) => (
                  <li key={p.id} className={i > 0 ? "border-t border-hairline" : ""}>
                    <a href={p.href ?? "#"} className="group flex items-start gap-2.5 py-3">
                      <span className="mt-[7px] w-1.5 h-1.5 bg-brand shrink-0" />
                      <span className="text-[14px] font-semibold text-ink leading-snug group-hover:text-brand transition-colors line-clamp-2">
                        {p.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}
