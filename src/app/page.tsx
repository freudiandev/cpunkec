import Image from "next/image";
import { siteConfig } from "@/lib/site";

const services = [
  {
    eyebrow: "01 / FORMACION",
    title: "Clases personalizadas",
    text: "Acompanamiento claro para aprender desarrollo web desde cero o fortalecer proyectos reales.",
    accent: "text-fuchsia-200",
    border: "border-fuchsia-300/30",
  },
  {
    eyebrow: "02 / PRODUCTO",
    title: "Servicios web",
    text: "Sitios rapidos, accesibles y con identidad visual propia para emprendimientos y profesionales.",
    accent: "text-cyan-200",
    border: "border-cyan-300/30",
  },
  {
    eyebrow: "03 / EDUCACION",
    title: "Materiales interactivos",
    text: "Quizzes, minijuegos y recursos digitales hechos a medida para explicar mejor y vender con confianza.",
    accent: "text-lime-200",
    border: "border-lime-300/30",
  },
];

const metrics = [
  { value: "Quito", label: "base local" },
  { value: "Web", label: "producto medible" },
  { value: "IA", label: "flujo moderno" },
];

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-10 text-zinc-100">
      <section className="neon-shell kinetic-border relative rounded-lg px-5 py-14 md:px-10 md:py-20">
        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-cyan-100">
              <span className="signal-dot h-2 w-2 rounded-full bg-cyan-300 text-cyan-300" />
              Desarrollo web / clases / materiales
            </div>

            <h1 className="glitch mb-5 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-normal md:text-7xl">
              CiberPunk
              <span className="neon-gradient block">Ecuador</span>
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
              Soluciones digitales con estetica avanzada, estructura limpia y
              trato profesional para empresas, estudiantes y creadores que
              necesitan presencia real en la web.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/593983629837"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon-glitch px-7 py-3 text-base"
                aria-label="Contactar por WhatsApp"
              >
                Solicita tu web o clase
              </a>
              <a
                href="/servicios"
                className="rounded-md border border-white/12 bg-white/5 px-7 py-3 text-center font-semibold text-zinc-100 transition hover:border-cyan-300/50 hover:text-cyan-100 hover:shadow-[0_0_18px_rgba(0,229,255,0.12)]"
              >
                Ver servicios
              </a>
            </div>
          </div>

          <div className="neon-panel relative rounded-lg p-5">
            <div className="absolute right-4 top-4 flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-fuchsia-300 shadow-[0_0_12px_rgba(255,61,242,0.9)]" />
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(0,229,255,0.9)]" />
              <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_12px_rgba(167,255,79,0.8)]" />
            </div>
            <div className="flex min-h-80 flex-col items-center justify-center rounded-md border border-white/10 bg-black/35 p-8 text-center">
              <Image
                src={siteConfig.logoPath}
                alt="Logo CiberPunk Ecuador"
                width={156}
                height={156}
                priority
                className="glitch-logo mb-6 h-36 w-36 rounded-full border border-fuchsia-200 bg-white object-cover shadow-[0_0_35px_rgba(255,61,242,0.4)]"
              />
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-400">
                Identidad digital sobria
              </p>
              <div className="neon-rule my-5 w-full" />
              <p className="max-w-sm text-sm leading-6 text-zinc-300">
                Cyberpunk sin ruido: interfaces elegantes, mensajes directos y
                tecnologia al servicio de resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-3 md:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="neon-panel rounded-lg px-5 py-4">
            <p className="text-2xl font-black text-white">{metric.value}</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
              {metric.label}
            </p>
          </div>
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className={`neon-card rounded-lg border px-5 py-6 text-left ${service.border}`}
          >
            <p className={`mb-4 font-mono text-xs uppercase tracking-[0.18em] ${service.accent}`}>
              {service.eyebrow}
            </p>
            <h2 className="mb-3 text-2xl font-extrabold text-white">
              {service.title}
            </h2>
            <p className="leading-7 text-zinc-300">{service.text}</p>
          </article>
        ))}
      </section>

      <section className="neon-panel rounded-lg px-5 py-8 md:px-8">
        <div className="grid gap-6 md:grid-cols-[0.75fr_1fr] md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-fuchsia-200">
              Confianza profesional
            </p>
            <h3 className="mt-3 text-3xl font-black text-white">
              Diseno llamativo, ejecucion seria.
            </h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <blockquote className="rounded-lg border border-fuchsia-300/20 bg-black/25 p-5 text-left italic text-zinc-300">
              Aprendi a programar desde cero y ahora hago mis propios proyectos.
              <span className="mt-3 block font-mono text-sm not-italic text-cyan-200">
                Estudiante, Quito
              </span>
            </blockquote>
            <blockquote className="rounded-lg border border-cyan-300/20 bg-black/25 p-5 text-left italic text-zinc-300">
              El sitio de mi emprendimiento quedo unico, rapido y facil de
              entender.
              <span className="mt-3 block font-mono text-sm not-italic text-fuchsia-200">
                Emprendedora, Tarqui
              </span>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}
