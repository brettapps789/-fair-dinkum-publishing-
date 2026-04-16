import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/-fair-dinkum-publishing-', 
  trailingSlash: true, // Crucial for GitHub Pages sub-page routing
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
