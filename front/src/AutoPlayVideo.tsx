import { absoluteAsset, type HomePost } from "./lib/api";

// Silent looping autoplay for UPLOADED video posts on the homepage video box.
// Only uploaded files (videoType UPLOAD) autoplay; Aparat/YouTube links keep
// their poster card. pointer-events-none so clicks fall through to the card link.
//
// Only the first 15 seconds are played and looped: the timeupdate guard snaps
// playback back to 0 before the 15s mark. New uploads are pre-trimmed to 15s
// at upload time (see petro upload-client), so the loop also stays light on
// download. A media-fragment URL (#t=0,15) is deliberately NOT used — it
// breaks the `loop` attribute (playback stalls at the fragment end).
const LOOP_SECONDS = 15;

export default function AutoPlayVideo({
  post,
  className = "absolute inset-0",
}: {
  post: HomePost;
  className?: string;
}) {
  if (!post.isUploadedVideo) return null;
  const src = absoluteAsset(post.videoUrl);
  if (!src) return null;
  return (
    <video
      className={`pointer-events-none size-full object-cover ${className}`}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      onTimeUpdate={(e) => {
        if (e.currentTarget.currentTime >= LOOP_SECONDS) e.currentTarget.currentTime = 0;
      }}
      aria-hidden
      tabIndex={-1}
    />
  );
}