import type { HomePost } from "@/lib/home-data";
import { PostCard, TextHeadlines, BlockTitle } from "./block-shared";

/**
 * Model D (ABC "Business / International"): two category sub-blocks side by
 * side, each with one big card + a 2-column text-headline grid.
 */
export default function BlockModelD({
  first,
  second,
}: {
  first: HomePost[];
  second: HomePost[];
}) {
  if (first.length === 0 && second.length === 0) return null;

  return (
    <section className="bg-white">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-5 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6">
          {[first, second].map((items, idx) => {
            if (items.length === 0) return <div key={idx} />;
            const [big, ...rest] = items;
            const title = items[0].category;
            const href = `/category/${items[0].categoryKey}`;
            const cols: HomePost[][] = [[], []];
            rest.slice(0, 6).forEach((p, i) => cols[i % 2].push(p));
            return (
              <div key={idx}>
                <BlockTitle title={title} href={href} />
                <PostCard post={big} />
                {rest.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 mt-4">
                    {cols.map((col, i) => (
                      <TextHeadlines key={i} posts={col} />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
