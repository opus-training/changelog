"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PRIVACY_POLICY_URL } from "@/components/CookieConsent";

const ROADMAP =
  "https://opustraining.notion.site/opustraining/5c7e7b1164bb44e58f1f5afdeb74bbea?v=fe8fa7f83a5a499493c91f5d6140735f";

export function SiteFooter() {
  const pathname = usePathname();
  const onReleases = pathname === "/releases" || pathname.startsWith("/releases/");
  if (onReleases) {
    return (
      <footer className="site-footer">
        <div className="wrap">
          <a href="https://www.opus.so">opus.so</a>
          <span className="footer-sep">·</span>
          <Link href="/">Changelog</Link>
          <span className="footer-sep">·</span>
          <a href={ROADMAP}>Roadmap</a>
          <span className="footer-sep">·</span>
          <a href={PRIVACY_POLICY_URL}>Privacy Policy</a>
        </div>
      </footer>
    );
  }
  return (
    <footer className="site-footer">
      <div className="wrap">
        <a href="https://www.opus.so">opus.so</a>
        <span className="footer-sep">·</span>
        <a href="/feed.xml">RSS</a>
        <span className="footer-sep">·</span>
        <a href={PRIVACY_POLICY_URL}>Privacy Policy</a>
        <span className="footer-note">
          New features the day they ship · Digest every Friday
        </span>
      </div>
    </footer>
  );
}
