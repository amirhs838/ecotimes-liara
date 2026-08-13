import type { HomePost } from "@/lib/home-data";
import { PostCard, TextHeadlines, BlockTitle } from "./block-shared";

/**
 * Model A (ABC "Politics", per live capture):
 * col 1: one big card + two small cards side by side
 * col 2: one card + four text headlines
 * col 3: one card + four text headlines
 */
export default function BlockModelA({ items }: { items: HomePost[] }) {
  if (items.length === 0) return null;
  const [big, s1, s2, m1, m2, ...rest] = items;
  const title = items[0].category;
  const href = `/category/${items[0].categoryKey}`;

  return (
    <section className="bg-white">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-5 py-6 lg:py-8">
        <BlockTitle title={title} href={href} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {/* Col 1: big card + two small cards */}
          <div>
            <PostCard post={big} />
            {(s1 || s2) && (
              <div className="grid grid-cols-2 gap-4 mt-4">
                {s1 && <PostCard post={s1} showTime={false} />}
                {s2 && <PostCard post={s2} showTime={false} />}
              </div>
            )}
          </div>
          {/* Col 2: card + text headlines */}
          {m1 && (
            <div>
              <PostCard post={m1} showTime={false} />
              <div className="mt-3">
                <TextHeadlines posts={rest.slice(0, 4)} />
              </div>
            </div>
          )}
          {/* Col 3: card + text headlines */}
          {m2 && (
            <div>
              <PostCard post={m2} showTime={false} />
              <div className="mt-3">
                <TextHeadlines posts={rest.slice(4, 8)} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
