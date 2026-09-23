"use client";

import { useEffect, useRef, useState } from "react";

export function FeatureVideo({ video }: { video?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.play().then(() => setPlaying(true), () => setPlaying(false));
  }, []);

  if (!video) {
    return (
      <div className="issue-placeholder" aria-hidden="true">
        Placeholder
      </div>
    );
  }

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      el.play().then(() => setPlaying(true), () => setPlaying(false));
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="issue-media">
      <video
        ref={ref}
        className="issue-video"
        src={`${video}.mp4`}
        poster={`${video}.jpg`}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <button type="button" className="issue-video-toggle" onClick={toggle}>
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
}
