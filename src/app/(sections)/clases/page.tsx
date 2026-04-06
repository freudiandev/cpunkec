export default function ClasesPage() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16 my-8 bg-black text-zinc-100 rounded-2xl shadow-xl border border-fuchsia-700/30">
      <h1 className="text-4xl md:text-5xl font-bold neon-gradient mb-4">Clases de Desarrollo Web</h1>
      <p className="max-w-2xl text-lg md:text-xl mb-6 text-zinc-300">
        Aprende HTML, CSS y JavaScript desde cero absoluto. También creación de minijuegos en navegador.<br />
        Para niños, jóvenes, adultos y adultos mayores.<br />
        <span className="font-bold text-fuchsia-400">$5</span> por hora y media.<br />
        <span className="font-bold text-turquoise-400">Gratis</span> para personas vulnerables.
      </p>
      <a href="https://wa.me/593983629837" target="_blank" rel="noopener" className="btn-neon-glitch text-lg px-8 py-3 mt-4">¡Reserva tu clase!</a>
    </section>
  );
}
