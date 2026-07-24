import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Clases",
  description:
    "Clases personalizadas de HTML, CSS, JavaScript y lógica de programación con acompañamiento humano desde Quito.",
};

const classFormats = [
  "Inicio desde cero para personas con miedo o poca experiencia.",
  "Refuerzo para estudiantes, emprendedores y autodidactas.",
  "Acompañamiento uno a uno para practicar con proyectos reales.",
];

export default function ClasesPage() {
  return (
    <section className="glass-card rounded-[2.5rem] px-6 py-10 md:px-10 md:py-12">
      <p className="section-eyebrow">Clases</p>
      <h1 className="mt-4 text-4xl font-black text-white md:text-5xl">
        Clases personalizadas de desarrollo web
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
        Aprende HTML, CSS, JavaScript, lógica de programación y bases reales de
        construcción web sin jerga inflada y sin presión innecesaria.
      </p>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4">
          {classFormats.map((item) => (
            <div key={item} className="metric-card text-sm leading-7 text-zinc-300">
              {item}
            </div>
          ))}
        </div>
        <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/8 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">Formato</p>
          <div className="mt-4 grid gap-3 text-sm leading-7 text-zinc-300">
            <p>Duración referencial: 1 hora y media.</p>
            <p>Valor base: $5 por sesión.</p>
            <p>Gratis para personas vulnerables cuando haya posibilidad real de apoyo.</p>
          </div>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-fuchsia-500 px-6 py-3 text-sm font-semibold tracking-[0.2em] text-slate-950 transition hover:bg-fuchsia-400"
          >
            Reservar clase
          </a>
        </div>
      </div>
    </section>
  );
}
