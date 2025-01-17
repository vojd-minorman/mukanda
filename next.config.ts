import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["example.com"],
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore les erreurs TypeScript uniquement en production
  },
};

export default nextConfig;
