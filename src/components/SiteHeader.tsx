"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { OpusWordmark } from "@/components/OpusWordmark";

const ROADMAP =
  "https://opustraining.notion.site/opustraining/5c7e7b1164bb44e58f1f5afdeb74bbea?v=fe8fa7f83a5a499493c91f5d6140735f";

export function SiteHeader() {
  const pathname = usePathname();
  const onReleases = pathname === "/releases" || pathname.startsWith("/releases/");
  return (
    <header className="site-header">
      <div className="wrap">
        <Link className="brand" href={onReleases ? "/releases/" : "/"} aria-label="Opus">
          <OpusWordmark />
        </Link>
        <span className="brand-sub">{onReleases ? "Releases" : "Changelog"}</span>
        <nav className="site-nav" aria-label="Site">
          {onReleases ? (
            <>
              <a href={ROADMAP}>Roadmap</a>
              <Link href="/">Changelog</Link>
            </>
          ) : (
            <Link href="/releases/">Releases</Link>
          )}
        </nav>
        <a className="header-link" href="https://www.opus.so">
          opus.so
        </a>
      </div>
    </header>
  );
}
