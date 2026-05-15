"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const [visits, setVisits] = useState<number>(0);

  // Incrementar solo una vez al cargar
  useEffect(() => {
    if (typeof window !== "undefined") {
      const v = localStorage.getItem("ciberpunk-ecuador-visits");
      let count = v ? parseInt(v, 10) : 0;
      if (!sessionStorage.getItem("ciberpunk-ecuador-visited")) {
        count++;
        localStorage.setItem("ciberpunk-ecuador-visits", count.toString());
        sessionStorage.setItem("ciberpunk-ecuador-visited", "1");
      }
    }
  }, []);

  // Leer el valor para mostrarlo
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        const v = localStorage.getItem("ciberpunk-ecuador-visits");
        setVisits(v ? parseInt(v, 10) : 0);
      }, 0);
    }
  }, []);
  return (
    <footer className="mt-auto flex w-full flex-col items-center gap-2 border-t border-cyan-300/15 bg-black/80 px-4 py-6 text-center text-sm text-zinc-400 shadow-[0_-20px_45px_rgba(0,229,255,0.04)] backdrop-blur">
      <Image
        src={siteConfig.logoPath}
        alt="Logo CiberPunk Ecuador"
        width={48}
        height={48}
        className="glitch-logo mb-2 h-12 w-12 rounded-full border border-fuchsia-300 bg-white object-cover shadow-[0_0_18px_rgba(255,61,242,0.35)]"
      />
      <div className="flex items-center gap-2 text-pixel font-mono">
        <span className="pixel-art">▉</span>
        <span id="visit-counter" className="text-cyan-300">Visitas: <span className="font-bold">{visits}</span></span>
        <span className="pixel-art">▉</span>
      </div>
      <div className="text-xs mt-2">
        Cumplimos con la Ley Orgánica de Protección de Datos Personales (LOPDP) del Ecuador.
      </div>
      <div className="flex gap-4 justify-center mt-2">
        <a href="https://facebook.com/freudiandev" target="_blank" rel="noopener" className="underline hover:text-fuchsia-300">Facebook</a>
        <a href="https://instagram.com/freudiandev" target="_blank" rel="noopener" className="underline hover:text-cyan-300">Instagram</a>
      </div>
      <div className="mt-2">
        Esta página es Copyleft – Licencia GNU GPL 3.0. Hecho con amor <span className="text-fuchsia-400">♥</span> por Freudian Dev de Ciberpunk Ecuador.
      </div>
    </footer>
  );
}
