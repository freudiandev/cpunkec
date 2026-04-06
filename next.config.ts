import type { NextConfig } from "next";

<<<<<<< HEAD
const nextConfig: NextConfig = {};
=======
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  trailingSlash: true,
};
>>>>>>> 99b4afe23ffb4fa7881bb38151917ead020e34fa

export default nextConfig;
