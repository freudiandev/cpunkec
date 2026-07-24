import type { Metadata } from "next";
import ServicesPortfolioModal from "@/components/ServicesPortfolioModal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios web con identidad propia para negocios, medios, proyectos educativos y marcas personales.",
};

const services = [
  {
    title: "Landing pages",
    body: "Páginas de presentación o venta con mensaje claro, foco en contacto y buena lectura en móvil.",
  },
  {
    title: "Web institucional",
    body: "Sitios para proyectos, colectivos, negocios locales y marcas que necesitan verse serios sin volverse impersonales.",
  },
  {
    title: "Mantenimiento y mejora",
    body: "Ajustes de contenido, rediseño visual, limpieza técnica y evolución gradual sobre webs ya existentes.",
  },
];

export default function ServiciosPage() {
  return (
    <section className="glass-card rounded-[2.5rem] px-6 py-10 md:px-10 md:py-12">
      <p className="section-eyebrow">Servicios</p>
      <h1 className="mt-4 text-4xl font-black text-white md:text-5xl">
        Servicios web con identidad propia y estructura clara
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
        Desarrollo páginas y experiencias web para negocios, medios, proyectos
        sociales y marcas personales que necesitan verse bien, comunicar mejor y
        convertir sin humo.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="metric-card">
            <h2 className="text-xl font-black text-white">{service.title}</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-300">{service.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-fuchsia-500 px-6 py-3 text-sm font-semibold tracking-[0.2em] text-slate-950 transition hover:bg-fuchsia-400"
        >
          Solicitar tu web
        </a>
        <ServicesPortfolioModal />
      </div>
    </section>
  );
}
