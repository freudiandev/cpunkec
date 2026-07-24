"use client";

import Link from "next/link";
import { useState } from "react";

export default function ServicesPortfolioModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-full border border-cyan-300/60 bg-cyan-300/10 px-6 py-3 text-sm font-semibold tracking-[0.2em] text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/15"
      >
        Ver portafolio real
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="services-portfolio-title"
        >
          <div className="w-full max-w-xl rounded-[2rem] border border-fuchsia-400/30 bg-slate-950/95 p-6 shadow-[0_0_80px_rgba(217,70,239,0.22)]">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                  Portafolio
                </p>
                <h2
                  id="services-portfolio-title"
                  className="mt-2 text-2xl font-black text-white"
                >
                  ¿Quieres ver trabajos reales antes de contratar?
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/15 px-3 py-1 text-sm text-zinc-200 transition hover:border-white/30 hover:bg-white/5"
              >
                Cerrar
              </button>
            </div>
            <p className="text-base leading-7 text-zinc-300">
              En el portafolio puedes revisar medios digitales, landings
              comerciales, experiencias educativas y proyectos con identidad
              propia ya publicados.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/portafolio"
                onClick={() => setOpen(false)}
                className="rounded-full bg-fuchsia-500 px-6 py-3 text-sm font-semibold tracking-[0.2em] text-slate-950 transition hover:bg-fuchsia-400"
              >
                Ir al portafolio
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold tracking-[0.2em] text-zinc-200 transition hover:border-white/30 hover:bg-white/5"
              >
                Seguir leyendo servicios
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
