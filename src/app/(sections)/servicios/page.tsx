export default function ServiciosPage() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold neon-gradient mb-4">Servicios de Desarrollo Web</h1>
      <p className="max-w-2xl text-lg md:text-xl mb-6 text-zinc-300">
        Páginas estáticas desde <span className="font-bold text-fuchsia-400">$100</span>, dinámicas <span className="font-bold text-turquoise-400">$200-350</span>, premium con servidor privado desde <span className="font-bold text-violet-400">$500</span>.<br />
        Todo inicia con entrevista + documento de proyecto.
      </p>
      <a href="https://wa.me/593983629837" target="_blank" rel="noopener" className="btn-neon-glitch text-lg px-8 py-3 mt-4">Solicita tu web</a>
    </section>
  );
}
