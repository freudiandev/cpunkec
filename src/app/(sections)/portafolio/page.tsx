export default function PortafolioPage() {
  const modules = [
    "Proyectos web",
    "Licencias GPT Go",
    "Office 365",
    "ESET",
    "Articulos y noticias de tecnologia",
    "Agenda de citas online",
    "Foro de comentarios",
    "Chatbot IA autonomo",
    "Dashboard de metricas",
  ];

  return (
    <section className="neon-shell kinetic-border my-8 rounded-lg px-5 py-14 text-zinc-100 md:px-10 md:py-16">
      <div className="relative z-10 mx-auto max-w-5xl text-left">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-cyan-200">
          Portafolio / CiberPunk Ecuador
        </p>
        <h1 className="glitch neon-gradient mb-5 text-4xl font-black uppercase leading-tight md:text-6xl">
          Ecosistema digital cyberpunk
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
          Portafolio de proyectos web, venta de licencias digitales, articulos
          de tecnologia, agenda de citas online, foro de comentarios, chatbot IA
          autonomo y dashboard de metricas.
        </p>

        <div className="neon-rule my-8" />

        <div className="grid gap-4 md:grid-cols-3">
          {modules.map((module) => (
            <article key={module} className="neon-card rounded-lg px-5 py-5">
              <span className="signal-dot mb-4 block h-2 w-2 rounded-full bg-fuchsia-300 text-fuchsia-300" />
              <h2 className="text-lg font-extrabold text-white">{module}</h2>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="neon-panel rounded-lg p-6">
            <h2 className="mb-3 text-2xl font-black text-white">
              Seguridad avanzada
            </h2>
            <p className="leading-7 text-zinc-300">
              Plataforma pensada para operar en un entorno moderno, seguro y
              profesional, con identidad cyberpunk sin perder claridad.
            </p>
          </div>
          <div className="neon-panel rounded-lg p-6">
            <h2 className="mb-3 text-2xl font-black text-white">
              Pagos integrados
            </h2>
            <p className="leading-7 text-zinc-300">
              Flujo comercial con pagos por Stripe y transferencia, preparado
              para servicios digitales y licencias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
