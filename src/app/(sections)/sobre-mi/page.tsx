export default function SobreMiPage() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16 my-8 bg-black text-zinc-100 rounded-2xl shadow-xl border border-violet-400/30">
      <h1 className="text-4xl md:text-5xl font-bold neon-gradient mb-4">Sobre mí</h1>
      <div className="max-w-2xl text-lg md:text-xl mb-6 text-zinc-300 space-y-4">
        <p>Soy Freudian Dev. La mayor parte de mi vida la pasé lidiando con problemas mentales y existenciales: cuestionando la filosofía, la política, la realidad y los límites. Siempre fui innovador y creativo. Hoy quiero traer soluciones tecnológicas altas al pueblo, a presupuestos de bolsillo. Democratizar el conocimiento.</p>
        <p>Ciberpunk Ecuador nació en 2018 reparando computadoras viejas para resistir la obsolescencia programada. Es un colectivo social de disidencia, autorreparación, autogestión y solidaridad. En 2025 di clases cinco meses en la Unidad Educativa Municipal Calderón a niños de sexto de básica. En 2026 estoy dando clases particulares a Isaac en el barrio La Biloxi.</p>
      </div>
      <a href="https://wa.me/593983629837" target="_blank" rel="noopener" className="btn-neon-glitch text-lg px-8 py-3 mt-4">Contáctame</a>
    </section>
  );
}
