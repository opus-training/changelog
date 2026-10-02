"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PRIVACY_POLICY_URL } from "@/components/CookieConsent";

export function SiteFooter() {
  const pathname = usePathname();
  const onReleases =
    pathname === "/releases" || pathname.startsWith("/releases/");
  return (
    <footer className="site-footer">
      <div className="wrap">
        <a href="https://www.opus.so">opus.so</a>
        <span className="footer-sep">·</span>
        <Link href="/">Changelog</Link>
        <span className="footer-sep">·</span>
        <Link href="/roadmap/">Roadmap</Link>
        <span className="footer-sep">·</span>
        <Link href="/releases/">Releases</Link>
        <span className="footer-sep">·</span>
        {!onReleases ? (
          <>
            <a href="/feed.xml">RSS</a>
            <span className="footer-sep">·</span>
          </>
        ) : null}
        <a href={PRIVACY_POLICY_URL}>Privacy Policy</a>
        <span className="footer-note">
          {onReleases
            ? "One release a month"
            : "New features the day they ship · Digest every Friday"}
        </span>
      </div>
    </footer>
  );
}
