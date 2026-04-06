export default function MaterialesPage() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16 my-8 bg-black text-zinc-100 rounded-2xl shadow-xl border border-turquoise-400/30">
      <h1 className="text-4xl md:text-5xl font-bold neon-gradient mb-4">Materiales Educativos Interactivos</h1>
      <p className="max-w-2xl text-lg md:text-xl mb-6 text-zinc-300">
        Quizzes, historias interactivas (ej. misterio científico), mini-juegos educativos.<br />
        Precios fijos desde <span className="font-bold text-fuchsia-400">$10</span> (hosting reutilizable) hasta proyectos más complejos.
      </p>
      <a href="https://wa.me/593983629837" target="_blank" rel="noopener" className="btn-neon-glitch text-lg px-8 py-3 mt-4">Solicita materiales</a>
    </section>
  );
}
