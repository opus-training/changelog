import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { OpusWordmark } from "@/components/OpusWordmark";
import { SITE } from "@/lib/posts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s — ${SITE.title}`,
  },
  description: SITE.description,
  icons: { icon: "/assets/favicon.svg" },
  openGraph: {
    siteName: SITE.title,
    type: "website",
  },
  twitter: { card: "summary" },
  alternates: { types: { "application/rss+xml": "/feed.xml" } },
};

export const viewport: Viewport = {
  themeColor: "#faf9f5",
  colorScheme: "only light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        />
      </head>
      <body>
        <header className="site-header">
          <div className="wrap">
            <Link className="brand" href="/" aria-label="Opus">
              <OpusWordmark />
            </Link>
            <span className="brand-sub">Changelog</span>
            <a className="header-link" href="https://www.opus.so">
              opus.so
            </a>
          </div>
        </header>
        <main className="wrap">{children}</main>
        <footer className="site-footer">
          <div className="wrap">
            <a href="https://www.opus.so">opus.so</a>
            <span className="footer-sep">·</span>
            <a href="/feed.xml">RSS</a>
            <span className="footer-note">
              New features the day they ship · Digest every Friday
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
