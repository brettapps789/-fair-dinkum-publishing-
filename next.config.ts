import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // Replace '-fair-dinkum-publishing-' with your repo name if it changes
  basePath: '/-fair-dinkum-publishing-', 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
