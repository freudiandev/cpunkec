export default function Home() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-24">
      <h1 className="text-5xl md:text-6xl font-extrabold neon-gradient mb-6 glitch">
        Ciberpunk Ecuador
      </h1>
      <p className="max-w-2xl text-xl md:text-2xl mb-8 text-zinc-300">
        Clases, materiales y servicios de desarrollo web con estilo cyberpunk vaporwave minimalista.<br />
        Accesible, profesional, confiable. Democratizando el conocimiento tecnológico desde 2018.<br />
        <span className="block mt-4 text-lg text-turquoise-400 font-mono">By Freudian Dev</span>
      </p>
      <a
        href="https://wa.me/593983629837"
        target="_blank"
        rel="noopener"
        className="btn-neon-glitch text-2xl px-12 py-5 mt-4"
        aria-label="Contactar por WhatsApp"
      >
        ¡Contáctanos por WhatsApp!
      </a>
    </section>
  );
}
