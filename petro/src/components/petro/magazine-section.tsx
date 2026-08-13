import { ChevronLeft } from "lucide-react";
import type { HomePost } from "@/lib/home-data";
import SmartImage from "./smart-image";

/**
 * Monthly magazine band (bimenews.com style, RTL): rounded #f3f3f4 card with
 * the issue cover on the right and a content column on the left — issue label
 * + date, a big headline, a 2-col grid of teasers (title + lead), and a
 * "خواندن آخرین شماره" link. Data comes from the "magazine" home section:
 * position 1 = cover/headline, positions 2-5 = teasers.
 */
export default function MagazineSection({ items }: { items: HomePost[] }) {
  if (items.length === 0) return null;
  const [featured, ...teasers] = items;

  return (
    <section className="bg-white">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-5 py-8 lg:py-10">
        <div className="rounded-2xl bg-[#f3f3f4] px-5 py-7 sm:px-8 lg:px-12 lg:py-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Cover — right edge in RTL (first on mobile) */}
            <a
              href={featured.href ?? "#"}
              className="group self-center lg:self-start w-44 sm:w-52 lg:w-60 shrink-0"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-200 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
                <SmartImage
                  src={featured.imageUrl}
                  alt={featured.imageAlt}
                  ratio="auto"
                  category={featured.categoryKey}
                  className="!w-full !h-full object-cover"
                />
              </div>
            </a>

            {/* Content column */}
            <div className="flex-1 min-w-0 flex flex-col">
              <span className="block text-center text-[12px] text-muted-fg">
                شماره ماهانه&nbsp;|&nbsp;{featured.dateLong}
              </span>
              <h2 className="mt-2 text-center text-2xl lg:text-[34px] font-black text-ink leading-snug">
                <a href={featured.href ?? "#"} className="hover:text-brand transition-colors">
                  {featured.title}
                </a>
              </h2>

              {teasers.length > 0 && (
                <div className="mt-6 lg:mt-8 grid sm:grid-cols-2 gap-x-10">
                  {teasers.map((t) => (
                    <a
                      key={t.id}
                      href={t.href ?? "#"}
                      className="group block border-t border-zinc-300/70 pt-3 pb-4"
                    >
                      <h3 className="text-[15px] font-bold text-ink leading-snug group-hover:text-brand transition-colors line-clamp-2">
                        {t.title}
                      </h3>
                      {t.lead && (
                        <p className="mt-1.5 text-[13px] text-muted-fg leading-relaxed line-clamp-2">
                          {t.lead}
                        </p>
                      )}
                    </a>
                  ))}
                </div>
              )}

              <a
                href={featured.href ?? "#"}
                className="group mt-2 lg:mt-auto pt-3 inline-flex items-center gap-2 self-start text-[14px] font-bold text-ink hover:text-brand transition-colors"
              >
                خواندن آخرین شماره
                <span className="w-8 h-8 rounded-full bg-ink text-white group-hover:bg-brand flex items-center justify-center transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
