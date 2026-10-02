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
  const section = onReleases ? "Releases" : onRoadmap ? "Roadmap" : "Changelog";
  return (
    <header className="site-header">
      <div className="wrap">
        <Link
          className="brand"
          href={onReleases ? "/releases/" : "/"}
          aria-label="Opus"
        >
          <OpusWordmark />
        </Link>
        <span className="brand-sub">{section}</span>
        <nav className="site-nav" aria-label="Site">
          <Link
            href="/"
            className={!onRoadmap && !onReleases ? "is-active" : undefined}
            aria-current={!onRoadmap && !onReleases ? "page" : undefined}
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
          <Link
            href="/releases/"
            className={onReleases ? "is-active" : undefined}
            aria-current={onReleases ? "page" : undefined}
          >
            Releases
          </Link>
        </nav>
        <a className="header-link" href="https://www.opus.so">
          opus.so
        </a>
      </div>
    </header>
  );
}
