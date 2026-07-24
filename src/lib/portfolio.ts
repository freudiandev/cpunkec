export type PortfolioItem = {
  title: string;
  url: string;
  category: string;
  stack: string;
  description: string;
  thumbnail: string;
  source: "metadata" | "manual";
  featured?: boolean;
};

export const portfolioItems: PortfolioItem[] = [
  {
    title: "ContaLink",
    url: "https://ecuadorfirma.me",
    category: "Servicios profesionales / firma electrónica",
    stack: "Next.js / SEO local / conversión",
    description:
      "Sitio profesional para firma electrónica, contabilidad y asesoría tributaria en Ecuador, con arquitectura clara, posicionamiento local y contacto orientado a conversión.",
    thumbnail:
      "https://ecuadorfirma.me/social-image?title=ContaLink+%7C+Firma+Electr%C3%B3nica+y+Contabilidad+en+Ecuador&description=Firma+electr%C3%B3nica+Uanataca+y+asesor%C3%ADa+contable+y+tributaria+en+Quito%2C+con+atenci%C3%B3n+digital+para+todo+Ecuador.",
    source: "metadata",
    featured: true,
  },
  {
    title: "La Data",
    url: "https://ladataec.com",
    category: "Medio digital / noticias",
    stack: "Next.js / contenido / branding",
    description:
      "Portal de noticias con enfoque editorial actual, lectura rápida y presencia digital pensada para audiencias humanas y también para IA.",
    thumbnail: "https://ladataec.com/Multimedia/0.0.png",
    source: "metadata",
    featured: true,
  },
  {
    title: "Noboa de Cartón",
    url: "https://freudiandev.github.io/practicatironoboacarton/",
    category: "Juego web / sátira",
    stack: "JavaScript / navegador / gamedev indie",
    description:
      "FPS satírico para navegador con identidad propia, humor político y ejecución ligera para jugar incluso en contextos limitados.",
    thumbnail: "https://freudiandev.github.io/practicatironoboacarton/menu-bg.jpeg",
    source: "metadata",
    featured: true,
  },
  {
    title: "Hanansoft",
    url: "https://hanansoft.com/",
    category: "Sitio corporativo",
    stack: "Web institucional / identidad de marca",
    description:
      "Presencia digital corporativa para software y servicios, con estructura seria, navegación limpia y posicionamiento profesional.",
    thumbnail: "/og-cyberpunk-glitch.png",
    source: "manual",
  },
  {
    title: "Conta y Negocios",
    url: "https://contaynegocios.com/",
    category: "E-learning en WordPress",
    stack: "WordPress / cursos / ventas educativas",
    description:
      "Plataforma e-learning para vender cursos de contabilidad, con flujo orientado a formación digital y monetización educativa.",
    thumbnail: "/og-cyberpunk-glitch.png",
    source: "manual",
    featured: true,
  },
  {
    title: "Imperblock",
    url: "https://www.impermeabilizacion.uio.ec/",
    category: "Landing de servicios",
    stack: "Servicios locales / lead generation",
    description:
      "Sitio para impermeabilización y construcción en Quito con propuesta clara, prueba de confianza y llamado directo a cotización.",
    thumbnail: "https://www.impermeabilizacion.uio.ec/images/logo.png",
    source: "metadata",
  },
];
