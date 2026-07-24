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
    title: "Propiedad en Tumbabiro",
    url: "https://freudiandev.github.io/Vendo-Hermosa-propiedad-TUMBABIRO--IMBABURA-80-000/",
    category: "Landing inmobiliaria",
    stack: "HTML / CSS / contenido comercial",
    description:
      "Landing orientada a venta de propiedad con enfoque emocional, información clara y apoyo visual para captar compradores reales.",
    thumbnail:
      "https://freudiandev.github.io/Vendo-Hermosa-propiedad-TUMBABIRO--IMBABURA-80-000/assets/img/2.jpg",
    source: "metadata",
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
    title: "Vendedora a Crédito Quito",
    url: "https://freudiandev.github.io/vendedoracreditoquitoecuador/",
    category: "Landing comercial",
    stack: "HTML / CSS / ventas",
    description:
      "Sitio comercial para promoción de tecnología, motos y electrodomésticos con lenguaje cercano, enfoque de conversión y contacto rápido.",
    thumbnail:
      "https://freudiandev.github.io/vendedoracreditoquitoecuador/assets/images/vendedor_1.jpeg",
    source: "metadata",
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
