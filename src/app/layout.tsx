import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NeonCTA from "@/components/NeonCTA";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "desarrollo web Quito",
    "clases de programación Ecuador",
    "materiales interactivos",
    "portafolio web Ecuador",
    "Ciberpunk Ecuador",
    "Freudian Dev",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Web, clases y materiales`,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: "es_EC",
    type: "website",
    images: [
      {
        url: siteConfig.logoPath,
        alt: "Logo de Ciberpunk Ecuador",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Web, clases y materiales`,
    description: siteConfig.description,
    images: [siteConfig.logoPath],
    site: "@freudiandev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen bg-slate-950 text-zinc-100">
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <div className="site-shell">
          <div className="ambient-layer" aria-hidden="true">
            <span className="ambient-orb ambient-orb--cyan" />
            <span className="ambient-orb ambient-orb--pink" />
            <span className="ambient-scanline" />
          </div>
          <Header />
          <main
            id="contenido"
            className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-1 flex-col px-4 py-8 md:px-8 md:py-10"
          >
            {children}
            <NeonCTA />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
