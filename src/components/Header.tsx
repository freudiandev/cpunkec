import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-scan" aria-hidden="true" />
      <div className="header-inner">
        <Link
          href="/"
          aria-label="Inicio Ciberpunk Ecuador"
          className="brand-lockup"
        >
          <span className="brand-mark">
            <Image
              src={siteConfig.logoPath}
              alt=""
              width={44}
              height={44}
              className="brand-logo"
            />
          </span>
          <span>
            <small>UIO / ECU / LATAM</small>
            <b>CIBERPUNK_EC</b>
          </span>
        </Link>

        <nav aria-label="Navegación principal" className="system-nav">
          {siteConfig.nav.map((link, index) => (
            <Link key={link.href} href={link.href}>
              <span>0{index + 1}</span>
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="header-contact"
        >
          <i aria-hidden="true" />
          CONTACTO
        </a>
      </div>
    </header>
  );
}
