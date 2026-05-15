import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NeonCTA from "@/components/NeonCTA";
import { siteConfig } from "@/lib/site";

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
  icons: {
    icon: siteConfig.logoPath,
  },
  title: {
    default: "Ciberpunk Ecuador",
    template: "%s | Ciberpunk Ecuador",
  },
  description:
    "Ciberpunk Ecuador: desarrollo de paginas web, clases de programacion y creacion de juegos web desde cero. Servicios en Quito, Ecuador y Latinoamerica.",
  keywords: [
    "paginas web Quito",
    "paginas web Ecuador",
    "paginas web Latinoamerica",
    "clases de desarrollo web",
    "clases de programacion",
    "juegos web desde cero",
    "materiales educativos interactivos",
    "trabajos investigativos academicos",
    "desarrollo web",
    "web accesible",
    "web profesional",
    "cyberpunk vaporwave",
    "ciberpunk ecuador",
    "freudiandev",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ciberpunk Ecuador | Paginas web, clases y materiales en Quito y Latinoamerica",
    description:
      "Desarrollo de paginas web, clases de programacion y juegos web desde cero. Servicios en Quito, Ecuador y Latinoamerica.",
    url: "/",
    siteName: "Ciberpunk Ecuador",
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
    title: "Ciberpunk Ecuador | Paginas web, clases y materiales en Quito y Latinoamerica",
    description:
      "Desarrollo de paginas web, clases de programacion y juegos web desde cero. Servicios en Quito, Ecuador y Latinoamerica.",
    images: [siteConfig.logoPath],
    site: "@freudiandev",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "whatsapp:image": siteConfig.logoPath,
    "telegram:image": siteConfig.logoPath,
    "instagram:image": siteConfig.logoPath,
    "geo.region": "EC-P",
    "geo.placename": "Quito",
    "geo.position": "-0.1807;-78.4678",
    ICBM: "-0.1807, -78.4678",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-zinc-100 font-sans">
        <Header />
        <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-3 py-8 md:px-8">
          {children}
          <NeonCTA />
        </main>
        <Footer />
      </body>
    </html>
  );
}
