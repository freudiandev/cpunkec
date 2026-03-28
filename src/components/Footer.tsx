"use client";

import { useEffect, useState } from "react";

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
    <footer className="w-full mt-auto py-6 px-4 bg-black/90 border-t border-fuchsia-700/30 text-center text-zinc-400 text-sm flex flex-col items-center gap-2">
      <img src="/src/assets/1.jpg" alt="Logo CiberPunk Ecuador" className="w-12 h-12 mb-2 rounded-full border-2 border-fuchsia-400 bg-white object-cover" />
      <div className="flex items-center gap-2 text-pixel font-mono">
        <span className="pixel-art">▉</span>
        <span id="visit-counter" className="text-turquoise-400">Visitas: <span className="font-bold">{visits}</span></span>
        <span className="pixel-art">▉</span>
      </div>
      <div className="text-xs mt-2">
        Cumplimos con la Ley Orgánica de Protección de Datos Personales (LOPDP) del Ecuador.
      </div>
      <div className="flex gap-4 justify-center mt-2">
        <a href="https://facebook.com/freudiandev" target="_blank" rel="noopener" className="hover:text-fuchsia-400 underline">Facebook</a>
        <a href="https://instagram.com/freudiandev" target="_blank" rel="noopener" className="hover:text-turquoise-400 underline">Instagram</a>
      </div>
      <div className="mt-2">
        Esta página es Copyleft – Licencia GNU GPL 3.0. Hecho con amor <span className="text-fuchsia-400">♥</span> por Freudian Dev de Ciberpunk Ecuador.
      </div>
    </footer>
  );
}
