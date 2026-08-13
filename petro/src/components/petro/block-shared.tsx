import { ChevronLeft } from "lucide-react";
import type { HomePost } from "@/lib/home-data";
import HomepageMedia from "./homepage-media";

/** Shared image card: image (with rule-9 video support) + red category label + bold headline + red relative time. */
export function PostCard({ post, priority = false, showTime = true }: { post: HomePost; priority?: boolean; showTime?: boolean }) {
  return (
    <article>
      <a href={post.href ?? "#"} className="group block">
        <div className="relative rounded-lg overflow-hidden aspect-video bg-zinc-100">
          <HomepageMedia
            imageUrl={post.imageUrl}
            imageAlt={post.imageAlt}
            categoryKey={post.categoryKey}
            video={post.homepageVideo}
            priority={priority}
          />
        </div>
        <div className="mt-2.5">
          <span className="text-brand text-[13px] font-medium">{post.category}</span>
          <h3 className="mt-1 text-[15px] font-bold text-ink leading-snug line-clamp-2 group-hover:text-brand transition-colors">
            {post.title}
          </h3>
          {showTime && (
            <span className="block mt-1 text-brand text-[12px]">{post.publishedAgo}</span>
          )}
        </div>
      </a>
    </article>
  );
}

/** Text-only headline list with hairline separators (ABC style). */
export function TextHeadlines({ posts }: { posts: HomePost[] }) {
  if (posts.length === 0) return null;
  return (
    <ul>
      {posts.map((p, i) => (
        <li key={p.id} className={i > 0 ? "border-t border-hairline" : ""}>
          <a
            href={p.href ?? "#"}
            className="block py-2.5 text-[14px] font-semibold text-ink leading-snug hover:text-brand transition-colors line-clamp-2"
          >
            {p.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Section title row: bold title + red "view all" link with left chevron (RTL). */
export function BlockTitle({
  title,
  href,
  arrow = true,
}: {
  title: string;
  href?: string;
  arrow?: boolean;
}) {
  return (
    <div className="mb-4 lg:mb-5">
      {href ? (
        <a href={href} className="group inline-flex items-center gap-1">
          <h2 className="text-xl lg:text-[22px] font-black text-ink group-hover:text-brand transition-colors">
            {title}
          </h2>
          {arrow && (
            <ChevronLeft className="w-5 h-5 text-ink group-hover:text-brand transition-colors" />
          )}
        </a>
      ) : (
        <h2 className="text-xl lg:text-[22px] font-black text-ink">{title}</h2>
      )}
    </div>
  );
}
