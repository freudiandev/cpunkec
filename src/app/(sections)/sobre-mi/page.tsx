import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Perfil de Álex Rafael Almeida: desarrollador web autodidacta, docente de tecnología y creador de proyectos educativos y digitales.",
};

const experience = [
  {
    role: "Docente de Tecnología",
    place: "Unidad Educativa Municipal Abdón Calderón",
    period: "Diciembre 2024 - Abril 2025",
    points: [
      "Diseño e implementación de programas educativos en HTML5, CSS3 y JavaScript.",
      "Debates sobre inteligencia artificial, ética profesional y pensamiento crítico.",
      "Desarrollo de material didáctico innovador y acompañamiento a estudiantes y familias.",
    ],
  },
  {
    role: "Desarrollador Web Freelance",
    place: "Trabajo independiente",
    period: "Mayo 2018 - Actualidad",
    points: [
      "Desarrollo de sitios web personalizados con HTML, CSS, JavaScript y WordPress.",
      "Consultoría en presencia digital para PYMEs y proyectos emergentes.",
      "Mantenimiento, optimización de equipos y aprendizaje autodidacta constante.",
    ],
  },
  {
    role: "Coordinador de Logística",
    place: "Fundación Openlab",
    period: "Febrero 2023 - Abril 2024",
    points: [
      "Gestión integral de eventos y talleres tecnológicos.",
      "Elaboración de documentación oficial, protocolos y cotizaciones.",
      "Coordinación operativa con participantes y aliados.",
    ],
  },
];

const skills = [
  "HTML5 / CSS3 / JavaScript",
  "WordPress",
  "Angular",
  "Git",
  "PHP",
  "C / C#",
  "APIs REST",
  "Mantenimiento de computadoras y hardware",
  "Aprendizaje autodidacta",
  "Cortesía y honestidad",
];

export default function SobreMiPage() {
  return (
    <section className="glass-card rounded-[2.5rem] px-6 py-10 md:px-10 md:py-12">
      <p className="section-eyebrow">Sobre mí</p>
      <h1 className="mt-4 text-4xl font-black text-white md:text-5xl">
        Álex Rafael Almeida
      </h1>
      <p className="mt-5 max-w-4xl text-lg leading-8 text-zinc-300">
        Programador autodidacta y profesional multifacético con experiencia en
        desarrollo web, tecnología educativa y gestión de proyectos. Mi enfoque
        mezcla habilidades técnicas, sensibilidad pedagógica y una voluntad muy
        clara de acercar tecnología útil a personas reales.
      </p>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-5">
          {experience.map((item) => (
            <article key={item.role} className="rounded-[2rem] border border-white/10 bg-white/4 p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-black text-white">{item.role}</h2>
                  <p className="mt-1 text-sm text-cyan-300/80">{item.place}</p>
                </div>
                <span className="text-xs uppercase tracking-[0.25em] text-zinc-400">{item.period}</span>
              </div>
              <div className="mt-4 grid gap-3 text-sm leading-7 text-zinc-300">
                {item.points.map((point) => (
                  <p key={point}>{point}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <aside className="grid gap-5">
          <div className="rounded-[2rem] border border-fuchsia-400/20 bg-fuchsia-400/8 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">Contacto</p>
            <div className="mt-4 grid gap-3 text-sm leading-7 text-zinc-300">
              <p>Teléfono: {siteConfig.phone}</p>
              <p>Email: {siteConfig.email}</p>
              <p>Ubicación: Pichincha, Quito, Mena</p>
            </div>
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full bg-fuchsia-500 px-5 py-2 text-sm font-semibold tracking-[0.2em] text-slate-950 transition hover:bg-fuchsia-400">
              Hablar por WhatsApp
            </a>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/4 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">Formación</p>
            <div className="mt-4 grid gap-3 text-sm leading-7 text-zinc-300">
              <p>Universidad Central del Ecuador - Sociología, 6 semestres cursados.</p>
              <p>Instituto Nacional Mejía - Bachillerato en Ciencias Sociales.</p>
              <p>Certificaciones en HTML5, CSS3 y diseño web con Next_U y Fundación Telefónica.</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/4 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">Habilidades</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-zinc-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
