import HomepageMedia from "./homepage-media";
import type { HomePost } from "@/lib/home-data";

interface Props {
  hero: HomePost | null;
}

/**
 * Hero (per reference-design/desktop2 + mobile2):
 * one unified card — the hero image sits flush against a light-gray
 * text panel (panel below the image on mobile, side-by-side on desktop).
 * No gap between image and panel; rounded corners only on the
 * outermost edges of the whole card (via wrapper overflow-hidden).
 */
export default function HeroSection({ hero }: Props) {
  if (!hero) return null;

  return (
    <section className="bg-white">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-5 py-5 lg:py-7">
        <div className="grid grid-cols-1 lg:grid-cols-[370px_1fr] rounded-lg overflow-hidden">
          {/* Headline panel — right column in RTL (first in DOM); below image on mobile; gray on all screens */}
          <div className="order-2 lg:order-1 bg-bg-light p-5 lg:p-6 flex flex-col">
            <span className="text-brand text-[14px] font-medium">{hero.category}</span>
            <a href={hero.href ?? "#"} className="group block mt-2">
              <h1 className="text-[26px] lg:text-[30px] font-black text-ink leading-[1.35] group-hover:text-brand transition-colors">
                {hero.title}
              </h1>
            </a>
            {hero.lead && (
              <p className="mt-3 text-[14px] text-muted-fg leading-relaxed line-clamp-3">
                {hero.lead}
              </p>
            )}
          </div>

          {/* Hero image — left column on desktop, on top on mobile; flush with the gray panel */}
          <a
            href={hero.href ?? "#"}
            className="order-1 lg:order-2 block group relative overflow-hidden bg-zinc-100 aspect-[16/10] lg:aspect-auto lg:min-h-[400px]"
          >
            <HomepageMedia
              imageUrl={hero.imageUrl}
              imageAlt={hero.imageAlt}
              categoryKey={hero.categoryKey}
              video={hero.homepageVideo}
              priority
            />
          </a>
        </div>
      </div>
    </section>
  );
}
