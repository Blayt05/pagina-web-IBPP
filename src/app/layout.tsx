import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";


// El layout es el componente que envuelve a todas las paginas, aqui se definen cosas que se repiten en todas las paginas.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


// Metadata personalizado para la pagina, ayuda al motor de busqueda
export const metadata: Metadata = {
  title: " Iglesia Bautista Principe de Paz",
  description: " Sitio Oficial de la Iglesia Bautista Principe de Paz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <Script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js" strategy="afterInteractive" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
