import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/clases", label: "Clases" },
  { href: "/materiales", label: "Materiales" },
  { href: "/servicios", label: "Servicios" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/bolsa", label: "Bolsa Empleo Tarqui 1" },
  { href: "/sobre-mi", label: "Sobre Nosotros" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-cyan-300/15 bg-black/72 px-3 py-3 shadow-[0_0_30px_rgba(0,229,255,0.08)] backdrop-blur-xl md:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3">
        <Link
          href="/"
          className="group flex items-center gap-3 select-none"
          aria-label="Inicio Ciberpunk Ecuador"
        >
          <Image
            src={siteConfig.logoPath}
            alt="Logo CiberPunk Ecuador"
            width={40}
            height={40}
            className="glitch-logo h-10 w-10 rounded-full border border-fuchsia-300 bg-white object-cover shadow-[0_0_18px_rgba(255,61,242,0.45)]"
          />
          <span className="text-lg font-extrabold uppercase tracking-[0.18em] text-zinc-100 drop-shadow-[0_0_10px_rgba(0,229,255,0.35)] md:text-2xl">
            CiberPunk Ecuador
          </span>
        </Link>
        <nav
          aria-label="Navegación principal"
          className="flex flex-wrap justify-end gap-1 md:gap-2"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link rounded-md border border-transparent px-2.5 py-1 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 md:text-base"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
