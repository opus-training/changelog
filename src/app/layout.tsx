import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Inter+Tight:wght@400;500;600&display=swap"
        />
      </head>
      <body>
        <SiteHeader />
        <main className="wrap">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
