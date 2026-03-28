export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen px-0 py-0 text-center">
      {/* Hero principal */}
      <section className="w-full bg-black text-zinc-100 flex flex-col items-center justify-center py-16 px-4 md:px-0">
        <img src="/1.png" alt="Logo CiberPunk Ecuador" className="w-24 h-24 mb-6 rounded-full shadow-lg border-4 border-fuchsia-400 bg-white object-cover" />
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">CiberPunk Ecuador</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Soluciones digitales, clases y materiales de desarrollo web para empresas y profesionales.<br />
          <span className="text-fuchsia-500 font-semibold">Innovación, confianza y resultados.</span>
        </p>
        <a
          href="https://wa.me/593983629837"
          target="_blank"
          rel="noopener"
          className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-4 px-10 rounded-full text-xl shadow transition"
          aria-label="Contactar por WhatsApp"
        >
          ¡Solicita tu web o clase ahora!
        </a>
      </section>

      {/* Beneficios */}
      <section className="w-full bg-white text-zinc-900 py-16 px-4 md:px-0">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img src="/1.png" alt="Clases" className="w-16 h-16 mb-4 rounded-full border-2 border-fuchsia-400 object-cover" />
            <h2 className="text-lg font-bold mb-2">Clases personalizadas</h2>
            <p>Aprende desde cero o potencia tus habilidades. Para todas las edades y niveles.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/1.png" alt="Materiales" className="w-16 h-16 mb-4 rounded-full border-2 border-turquoise-400 object-cover" />
            <h2 className="text-lg font-bold mb-2">Materiales interactivos</h2>
            <p>Quizzes, minijuegos y recursos educativos únicos, hechos a medida.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/1.png" alt="Servicios web" className="w-16 h-16 mb-4 rounded-full border-2 border-violet-400 object-cover" />
            <h2 className="text-lg font-bold mb-2">Servicios web</h2>
            <p>Sitios web modernos, accesibles y con identidad propia. Precios justos y solidarios.</p>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="w-full bg-black text-zinc-100 py-16 px-4 md:px-0">
        <h3 className="text-2xl font-bold mb-8">Testimonios</h3>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 justify-center">
          <blockquote className="bg-zinc-900 border-l-4 border-fuchsia-400 p-6 rounded-lg text-zinc-100 italic shadow">
            “Aprendí a programar desde cero y ahora hago mis propios proyectos. ¡Gracias CiberPunk!”<br />
            <span className="block mt-2 text-turquoise-400 font-mono">— Estudiante, Quito</span>
          </blockquote>
          <blockquote className="bg-zinc-900 border-l-4 border-turquoise-400 p-6 rounded-lg text-zinc-100 italic shadow">
            “El sitio web de mi emprendimiento es único y rápido. Atención personalizada y solidaria.”<br />
            <span className="block mt-2 text-fuchsia-400 font-mono">— Emprendedora, Tarqui</span>
          </blockquote>
        </div>
      </section>

      {/* CTA final */}
      <section className="w-full bg-white text-zinc-900 py-16 px-4 md:px-0">
        <h4 className="text-xl font-bold mb-4">¿Listo para transformar tu futuro digital?</h4>
        <a
          href="https://wa.me/593983629837"
          target="_blank"
          rel="noopener"
          className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-4 px-10 rounded-full text-xl shadow transition"
        >
          ¡Contáctanos por WhatsApp!
        </a>
        <p className="mt-4 text-zinc-500 text-sm">By Freudian Dev — CiberPunk Ecuador</p>
      </section>
    </main>
  );
}
