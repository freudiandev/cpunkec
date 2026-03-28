
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NeonCTA from "@/components/NeonCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ciberpunk Ecuador | Páginas web, clases y materiales en Quito y Latinoamérica",
  description:
    "Ciberpunk Ecuador: desarrollo de páginas web, clases de programación y creación de juegos web desde cero. Servicios en Quito, Ecuador y Latinoamérica. Materiales educativos, trabajos investigativos con IA (Claude, GPT, Gemini). Accesible, profesional, cyberpunk vaporwave.",
  keywords: [
    "páginas web Quito",
    "páginas web Ecuador",
    "páginas web Latinoamérica",
    "clases de desarrollo web",
    "clases de programación",
    "juegos web desde cero",
    "materiales educativos interactivos",
    "trabajos investigativos académicos",
    "Anthropic Claude Sonnet 4.5",
    "Claude Opus 4.5",
    "Claude Sonnet 4.6",
    "Claude Opus 4.6",
    "GPT 5.2",
    "GPT 5.5",
    "Gemini 3.1 PRO",
    "servicios web Quito",
    "desarrollo web Ecuador",
    "web accesible",
    "web profesional",
    "cyberpunk vaporwave",
    "freudiandev",
    "ciberpunk ecuador"
  ],
  metadataBase: new URL("https://ciberpunkecuador.github.io"),
  openGraph: {
    title: "Ciberpunk Ecuador | Páginas web, clases y materiales en Quito y Latinoamérica",
    description:
      "Desarrollo de páginas web, clases de programación y juegos web desde cero. Servicios en Quito, Ecuador y Latinoamérica. Materiales educativos, trabajos investigativos con IA avanzada (Claude, GPT, Gemini).",
    url: "https://ciberpunkecuador.github.io",
    siteName: "Ciberpunk Ecuador",
    locale: "es_EC",
    type: "website",
    images: [
      {
        url: "/src/assets/1.jpg",
        width: 1200,
        height: 630,
        alt: "CiberPunk Ecuador logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ciberpunk Ecuador | Páginas web, clases y materiales en Quito y Latinoamérica",
    description:
      "Desarrollo de páginas web, clases de programación y juegos web desde cero. Servicios en Quito, Ecuador y Latinoamérica. Materiales educativos, trabajos investigativos con IA avanzada (Claude, GPT, Gemini).",
    images: [
      {
        url: "/src/assets/1.jpg",
        alt: "CiberPunk Ecuador logo",
      },
    ],
    site: "@freudiandev",
  },
  other: {
    'og:image': '/src/assets/1.jpg',
    'og:type': 'website',
    'og:site_name': 'Ciberpunk Ecuador',
    'og:locale': 'es_EC',
    'whatsapp:image': '/src/assets/1.jpg',
    'telegram:image': '/src/assets/1.jpg',
    'instagram:image': '/src/assets/1.jpg',
    'robots': 'index, follow',
    'geo.region': 'EC-P',
    'geo.placename': 'Quito',
    'geo.position': '-0.1807;-78.4678',
    'ICBM': '-0.1807, -78.4678',
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark bg-black`}
    >
      <head>
        <link rel="icon" type="image/png" href="/src/assets/1.jpg" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ciberpunk Ecuador: desarrollo de páginas web, clases de programación y creación de juegos web desde cero. Servicios en Quito, Ecuador y Latinoamérica. Materiales educativos, trabajos investigativos con IA (Claude, GPT, Gemini). Accesible, profesional, cyberpunk vaporwave." />
        <meta name="keywords" content="páginas web Quito, páginas web Ecuador, páginas web Latinoamérica, clases de desarrollo web, clases de programación, juegos web desde cero, materiales educativos interactivos, trabajos investigativos académicos, Anthropic Claude Sonnet 4.5, Claude Opus 4.5, Claude Sonnet 4.6, Claude Opus 4.6, GPT 5.2, GPT 5.5, Gemini 3.1 PRO, servicios web Quito, desarrollo web Ecuador, web accesible, web profesional, cyberpunk vaporwave, freudiandev, ciberpunk ecuador" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Ciberpunk Ecuador | Páginas web, clases y materiales en Quito y Latinoamérica" />
        <meta property="og:description" content="Desarrollo de páginas web, clases de programación y juegos web desde cero. Servicios en Quito, Ecuador y Latinoamérica. Materiales educativos, trabajos investigativos con IA avanzada (Claude, GPT, Gemini)." />
        <meta property="og:image" content="/src/assets/1.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ciberpunk Ecuador" />
        <meta property="og:locale" content="es_EC" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Ciberpunk Ecuador | Páginas web, clases y materiales en Quito y Latinoamérica" />
        <meta property="twitter:description" content="Desarrollo de páginas web, clases de programación y juegos web desde cero. Servicios en Quito, Ecuador y Latinoamérica. Materiales educativos, trabajos investigativos con IA avanzada (Claude, GPT, Gemini)." />
        <meta property="twitter:image" content="/src/assets/1.jpg" />
        <meta property="whatsapp:image" content="/src/assets/1.jpg" />
        <meta property="telegram:image" content="/src/assets/1.jpg" />
        <meta property="instagram:image" content="/src/assets/1.jpg" />
        <meta name="geo.region" content="EC-P" />
        <meta name="geo.placename" content="Quito" />
        <meta name="geo.position" content="-0.1807;-78.4678" />
        <meta name="ICBM" content="-0.1807, -78.4678" />
      </head>
      <body className="min-h-full flex flex-col bg-black text-zinc-100 font-sans">
        <Header />
        <main className="flex-1 flex flex-col w-full mx-auto max-w-5xl px-2 md:px-8 py-8 bg-black text-zinc-100">
          {children}
          <NeonCTA />
        </main>
        <Footer />
      </body>
    </html>
  );
}
