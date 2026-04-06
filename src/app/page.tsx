import Image from "next/image";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center px-0 py-0 text-center">
      <section className="flex w-full flex-col items-center justify-center bg-black px-4 py-16 text-zinc-100 md:px-0">
        <Image
          src={siteConfig.logoPath}
          alt="Logo CiberPunk Ecuador"
          width={96}
          height={96}
          className="mb-6 h-24 w-24 rounded-full border-4 border-fuchsia-400 bg-white object-cover shadow-lg"
        />
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight md:text-6xl">
          CiberPunk Ecuador
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl md:text-2xl">
          Soluciones digitales, clases y materiales de desarrollo web para
          empresas y profesionales.
          <br />
          <span className="font-semibold text-fuchsia-500">
            Innovacion, confianza y resultados.
          </span>
        </p>
        <a
          href="https://wa.me/593983629837"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-fuchsia-600 px-10 py-4 text-xl font-bold text-white shadow transition hover:bg-fuchsia-700"
          aria-label="Contactar por WhatsApp"
        >
          Solicita tu web o clase ahora
        </a>
      </section>

      <section className="w-full bg-white px-4 py-16 text-zinc-900 md:px-0">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <Image
              src={siteConfig.logoPath}
              alt="Clases"
              width={64}
              height={64}
              className="mb-4 h-16 w-16 rounded-full border-2 border-fuchsia-400 object-cover"
            />
            <h2 className="mb-2 text-lg font-bold">Clases personalizadas</h2>
            <p>
              Aprende desde cero o potencia tus habilidades. Para todas las
              edades y niveles.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={siteConfig.logoPath}
              alt="Materiales"
              width={64}
              height={64}
              className="mb-4 h-16 w-16 rounded-full border-2 border-cyan-400 object-cover"
            />
            <h2 className="mb-2 text-lg font-bold">Materiales interactivos</h2>
            <p>
              Quizzes, minijuegos y recursos educativos unicos, hechos a
              medida.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={siteConfig.logoPath}
              alt="Servicios web"
              width={64}
              height={64}
              className="mb-4 h-16 w-16 rounded-full border-2 border-violet-400 object-cover"
            />
            <h2 className="mb-2 text-lg font-bold">Servicios web</h2>
            <p>
              Sitios web modernos, accesibles y con identidad propia. Precios
              justos y solidarios.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-black px-4 py-16 text-zinc-100 md:px-0">
        <h3 className="mb-8 text-2xl font-bold">Testimonios</h3>
        <div className="mx-auto flex max-w-4xl flex-col justify-center gap-8 md:flex-row">
          <blockquote className="rounded-lg border-l-4 border-fuchsia-400 bg-zinc-900 p-6 italic text-zinc-100 shadow">
            “Aprendi a programar desde cero y ahora hago mis propios proyectos.
            Gracias CiberPunk.”
            <br />
            <span className="mt-2 block font-mono text-cyan-400">
              Estudiante, Quito
            </span>
          </blockquote>
          <blockquote className="rounded-lg border-l-4 border-cyan-400 bg-zinc-900 p-6 italic text-zinc-100 shadow">
            “El sitio web de mi emprendimiento es unico y rapido. Atencion
            personalizada y solidaria.”
            <br />
            <span className="mt-2 block font-mono text-fuchsia-400">
              Emprendedora, Tarqui
            </span>
          </blockquote>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-16 text-zinc-900 md:px-0">
        <h4 className="mb-4 text-xl font-bold">
          Listo para transformar tu futuro digital
        </h4>
        <a
          href="https://wa.me/593983629837"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-fuchsia-600 px-10 py-4 text-xl font-bold text-white shadow transition hover:bg-fuchsia-700"
        >
          Contactanos por WhatsApp
        </a>
        <p className="mt-4 text-sm text-zinc-500">
          By Freudian Dev - CiberPunk Ecuador
        </p>
      </section>
    </main>
  );
}
