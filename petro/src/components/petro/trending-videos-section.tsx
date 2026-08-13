"use client";

import { useState } from "react";
import { Play, ChevronLeft, ChevronUp, ChevronDown, X } from "lucide-react";
import SmartImage from "./smart-image";
import type { HomePost } from "@/lib/home-data";
import { faDigits } from "@/lib/post-format";
import { parseVideoEmbed } from "@/lib/video-embed";

/**
 * ABC "Trending Videos" band (RTL mirror): navy full-bleed section with a
 * playlist column on the right and a large featured player on the left.
 * Videos play inline in the featured area (upload -> <video>, Aparat/YouTube
 * -> embed iframe).
 */
export default function TrendingVideosSection({ videos }: { videos: HomePost[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);

  if (videos.length === 0) return null;
  const active = videos.find((v) => v.id === activeId) ?? videos[0];
  const embedUrl =
    active.videoUrl && active.videoUrl.length > 0 && !active.isUploadedVideo
      ? parseVideoEmbed(active.videoUrl)?.embedUrl ?? null
      : null;
  const canPlay = active.isUploadedVideo || Boolean(embedUrl);

  function select(id: string) {
    setActiveId(id);
    setPlaying(false);
  }

  return (
    <section id="videos" className="bg-navy text-white">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-5 py-8 lg:py-10">
        <h2 className="inline-flex items-center gap-1.5 text-xl lg:text-2xl font-black mb-5 lg:mb-6">
          ویدیوهای پرطرفدار
          <ChevronLeft className="w-5 h-5" />
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[330px_1fr] gap-5 lg:gap-6">
          {/* Playlist — right in RTL (second on mobile) */}
          <div className="order-2 lg:order-1 flex flex-col">
            <div className="space-y-1 overflow-y-auto custom-scrollbar lg:max-h-[420px] pl-1">
              {videos.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => select(v.id)}
                  className={`w-full flex items-center gap-3 text-right p-2 rounded-md transition-colors ${
                    active.id === v.id ? "bg-white/10" : "hover:bg-white/5"
                  }`}
                >
                  <span className="relative w-28 sm:w-32 aspect-video rounded overflow-hidden shrink-0 bg-black/40">
                    <SmartImage
                      src={v.imageUrl}
                      alt={v.imageAlt}
                      ratio="auto"
                      category={v.categoryKey}
                      className="!w-full !h-full object-cover"
                    />
                    {v.videoDuration && (
                      <span className="absolute bottom-1 left-1 inline-flex items-center gap-1 bg-black/85 text-white text-[10px] font-bold px-1.5 py-0.5 rounded tabular-nums">
                        <Play className="w-2.5 h-2.5 fill-current" />
                        {v.videoDuration}
                      </span>
                    )}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] text-zinc-400 mb-0.5">{v.category}</span>
                    <span className="block text-[13px] font-bold leading-snug line-clamp-2">
                      {v.title}
                    </span>
                  </span>
                </button>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[12px] text-zinc-400">
              <span>پلی‌لیست · {faDigits(videos.length)} ویدیو</span>
              <span className="flex items-center gap-1.5">
                <button type="button" aria-label="بالا" className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors">
                  <ChevronUp className="w-3.5 h-3.5" />
                </button>
                <button type="button" aria-label="پایین" className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors">
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </span>
            </div>
          </div>

          {/* Featured player — left in RTL (first on mobile) */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-lg overflow-hidden bg-black aspect-video">
              {playing && canPlay ? (
                <>
                  {active.isUploadedVideo ? (
                    <video
                      src={active.videoUrl!}
                      controls
                      autoPlay
                      onEnded={() => setPlaying(false)}
                      className="absolute inset-0 w-full h-full object-contain bg-black"
                    />
                  ) : (
                    <iframe
                      src={embedUrl!}
                      title={active.title}
                      className="absolute inset-0 w-full h-full"
                      allowFullScreen
                      allow="autoplay; fullscreen; picture-in-picture"
                    />
                  )}
                  <button
                    type="button"
                    onClick={() => setPlaying(false)}
                    aria-label="بستن ویدیو"
                    className="absolute top-2 left-2 z-10 w-8 h-8 rounded-full bg-black/70 hover:bg-brand text-white flex items-center justify-center transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <>
                  <SmartImage
                    src={active.imageUrl}
                    alt={active.imageAlt}
                    ratio="auto"
                    category={active.categoryKey}
                    className="!w-full !h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25" />
                  {canPlay && (
                    <button
                      type="button"
                      onClick={() => setPlaying(true)}
                      aria-label="پخش ویدیو"
                      className="absolute inset-0 flex items-center justify-center group"
                    >
                      <span className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/95 text-black flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                        <Play className="w-7 h-7 lg:w-8 lg:h-8 fill-current translate-x-[-2px]" />
                      </span>
                    </button>
                  )}
                  {active.videoDuration && (
                    <span className="absolute bottom-2 left-2 inline-flex items-center gap-1.5 bg-black/85 text-white text-[12px] font-bold px-2 py-1 rounded tabular-nums">
                      <Play className="w-3 h-3 fill-current" />
                      {active.videoDuration}
                    </span>
                  )}
                </>
              )}
            </div>
            <h3 className="mt-3 text-[16px] lg:text-lg font-bold leading-snug">
              {active.title}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
