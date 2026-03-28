import Link from "next/link";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/(sections)/clases", label: "Clases" },
  { href: "/(sections)/materiales", label: "Materiales" },
  { href: "/(sections)/servicios", label: "Servicios" },
  { href: "/(sections)/portafolio", label: "Portafolio" },
  { href: "/(sections)/bolsa", label: "Bolsa Tarki 1" },
  { href: "/(sections)/sobre-mi", label: "Sobre mí" },
];

export default function Header() {
  return (
    <header className="w-full py-4 px-2 md:px-8 flex items-center justify-between bg-black/80 backdrop-blur border-b border-fuchsia-700/30 relative z-50">
      <Link href="/" className="text-2xl font-extrabold neon-gradient glitch-logo tracking-widest select-none" aria-label="Inicio Ciberpunk Ecuador">
        Ciberpunk Ecuador
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
