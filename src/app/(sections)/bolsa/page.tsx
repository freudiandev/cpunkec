import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bolsa Tarqui 1",
  description:
    "Sección en transición para la futura bolsa comunitaria del Barrio Tarqui 1.",
};

export default function BolsaPage() {
  return (
    <section className="glass-card rounded-[2.5rem] px-6 py-10 md:px-10 md:py-12">
      <p className="section-eyebrow">Bolsa Tarqui 1</p>
      <h1 className="mt-4 text-4xl font-black text-white md:text-5xl">
        Bolsa comunitaria en construcción
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
        Esta sección queda abierta como base para la futura bolsa de empleo,
        apoyo barrial y circulación de oportunidades del Barrio Tarqui 1.
      </p>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400">
        Por ahora funciona como espacio de transición mientras se define el
        formato de participación, auspicio o donación.
      </p>
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold tracking-[0.2em] text-zinc-200 transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
      >
        Quiero apoyar esta idea
      </a>
    </section>
  );
}
