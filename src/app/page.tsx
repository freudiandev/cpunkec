import Image from "next/image";
import Link from "next/link";
import avatarArt from "@/assets/1.jpg";
import HomeMotion from "@/components/HomeMotion";
import SpotlightCard from "@/components/SpotlightCard";
import { siteConfig } from "@/lib/site";

const services = [
  {
    code: "01",
    glyph: "</>",
    title: "Servicios web",
    body: "Sitios con dirección visual, estructura clara y tecnología que trabaja para tu negocio.",
    href: "/servicios",
    color: "rgba(244, 114, 182, 0.18)",
  },
  {
    code: "02",
    glyph: "EDU",
    title: "Clases personalizadas",
    body: "Programación explicada en humano: a tu ritmo, con práctica real y sin elitismo técnico.",
    href: "/clases",
    color: "rgba(34, 211, 238, 0.18)",
  },
  {
    code: "03",
    glyph: "LAB",
    title: "Materiales interactivos",
    body: "Quizzes, simuladores y experiencias digitales que convierten contenido en aprendizaje.",
    href: "/materiales",
    color: "rgba(250, 204, 21, 0.14)",
  },
];

const capabilities = [
  {
    code: "WEB_SYS",
    title: "Diseño + desarrollo",
    body: "Landings, webs institucionales y sitios comerciales rápidos, accesibles y con una identidad imposible de confundir.",
  },
  {
    code: "LEARN_01",
    title: "Educación sin barreras",
    body: "Acompañamiento real para empezar desde cero, reforzar bases o llevar una idea propia hasta código funcional.",
  },
  {
    code: "INTERACT",
    title: "Experiencias que enseñan",
    body: "Recursos interactivos pensados para despertar curiosidad y hacer que aprender deje de sentirse como una obligación.",
  },
  {
    code: "LOW_COST",
    title: "Tecnología alcanzable",
    body: "Presupuestos honestos, procesos transparentes y soluciones que respetan el contexto de cada persona o proyecto.",
  },
];

const tickerItems = [
  "HIGH TECH",
  "LOW LIFE",
  "QUITO // ECUADOR",
  "WEB + EDUCACIÓN",
  "TECNOLOGÍA PARA LA GENTE",
];

export default function Home() {
  return (
    <HomeMotion>
      <section className="cyber-hero" data-hero>
        <div className="hero-grid-glow" aria-hidden="true" data-parallax />

        <div className="hero-system-bar" data-hero-line>
          <span>CPUNK_EC // NODE_00</span>
          <span className="system-status">
            <i aria-hidden="true" />
            SISTEMA ACTIVO
          </span>
          <span className="hidden sm:inline">UTC−05:00 // QUITO</span>
        </div>

        <div className="hero-layout">
          <div className="hero-copy">
            <p className="section-eyebrow" data-hero-item>
              Tecnología desde el sur digital
            </p>
            <h1
              className="glitch-title"
              data-text="HIGH TECH. LOW LIFE. IMPACTO REAL."
              data-hero-item
            >
              <span>HIGH TECH.</span>
              <span>LOW LIFE.</span>
              <strong>IMPACTO REAL.</strong>
            </h1>
            <p className="hero-lede" data-hero-item>
              Desarrollo web y educación digital con identidad propia para
              aprender, emprender y crecer sin pedir permiso.
            </p>
            <p className="hero-body" data-hero-item>
              Ciberpunk Ecuador cruza código, diseño y acompañamiento humano.
              Tecnología útil para personas, negocios y comunidades que casi
              nunca son el centro del discurso tecnológico.
            </p>
            <div className="hero-actions" data-hero-item>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button cyber-button--primary"
              >
                <span>Iniciar proyecto</span>
                <b aria-hidden="true">↗</b>
              </a>
              <Link
                href="/portafolio"
                className="cyber-button cyber-button--ghost"
              >
                <span>Ver trabajo</span>
                <b aria-hidden="true">→</b>
              </Link>
            </div>
          </div>

          <aside className="identity-terminal" data-hero-item data-parallax>
            <div className="terminal-corners" aria-hidden="true" />
            <div className="terminal-head">
              <span>IDENTIDAD://FREUDIAN_DEV</span>
              <span>EC-UIO</span>
            </div>
            <div className="terminal-portrait">
              <div className="portrait-rings" aria-hidden="true" />
              <Image
                src={siteConfig.logoPath}
                alt="Logo de Ciberpunk Ecuador"
                width={168}
                height={168}
                priority
                className="terminal-logo"
              />
              <span className="portrait-index">CP_593</span>
            </div>
            <div className="terminal-data">
              <p>
                <span>ORIGEN</span>
                <b>{siteConfig.location}</b>
              </p>
              <p>
                <span>MISIÓN</span>
                <b>ACCESO + AUTONOMÍA</b>
              </p>
              <p>
                <span>SEÑAL</span>
                <b className="text-cyan-300">ABIERTA / ONLINE</b>
              </p>
            </div>
            <p className="terminal-manifesto">
              “El futuro también se construye desde abajo.”
            </p>
          </aside>
        </div>

        <div className="hero-coordinate" aria-hidden="true">
          00°13′S / 78°31′W
        </div>
      </section>

      <div className="signal-ticker" aria-label="Principios de Ciberpunk Ecuador">
        <div className="signal-ticker__track">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`}>
              {item}
              <i aria-hidden="true">✦</i>
            </span>
          ))}
        </div>
      </div>

      <section className="services-block" data-reveal>
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">Capacidades / 001—003</p>
            <h2>Soluciones con pulso humano.</h2>
          </div>
          <p>
            Tecnología profesional sin el lenguaje inflado ni la distancia de
            las grandes agencias.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <SpotlightCard
              key={service.title}
              className="service-node"
              color={service.color}
            >
              <div className="service-node__top">
                <span>{service.code}</span>
                <b aria-hidden="true">{service.glyph}</b>
              </div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </div>
              <Link href={service.href} className="node-link">
                Explorar nodo <span aria-hidden="true">↗</span>
              </Link>
            </SpotlightCard>
          ))}
        </div>
      </section>

      <section className="manifesto-band" data-reveal>
        <div className="manifesto-band__index" aria-hidden="true">
          <span>MANIFIESTO</span>
          <b>01</b>
        </div>
        <div className="manifesto-band__copy">
          <p>No vendemos futuro en una caja.</p>
          <h2>
            Lo construimos contigo,
            <span> desde tu realidad.</span>
          </h2>
        </div>
        <p className="manifesto-band__body">
          High tech no debería significar inaccesible. Diseñamos herramientas
          digitales con potencia técnica, precio justo y acompañamiento cercano.
        </p>
      </section>

      <section className="capability-section" data-reveal>
        <div className="section-heading section-heading--compact">
          <div>
            <p className="section-eyebrow">Matriz operativa</p>
            <h2>Qué hacemos distinto.</h2>
          </div>
          <span className="section-code">CPUNK / MATRIX_04</span>
        </div>

        <div className="capability-grid">
          {capabilities.map((capability, index) => (
            <SpotlightCard
              key={capability.code}
              className="capability-node"
              color={
                index % 2
                  ? "rgba(244, 114, 182, 0.14)"
                  : "rgba(34, 211, 238, 0.14)"
              }
            >
              <span className="capability-node__code">
                {capability.code} / 0{index + 1}
              </span>
              <h3>{capability.title}</h3>
              <p>{capability.body}</p>
              <i aria-hidden="true" />
            </SpotlightCard>
          ))}
        </div>
      </section>

      <section className="transmissions" data-reveal>
        <div className="transmissions__intro">
          <p className="section-eyebrow">Transmisiones recibidas</p>
          <h2>Resultados que hablan sin filtro.</h2>
          <p>
            Proyectos pequeños también merecen procesos claros, diseño serio y
            herramientas que funcionen.
          </p>
        </div>

        <div className="transmission-list">
          <blockquote className="transmission">
            <div className="transmission__head">
              <Image
                src={avatarArt}
                alt=""
                width={52}
                height={52}
                className="transmission__avatar"
              />
              <div>
                <span>MSG_01 // ESTUDIANTE</span>
                <b>QUITO, ECUADOR</b>
              </div>
            </div>
            <p>
              “Aprendí a programar desde cero y ahora puedo construir mis propios
              proyectos con más confianza.”
            </p>
          </blockquote>
          <blockquote className="transmission">
            <div className="transmission__head">
              <Image
                src={avatarArt}
                alt=""
                width={52}
                height={52}
                className="transmission__avatar transmission__avatar--pink"
              />
              <div>
                <span>MSG_02 // EMPRENDEDORA</span>
                <b>TARQUI, ECUADOR</b>
              </div>
            </div>
            <p>
              “Mi página quedó con identidad propia y el proceso se sintió claro,
              acompañado y sin vueltas raras.”
            </p>
          </blockquote>
        </div>
      </section>
    </HomeMotion>
  );
}
