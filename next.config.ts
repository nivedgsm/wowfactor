
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate a static export for hosting
  output: "export",

  // Image configuration for static hosting
  images: {
    unoptimized: true,

    // Keep image layout responsive
    deviceSizes: [
      320,
      420,
      640,
      750,
      828,
      1080,
      1200,
      1920,
    ],

    imageSizes: [
      64,
      96,
      128,
      256,
      384,
    ],
  },

  // Production optimisations
  poweredByHeader: false,

  reactStrictMode: true,
};

export default nextConfig;
