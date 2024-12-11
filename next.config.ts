import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "image.itugonulluluk.com",
        protocol: "https",
      },
    ],
  },
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
};

export default nextConfig;
