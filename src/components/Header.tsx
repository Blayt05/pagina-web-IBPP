"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { animateMobileMenuIn, animateMobileMenuOut } from "../animations/headerAnimations";

export default function Header() {
  const [activeMobile, setActiveMobile] = useState("");
  const [opened, setOpened] = useState(false);
  const [shouldRenderMenu, setShouldRenderMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const mobileLinks = [
    "Inicio",
    "Sobre Nosotros",
    "Sermones",
    "Blog",
    "Tienda",
    "Contactanos",
  ];

  const mobileLinks2 = ["Visitanos", "Mirar", "Conecta", "Crece", "Sobre IBPP"];

  const primaryHrefMap: Record<string, string> = {
    Inicio: "/",
    "Sobre Nosotros": "/sobre-nosotros",
    Sermones: "/sermones",
    Blog: "/blog",
    Tienda: "/tienda",
    Contactanos: "/contactanos",
  };

  const secondaryHrefMap: Record<string, string> = {
    Visitanos: "/visitanos/direcciones",
    Mirar: "/paginas/mirar",
    Conecta: "/paginas/conecta",
    Crece: "/paginas/crece",
    "Sobre IBPP": "/paginas/sobreibpp",
  };

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleMobileItemClick(label: string) {
    setActiveMobile(label);
    setOpened(false);
  }

  useEffect(() => {
    if (opened) {
      setShouldRenderMenu(true);

      requestAnimationFrame(() => {
        if (menuRef.current) {
          animateMobileMenuIn(menuRef.current);
        }
      });

      return;
    }

    if (menuRef.current) {
      animateMobileMenuOut(menuRef.current, () => setShouldRenderMenu(false));
    } else {
      setShouldRenderMenu(false);
    }
  }, [opened]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="flex w-full overflow-x-hidden bg-[#3E81AD]">
        <Link href="/">
          <button onClick={scrollToTop} className="m-0 cursor-pointer border-none bg-transparent p-0">
            <Image
              src="/images/PALOMA_LOGO_IBPP.svg"
              alt="Imagen Paloma IBPP"
              width={85}
              height={150}
              className="ml-7"
            />
          </button>
          <button onClick={scrollToTop} className="m-0 cursor-pointer border-none bg-transparent p-0">
            <Image
              src="/images/IBPP_Logo_Blanco.svg"
              alt="Imagen Logo IBPP"
              width={180}
              height={57.6}
              className="border-amber-50 p-2"
            />
          </button>
        </Link>

        <nav className="hidden flex-1 items-center justify-center lg:flex">
          <ul className="flex gap-8 text-[#FFFFFF]">
            <li><Link href="/" className="hover:text-amber-300">Inicio</Link></li>
            <li><Link href="/sobre-nosotros" className="hover:text-amber-300">Sobre Nosotros</Link></li>
            <li><Link href="/sermones" className="hover:text-amber-300">Sermones</Link></li>
            <li><Link href="/blog" className="hover:text-amber-300">Blog</Link></li>
            <li><Link href="/tienda" className="hover:text-amber-300">Tienda</Link></li>
            <li><Link href="/iniciodesesion" className="hover:text-amber-300">Inicio de Sesion</Link></li>
            <li>
              <Link
                href="/contactanos"
                className="ml-8 rounded-full bg-[#FFD2A4] px-5 py-3 text-[#000000] transition hover:bg-[#816f5e]"
              >
                Contactanos
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex-1 lg:hidden" />

        <button
          className={`hamburger hamburger--spin flex justify-end ${opened ? " is-active" : ""}`}
          type="button"
          onClick={() => setOpened((prev) => !prev)}
          aria-label="Menu"
        >
          <div className="lg:hidden">
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </div>
        </button>
      </div>

      {shouldRenderMenu && (
        <div
          ref={menuRef}
          className="fixed left-1/2 top-23 z-50 w-full -translate-x-1/2 rounded-xl bg-white shadow-lg ring-1 ring-gray-200 lg:hidden"
        >
          <nav>
            <ul className="flex flex-col items-center gap-2 py-4">
              {mobileLinks.map((link) => (
                <li key={link} className="mobile-item">
                  <Link
                    href={primaryHrefMap[link] ?? "#"}
                    onClick={() => handleMobileItemClick(link)}
                    className={`block w-full rounded-lg px-6 py-2 text-lg font-semibold text-gray-700 hover:bg-amber-100 hover:text-amber-600 ${
                      activeMobile === link ? "bg-amber-100 text-amber-700" : ""
                    }`}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>

            <hr className="my-2 border-gray-400" />

            <ul className="flex flex-col items-center gap-2 py-2">
              <li className="mobile-item">
                <Link
                  href="/iniciodesesion"
                  onClick={() => handleMobileItemClick("IniciodeSesion")}
                  className={`block w-full rounded-lg px-6 py-2 text-lg font-semibold transition ${
                    activeMobile === "IniciodeSesion"
                      ? "bg-amber-200 text-cyan-700"
                      : "text-cyan-500 hover:bg-amber-200"
                  }`}
                >
                  Login
                </Link>
              </li>
            </ul>

            <hr className="my-2 border-gray-300" />

            <ul className="flex flex-col items-center gap-2 py-2">
              {mobileLinks2.map((link) => (
                <li key={link} className="mobile-item">
                  <Link
                    href={secondaryHrefMap[link] ?? "#"}
                    onClick={() => handleMobileItemClick(link)}
                    className={`block w-full rounded-lg px-6 py-2 text-lg font-semibold text-gray-700 transition hover:bg-amber-100 hover:text-amber-600 ${
                      activeMobile === link ? "bg-amber-100 text-amber-700" : ""
                    }`}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      <div className="hidden bg-blue-300 lg:block">
        <nav className="flex justify-center">
          <ul className="flex gap-8 p-2">
            <li><Link href="/visitanos/direcciones" className="hover:text-amber-300">Visitanos</Link></li>
            <li><Link href="/paginas/mirar" className="hover:text-amber-300">Mirar</Link></li>
            <li><Link href="/paginas/conecta" className="hover:text-amber-300">Conecta</Link></li>
            <li><Link href="/paginas/crece" className="hover:text-amber-300">Crece</Link></li>
            <li><Link href="/paginas/sobreibpp" className="hover:text-amber-300">Sobre IBPP</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}