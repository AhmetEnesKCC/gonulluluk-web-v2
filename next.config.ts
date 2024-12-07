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
};

export default nextConfig;
