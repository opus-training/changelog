"use client";

import { useEffect, useRef, useState } from "react";

export function FeatureVideo({ video, title }: { video?: string; title: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.play().catch(() => {});
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
      el.play().catch(() => {});
    } else {
      el.pause();
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
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        type="button"
        className="issue-video-toggle"
        onClick={toggle}
        aria-label={`${playing ? "Pause" : "Play"} ${title} video`}
      >
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
}
