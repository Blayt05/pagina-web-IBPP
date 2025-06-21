"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Header() {
    const [opened,setOpened] = useState(false);
    const [activeMobile, setActiveMobile] = useState("");

    const mobileLinks = [
        "Inicio",
        "Sobre Nosotros",
        "Sermones",
        "Blog",
        "Tienda",
        "Inicio de Sesion"
    ]
    
    const mobileLinks2 = [
        "Visitanos",
        "Mira",
        "Conecta",
        "Crece"
    ]
  
    return (
        <header className="w-full">
            <div className="w-full overflow-x-hidden bg-[#3E81AD] flex">
                <Image 
                    src="/images/PALOMA_LOGO_IBPP.svg" 
                    alt="Imagen Paloma IBPP"
                    width={85}
                    height={150} 
                    className="ml-7"
                />

                <Image 
                    src="/images/IBPP_Logo_Blanco.svg" 
                    alt="Imagen Logo IBPP"
                    width={180}
                    height={57.6}
                    className="p-2 mr-10 border-r-2 border-amber-50"
                />

                {/* Menu horizontal solo en desktop */}
                <nav className="hidden lg:flex flex-1 justify-center items-center">
                    <ul className="flex gap-8 text-[#FFFFFF]">
                        <li><a href="#" className="hover:text-amber-300">Inicio</a></li>
                        <li><a href="#" className="hover:text-amber-300">Sobre Nosotros</a></li>
                        <li><a href="#" className="hover:text-amber-300">Sermones</a></li>
                        <li><a href="#" className="hover:text-amber-300">Blog</a></li>
                        <li><a href="#" className="hover:text-amber-300">Tienda</a></li>
                        <li><a href="#" className="hover:text-amber-300">Inicio de Sesion</a></li>
                        <li>
                            <a href="#" className="ml-8 text-[#000000] bg-[#FFD2A4] rounded-full px-5 py-3 hover:bg-[#816f5e] transition">
                                Contactanos
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* Ayuda a empujar el boton hacia la derecha */}
                <div className="flex-1 lg:hidden"></div>

                <button
                    className={` flex  hamburger hamburger--spin ml-auto mr-4${opened ? " is-active" : ""}`}
                    type="button"
                    onClick={() => setOpened(!opened)}
                    aria-label="Menu"
                    >
                    <div className=" lg:hidden ">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </div>
                </button>

            </div>

            

            {/* Menu desplegable */}
            {opened && ( 
                <div 
                    className={` lg:hidden mx-auto mt-4 max-w-xs rounded-xl bg-white shadow-lg ring-1 ring-gray-200 transition-all duration-300 ease-out ${
                            opened ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
                >
                    <nav>
                        <ul className="flex flex-col items-center gap-2 py-4">
                            {mobileLinks.map(link => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        onClick={() => setActiveMobile(link)}
                                        className={`block w-full rounded-lg px-6 py-2 text-lg font-semibold text-gray-700 
                                            hover:bg-amber-100 hover:text-amber-600
                                            ${activeMobile === link ? "bg-amber-100 text-amber-700" : ""} 
                                        `}
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <hr className="my-2 border-gray-200" />
                        <ul className="flex flex-col items-center gap-2 py-2">
                            <li>

                                <a 
                                    href="#" 
                                    onClick={() => setActiveMobile("Contactanos")}
                                    className={`block w-full rounded-lg px-6 py-2 text-lg font-semibold transition
                                        ${activeMobile === "Contactanos"
                                            ? "bg-amber-200 text-cyan-700"
                                            : "text-cyan-500 hover:bg-amber-200"}
                                    `} 
                                >
                                    Contactanos
                                </a>
                            </li>
                        </ul>
                        <hr className="my-2 border-gray-200" />
                        <ul className="flex flex-col items-center gap-2 py-2">
                            {mobileLinks2.map(link => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        onClick={() => setActiveMobile(link)}
                                        className={`block w-full rounded-lg px-6 py-2 text-lg font-semibold text-gray-700 transition
                                            hover:bg-amber-100 hover:text-amber-600 
                                            ${activeMobile === link ? "bg-amber-100 text-amber-700" : ""}                                            
                                        `}  
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                            
                        </ul>
                    </nav>
                </div>
            )}        

            {/* Menu inferior azul solo en desktop */}
            <div className="hidden lg:block bg-blue-300">
                <nav className="flex justify-center">
                    <ul className="flex gap-8 p-2">
                        <li><a href="#" className="hover:text-amber-300">Visitanos</a></li>
                        <li><a href="#" className="hover:text-amber-300">Mira</a></li>
                        <li><a href="#" className="hover:text-amber-300">Conecta</a></li>
                        <li><a href="#" className="hover:text-amber-300">Crece</a></li>
                    </ul>
                </nav>
            </div>   
            
        </header>

    );
}