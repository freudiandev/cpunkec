import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ladataec.com",
        pathname: "/Multimedia/**",
      },
      {
        protocol: "https",
        hostname: "freudiandev.github.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.impermeabilizacion.uio.ec",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
