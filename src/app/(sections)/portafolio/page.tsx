import type { Metadata } from "next";
import Image from "next/image";
import { portfolioItems } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portafolio",
  description:
    "Portafolio de Ciberpunk Ecuador con sitios publicados, landings comerciales, medios digitales y proyectos educativos.",
};

export default function PortafolioPage() {
  const featured = portfolioItems.filter((item) => item.featured);

  return (
    <section className="glass-card rounded-[2.5rem] px-6 py-10 md:px-10 md:py-12">
      <p className="section-eyebrow">Portafolio</p>
      <h1 className="mt-4 text-4xl font-black text-white md:text-5xl">
        Trabajo real publicado en internet
      </h1>
      <p className="mt-5 max-w-4xl text-lg leading-8 text-zinc-300">
        Aquí no hay humo: estos son proyectos reales de medios, ventas,
        educación y servicios hechos con identidad propia. Cada tarjeta muestra
        el tipo de trabajo, el enfoque y una miniatura o referencia visual.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="metric-card">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/70">Proyectos</p>
          <p className="mt-3 text-3xl font-black text-white">{portfolioItems.length}</p>
        </div>
        <div className="metric-card">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/70">Cobertura</p>
          <p className="mt-3 text-sm leading-7 text-zinc-300">Noticias, ventas, inmobiliaria, servicios, e-learning y sátira web.</p>
        </div>
        <div className="metric-card">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/70">Enfoque</p>
          <p className="mt-3 text-sm leading-7 text-zinc-300">Diseño con identidad, claridad comercial y adaptabilidad a presupuestos reales.</p>
        </div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {featured.map((item) => (
          <article key={item.url} className="overflow-hidden rounded-[2rem] border border-fuchsia-400/20 bg-slate-950/75">
            <div className="relative h-52 w-full">
              <Image
                src={item.thumbnail}
                alt={`Miniatura de ${item.title}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, 100vw"
                unoptimized={item.thumbnail.startsWith("http")}
              />
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/70">Destacado</p>
              <h2 className="mt-3 text-2xl font-black text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{item.description}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-fuchsia-500 px-5 py-2 text-sm font-semibold tracking-[0.2em] text-slate-950 transition hover:bg-fuchsia-400">
                Abrir proyecto
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {portfolioItems.map((item) => (
          <article key={item.url} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/4">
            <div className="grid gap-0 md:grid-cols-[0.42fr_0.58fr]">
              <div className="relative min-h-56 w-full">
                <Image
                  src={item.thumbnail}
                  alt={`Miniatura de ${item.title}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 42vw, 100vw"
                  unoptimized={item.thumbnail.startsWith("http")}
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.22em] text-cyan-300/70">
                  <span>{item.category}</span>
                  <span className="text-fuchsia-300/80">{item.source === "metadata" ? "Metadata real" : "Resumen manual"}</span>
                </div>
                <h2 className="mt-3 text-2xl font-black text-white">{item.title}</h2>
                <p className="mt-3 text-sm text-zinc-400">{item.stack}</p>
                <p className="mt-4 text-sm leading-7 text-zinc-300">{item.description}</p>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full border border-white/15 px-5 py-2 text-sm font-semibold tracking-[0.2em] text-zinc-200 transition hover:border-cyan-300/50 hover:bg-cyan-300/10">
                  Visitar sitio
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
