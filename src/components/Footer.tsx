"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const storageKey = "ciberpunk-ecuador-visits";
    const sessionKey = "ciberpunk-ecuador-visited";

    const rawValue = window.localStorage.getItem(storageKey);
    let nextValue = rawValue ? Number.parseInt(rawValue, 10) : 0;

    if (!window.sessionStorage.getItem(sessionKey)) {
      nextValue += 1;
      window.localStorage.setItem(storageKey, String(nextValue));
      window.sessionStorage.setItem(sessionKey, "1");
    }

    const timeoutId = window.setTimeout(() => {
      setVisits(nextValue);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <footer className="border-t border-fuchsia-400/20 bg-slate-950/95">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4">
              <Image
                src={siteConfig.logoPath}
                alt="Logo de Ciberpunk Ecuador"
                width={52}
                height={52}
                className="rounded-full border border-fuchsia-400/70 bg-white/95 object-cover shadow-[0_0_30px_rgba(232,121,249,0.25)]"
              />
              <div>
                <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300/80">
                  Ciberpunk Ecuador
                </p>
                <p className="text-sm text-zinc-300">
                  Tecnología con identidad propia, enfoque accesible y
                  acompañamiento cercano.
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Ciberpunk Ecuador trabaja con enfoque accesible, acompañamiento
              cercano y cumplimiento de la Ley Orgánica de Protección de Datos
              Personales del Ecuador.
            </p>
          </div>

          <div className="grid gap-2 text-sm text-zinc-300">
            <p>WhatsApp: {siteConfig.phone}</p>
            <p>Email: {siteConfig.email}</p>
            <p>Ubicación: {siteConfig.location}</p>
            <p>Visitas locales: {visits}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 text-sm">
          <a href={siteConfig.facebookUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 px-4 py-2 text-zinc-200 transition hover:border-fuchsia-400/50 hover:bg-fuchsia-400/10">
            Facebook
          </a>
          <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 px-4 py-2 text-zinc-200 transition hover:border-cyan-300/50 hover:bg-cyan-300/10">
            Instagram
          </a>
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 px-4 py-2 text-zinc-200 transition hover:border-emerald-300/50 hover:bg-emerald-300/10">
            WhatsApp
          </a>
        </div>

        <p className="text-xs text-zinc-500">
          Copyleft - GNU GPL 3.0. Hecho por Freudian Dev para Ciberpunk Ecuador.
        </p>
      </div>
    </footer>
  );
}
