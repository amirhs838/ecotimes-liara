import type { HomePost } from "@/lib/home-data";
import { PostCard, TextHeadlines, BlockTitle } from "./block-shared";

/** Model C (ABC "U.S."): two big cards + a 4-column grid of text headlines. */
export default function BlockModelC({ items }: { items: HomePost[] }) {
  if (items.length === 0) return null;
  const [b1, b2, ...rest] = items;
  const title = items[0].category;
  const href = `/category/${items[0].categoryKey}`;

  // distribute text headlines across 4 columns (up to 3 rows each)
  const cols: HomePost[][] = [[], [], [], []];
  rest.slice(0, 12).forEach((p, i) => cols[i % 4].push(p));

  return (
    <section className="bg-white">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-5 py-6 lg:py-8">
        <BlockTitle title={title} href={href} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {b1 && <PostCard post={b1} />}
          {b2 && <PostCard post={b2} />}
        </div>
        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 mt-5">
            {cols.map((col, i) => (
              <TextHeadlines key={i} posts={col} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
