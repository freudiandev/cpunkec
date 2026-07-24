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
      {
        protocol: "https",
        hostname: "ecuadorfirma.me",
        pathname: "/social-image",
        search:
          "?title=ContaLink+%7C+Firma+Electr%C3%B3nica+y+Contabilidad+en+Ecuador&description=Firma+electr%C3%B3nica+Uanataca+y+asesor%C3%ADa+contable+y+tributaria+en+Quito%2C+con+atenci%C3%B3n+digital+para+todo+Ecuador.",
      },
    ],
  },
};

export default nextConfig;
