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
    <header className="w-full py-4 px-2 md:px-8 flex items-center justify-between bg-black/80 backdrop-blur border-b border-fuchsia-700/30 relative z-50">
      <Link href="/" className="flex items-center gap-3 select-none" aria-label="Inicio Ciberpunk Ecuador">
        <Image
          src={siteConfig.logoPath}
          alt="Logo CiberPunk Ecuador"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full border-2 border-fuchsia-400 bg-white object-cover"
        />
        <span className="text-2xl font-extrabold tracking-widest text-zinc-100">CiberPunk Ecuador</span>
      </Link>
      <nav aria-label="Navegación principal" className="flex gap-2 md:gap-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="nav-link px-3 py-1 rounded-md text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
