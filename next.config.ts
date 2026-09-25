import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  allowedDevOrigins: ["*.opus-dev.ngrok.app"],
};

export default nextConfig;
