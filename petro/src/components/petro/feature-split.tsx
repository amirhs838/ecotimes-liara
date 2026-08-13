import type { HomePost } from "@/lib/home-data";
import HomepageMedia from "./homepage-media";

/**
 * Feature split (ABC "Lifestyle" feature, RTL mirror): full-bleed — image on
 * the right half, navy text box on the left half, edge to edge.
 * Used for the "سلامت و درمان" block.
 */
export default function FeatureSplit({ items }: { items: HomePost[] }) {
  if (items.length === 0) return null;
  const post = items[0];

  return (
    <section className="bg-navy">
      <a href={post.href ?? "#"} className="group grid grid-cols-1 lg:grid-cols-2">
        {/* Image — right half in RTL (first in DOM, on top on mobile) */}
        <div className="relative aspect-video lg:aspect-auto lg:min-h-[560px] bg-zinc-800">
          <HomepageMedia
            imageUrl={post.imageUrl}
            imageAlt={post.imageAlt}
            categoryKey={post.categoryKey}
            video={post.homepageVideo}
          />
        </div>
        {/* Navy text box — left half */}
        <div className="bg-navy text-white flex flex-col justify-center items-center text-center p-8 lg:p-16">
          <span className="text-brand-light text-[15px] font-medium">{post.category}</span>
          <h2 className="mt-4 text-2xl lg:text-[28px] font-black leading-[1.4] group-hover:text-brand-light transition-colors max-w-md">
            {post.title}
          </h2>
          {post.lead && (
            <p className="mt-4 text-[15px] leading-relaxed text-zinc-300 line-clamp-3 max-w-md">
              {post.lead}
            </p>
          )}
        </div>
      </a>
    </section>
  );
}
