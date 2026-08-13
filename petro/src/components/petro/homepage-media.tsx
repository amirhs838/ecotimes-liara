"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";
import SmartImage from "./smart-image";
import { parseVideoEmbed } from "@/lib/video-embed";

export interface HomepageVideo {
  type: "UPLOAD" | "APARAT" | "YOUTUBE";
  url: string;
}

interface Props {
  imageUrl?: string;
  imageAlt: string;
  categoryKey?: string;
  video?: HomepageVideo | null;
  priority?: boolean;
  className?: string;
}

/**
 * Homepage image with the golden-rule-9 video feature:
 * if the post has a homepage video, a red circular play button stays pinned to
 * the visual BOTTOM-LEFT corner (never mirrored in RTL). Clicking it plays the
 * video in place of the image, inside the same card — uploaded files via
 * <video>, Aparat/YouTube via embed iframe. An X button (or video end) returns
 * to the image.
 */
export default function HomepageMedia({
  imageUrl,
  imageAlt,
  categoryKey,
  video = null,
  priority = false,
  className = "",
}: Props) {
  const [playing, setPlaying] = useState(false);

  const embedUrl =
    video && video.type !== "UPLOAD" ? parseVideoEmbed(video.url)?.embedUrl ?? null : null;

  // Posts whose external link cannot be embedded behave as if they had no video
  const hasVideo = Boolean(video) && (video!.type === "UPLOAD" || Boolean(embedUrl));

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {!playing || !hasVideo ? (
        <>
          <SmartImage
            src={imageUrl}
            alt={imageAlt}
            ratio="auto"
            category={categoryKey}
            priority={priority}
            className="!w-full !h-full object-cover"
          />
          {hasVideo && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setPlaying(true);
              }}
              aria-label="پخش ویدیو"
              className="absolute bottom-2 left-2 z-10 w-10 h-10 rounded-full bg-brand hover:bg-brand-dark text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110"
            >
              <Play className="w-4 h-4 fill-current" />
            </button>
          )}
        </>
      ) : (
        <>
          {video!.type === "UPLOAD" ? (
            <video
              src={video!.url}
              controls
              autoPlay
              onEnded={() => setPlaying(false)}
              className="absolute inset-0 w-full h-full object-cover bg-black"
            />
          ) : (
            <iframe
              src={embedUrl!}
              title={imageAlt}
              className="absolute inset-0 w-full h-full bg-black"
              allowFullScreen
              allow="autoplay; fullscreen; picture-in-picture"
            />
          )}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setPlaying(false);
            }}
            aria-label="بستن ویدیو"
            className="absolute top-2 left-2 z-10 w-8 h-8 rounded-full bg-black/70 hover:bg-brand text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </>
      )}
    </div>
  );
}
