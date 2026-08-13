import { parseLiveEmbed } from "@/lib/video-embed";

interface LiveData {
  enabled: boolean;
  title: string;
  aparatUrl: string;
}

/**
 * Live broadcast band — pinned to the end of the homepage (before the footer).
 * Rendered only when the admin has enabled it from the panel.
 */
export default function LiveSection({ live }: { live: LiveData | null }) {
  if (!live?.enabled || !live.aparatUrl) return null;
  const embedUrl = parseLiveEmbed(live.aparatUrl);
  if (!embedUrl) return null;

  return (
    <section id="live" className="bg-navy text-white">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-5 py-8 lg:py-10">
        <div className="flex items-center gap-3 mb-5">
          <span className="inline-flex items-center gap-1.5 bg-brand text-white text-[12px] font-black px-2.5 py-1 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            زنده
          </span>
          <h2 className="text-xl lg:text-2xl font-black">{live.title || "پخش زنده"}</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg overflow-hidden bg-black aspect-video shadow-2xl">
            <iframe
              src={embedUrl}
              title={live.title || "پخش زنده"}
              className="w-full h-full"
              allowFullScreen
              allow="autoplay; fullscreen; picture-in-picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
