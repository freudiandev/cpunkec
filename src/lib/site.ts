export const siteConfig = {
  name: "Ciberpunk Ecuador",
  description:
    "Desarrollo web, educación digital y acompañamiento humano desde Quito para Ecuador y Latinoamérica.",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : `http://localhost:${process.env.PORT ?? "3000"}`),
  logoPath: "/1.jpg",
  whatsappUrl: "https://wa.me/593983629837",
  instagramUrl: "https://instagram.com/freudiandev",
  facebookUrl: "https://facebook.com/freudiandev",
  email: "rafaelalmeidaorellana@gmail.com",
  phone: "0983629837",
  location: "Quito, Pichincha, Ecuador",
  nav: [
    { href: "/", label: "Inicio" },
    { href: "/clases", label: "Clases" },
    { href: "/materiales", label: "Materiales" },
    { href: "/servicios", label: "Servicios" },
    { href: "/portafolio", label: "Portafolio" },
    { href: "/bolsa", label: "Bolsa Tarqui 1" },
    { href: "/sobre-mi", label: "Sobre mí" },
  ],
} as const;
