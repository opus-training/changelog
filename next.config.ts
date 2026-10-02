import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    // Feature detail pages were folded into the release page.
    return [
      {
        source: "/releases/:slug/:feature/",
        destination: "/releases/:slug/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
