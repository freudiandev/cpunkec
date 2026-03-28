import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  trailingSlash: true,
};

module.exports = nextConfig;
