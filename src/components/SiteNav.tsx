"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteNav() {
  const pathname = usePathname();
  const onRoadmap =
    pathname === "/roadmap" || pathname.startsWith("/roadmap/");
  return (
    <nav className="site-nav" aria-label="Site">
      <Link
        href="/"
        className={onRoadmap ? undefined : "is-active"}
        aria-current={onRoadmap ? undefined : "page"}
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
    </nav>
  );
}
