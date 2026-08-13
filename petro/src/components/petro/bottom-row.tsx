import type { HomePost } from "@/lib/home-data";
import { PostCard, TextHeadlines, BlockTitle } from "./block-shared";

interface Col {
  title: string;
  href?: string;
  arrow?: boolean;
  items: HomePost[];
}

/**
 * Bottom 4-column row (ABC "Slideshows / Health / Climate / Technology"):
 * three category columns + one "اسلایدشو" column fed by the photos section.
 */
export default function BottomRow({ columns }: { columns: Col[] }) {
  const visible = columns.filter((c) => c.items.length > 0);
  if (visible.length === 0) return null;

  return (
    <section className="bg-white">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-5 py-6 lg:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visible.map((col, idx) => {
            const [big, ...rest] = col.items;
            return (
              <div key={idx}>
                <BlockTitle title={col.title} href={col.href} arrow={col.arrow ?? true} />
                <PostCard post={big} />
                <div className="mt-3">
                  <TextHeadlines posts={rest.slice(0, 2)} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
