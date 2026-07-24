import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function NeonCTA() {
  return (
    <section className="neon-cta">
      <div className="neon-cta__signal" aria-hidden="true">
        <span>OPEN_CHANNEL</span>
        <i />
      </div>
      <div className="neon-cta__copy">
        <p className="section-eyebrow">Siguiente transmisión</p>
        <h2>
          Tu idea puede entrar
          <span> en línea hoy.</span>
        </h2>
        <p>
          Una web, una clase o un material interactivo. Cuéntame qué necesitas y
          aterrizamos una solución que respete tu contexto y tu presupuesto.
        </p>
      </div>
      <div className="neon-cta__actions">
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cyber-button cyber-button--primary"
        >
          Abrir canal <b aria-hidden="true">↗</b>
        </a>
        <Link
          href="/portafolio"
          className="cyber-button cyber-button--ghost"
        >
          Ver archivo <b aria-hidden="true">→</b>
        </Link>
      </div>
    </section>
  );
}
