import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const projectRoot = dirname(fileURLToPath(import.meta.url));
const distDir = process.env.NEXT_DIST_DIR ?? ".next";

const nextConfig: NextConfig = {
  output: "export",
  distDir,
  images: {
    unoptimized: true,
  },
  basePath,
  trailingSlash: true,
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
