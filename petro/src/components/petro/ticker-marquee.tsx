"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

type TickerMarqueeProps = {
  children: ReactNode;
  className?: string;
  dataName?: string;
  gap?: number;
  speed?: number;
};

export default function TickerMarquee({
  children,
  className = "",
  dataName,
  gap = 32,
  speed = 1,
}: TickerMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const posRef = useRef(0);
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.firstElementChild as HTMLElement | null;
    const copyWidth = () => (first ? first.offsetWidth + gap : 0);
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 16.667, 3);
      last = now;
      const w = copyWidth();
      if (w > 0 && !draggingRef.current) {
        posRef.current -= speed * dt;
        if (-posRef.current >= w) posRef.current += w;
        track.style.transform = `translate3d(${posRef.current}px,0,0)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [gap, speed]);

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    setDragging(true);
    lastXRef.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!draggingRef.current) return;
      const dx = e.clientX - lastXRef.current;
      lastXRef.current = e.clientX;
      const track = trackRef.current;
      if (!track) return;
      const first = track.firstElementChild as HTMLElement | null;
      const w = first ? first.offsetWidth + gap : 0;
      posRef.current += dx;
      if (w > 0) {
        while (-posRef.current >= w) posRef.current += w;
        while (posRef.current > 0) posRef.current -= w;
      }
      track.style.transform = `translate3d(${posRef.current}px,0,0)`;
    },
    [gap]
  );

  const endDrag = useCallback(() => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    setDragging(false);
  }, []);

  return (
    <div className={`overflow-hidden ${className}`} data-name={dataName} dir="ltr">
      <div
        ref={trackRef}
        className={`flex w-max items-center will-change-transform select-none ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
        style={{ gap, touchAction: "pan-y" }}
        onPointerCancel={endDrag}
        onPointerDown={onPointerDown}
        onPointerLeave={endDrag}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
      >
        <div className="flex items-center" style={{ gap }}>
          {children}
        </div>
        <div className="flex items-center" style={{ gap }}>
          {children}
        </div>
      </div>
    </div>
  );
}
