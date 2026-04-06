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
  title: {
    default: "Ciberpunk Ecuador",
    template: "%s | Ciberpunk Ecuador",
  },
  description:
    "Ciberpunk Ecuador: desarrollo de paginas web, clases de programacion y materiales interactivos desde Quito para Ecuador y Latinoamerica.",
  keywords: [
    "paginas web Quito",
    "paginas web Ecuador",
    "clases de programacion",
    "materiales educativos interactivos",
    "desarrollo web",
    "ciberpunk ecuador",
    "freudiandev",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ciberpunk Ecuador | Paginas web, clases y materiales",
    description:
      "Desarrollo web, clases y materiales interactivos con identidad propia desde Quito para Ecuador y Latinoamerica.",
    url: "/",
    siteName: "Ciberpunk Ecuador",
    locale: "es_EC",
    type: "website",
    images: [
      {
        url: "/1.png",
        alt: "Logo de Ciberpunk Ecuador",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ciberpunk Ecuador | Paginas web, clases y materiales",
    description:
      "Desarrollo web, clases y materiales interactivos con identidad propia desde Quito para Ecuador y Latinoamerica.",
    images: ["/1.png"],
    site: "@freudiandev",
  },
  robots: {
    index: true,
    follow: true,
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
        <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-2 py-8 md:px-8">
          {children}
          <NeonCTA />
        </main>
        <Footer />
      </body>
    </html>
  );
}
