import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Materiales",
  description:
    "Quizzes, simuladores y materiales interactivos para enseñar sin aburrir y comunicar mejor.",
};

const materials = [
  "Quizzes para práctica guiada y refuerzo de temas clave.",
  "Mini experiencias educativas con narrativa, feedback y ritmo humano.",
  "Recursos hechos a medida para clases, ventas o capacitación interna.",
];

export default function MaterialesPage() {
  return (
    <section className="glass-card rounded-[2.5rem] px-6 py-10 md:px-10 md:py-12">
      <p className="section-eyebrow">Materiales</p>
      <h1 className="mt-4 text-4xl font-black text-white md:text-5xl">
        Materiales interactivos para enseñar sin aburrir
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
        Diseñamos quizzes, simuladores, bancos de preguntas y micro recursos
        digitales para educación, entrenamiento y comunicación práctica.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {materials.map((item) => (
          <div key={item} className="metric-card text-sm leading-7 text-zinc-300">
            {item}
          </div>
        ))}
      </div>

      <article className="mt-8 overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-slate-900/70">
        <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.14),transparent_65%),linear-gradient(180deg,#0b1220,#111827)] p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">Material aplicado</p>
            <h2 className="mt-4 text-3xl font-black text-white">
              Entrenador Táctico Nivel II
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-300">
              Simulador de preguntas Nivel II con feedback teórico para guardias
              de seguridad. Un ejemplo real de cómo un material interactivo puede
              servir para entrenamiento, repaso y confianza antes de una prueba.
            </p>
          </div>
          <div className="p-6">
            <div className="grid gap-3 text-sm leading-7 text-zinc-300">
              <p>Tipo: simulador educativo.</p>
              <p>Uso: práctica guiada, repaso y entrenamiento.</p>
              <p>Formato: experiencia web ligera y directa.</p>
            </div>
            <a
              href="https://freudiandev.github.io/entrenador-nivel-2/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold tracking-[0.2em] text-zinc-200 transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
            >
              Abrir ejemplo real
            </a>
          </div>
        </div>
      </article>

      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex rounded-full bg-fuchsia-500 px-6 py-3 text-sm font-semibold tracking-[0.2em] text-slate-950 transition hover:bg-fuchsia-400"
      >
        Solicitar materiales
      </a>
    </section>
  );
}
