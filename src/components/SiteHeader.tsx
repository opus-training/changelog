"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { OpusWordmark } from "@/components/OpusWordmark";

export function SiteHeader() {
  const pathname = usePathname();
  const onRoadmap =
    pathname === "/roadmap" || pathname.startsWith("/roadmap/");
  const onReleases =
    pathname === "/releases" || pathname.startsWith("/releases/");
  if (onReleases) return null;
  return (
    <header className="site-header">
      <div className="wrap">
        <Link className="brand" href="/" aria-label="Opus">
          <OpusWordmark />
        </Link>
        <span className="brand-sub">{onRoadmap ? "Roadmap" : "Changelog"}</span>
        <nav className="site-nav" aria-label="Site">
          <Link
            href="/"
            className={!onRoadmap ? "is-active" : undefined}
            aria-current={!onRoadmap ? "page" : undefined}
          >
            Changelog
          </Link>
          <Link
            href="/roadmap/"
            className={onRoadmap ? "is-active" : undefined}
            aria-current={onRoadmap ? "page" : undefined}
          >
            Roadmap
          </Link>
          <Link href="/releases/">Releases</Link>
        </nav>
        <a className="header-link" href="https://www.opus.so">
          opus.so
        </a>
      </div>
    </header>
  );
}
