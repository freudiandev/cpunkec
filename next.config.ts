import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/docs',
  trailingSlash: true,
  distDir: 'docs',
};

module.exports = nextConfig;
