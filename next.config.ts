import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Fallback for below-the-fold assets not yet mirrored into /public.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fable.ng",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
