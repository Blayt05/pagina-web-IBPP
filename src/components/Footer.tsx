"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
    const [open, setOpen] = useState<number | null>(null);

    const sections = [
        {
            title: "Mirar", 
            link: "/paginas/mirar", 
            links: [
                { name: "Directos en vivo", href: "/mirar/directosenvivo" },
                { name: "Podcast", href: "/mirar/podcast" },
            ]
        },
        {
            title: "Visitanos",
            link: "/visitanos/direcciones", 
            links: [
                { name: "Direcciones", href: "/visitanos/direcciones" },
        ]},
        {
            title: "Conecta",   
            link: "/paginas/conecta", 
            links: [
                { name: "Donaciones", href: "/conecta/donaciones" },
        ]},
        {
            title: "Crece", 
            link: "/paginas/crece", 
            links: [
                { name: "Sobre los niños", href: "/crece/sobrelosninos" },
                { name: "Femenil", href: "/crece/femenil" },
                { name: "Varonil", href: "/crece/varonil" },
                { name: "Jovenes", href: "/crece/jovenes" },
                { name: "Clases y Eventos", href: "/crece/clasesyeventos" },
        ]},
        {
            title: "Sobre IBPP", 
            link: "/paginas/sobreibpp", 
            links: [
                { name: "Nuestra Historia", href: "/sobreibpp/nuestrahistoria" },
                { name: "Contactanos", href: "/contactanos" },
                { name: "Politicas de Privacidad", href: "/sobreibpp/politicasdeprivacidad" },
                { name: "Terminos de Uso", href: "/sobreibpp/terminosdeuso" }
        ]}
    ];

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <footer className="w-full mt-auto">
            <div className="bg-[rgb(59,116,208)] ">
                
                <div className="lg:hidden">

                    {/* Dispositivos Moviles  */}
                    
                    <div className=" flex flex-col pb-5 justify-center items-center p-5">
                            <button onClick={scrollToTop} className="bg-transparent border-none p-0 m-0 cursor-pointer">
                                <Image
                                    src="/images/IBPP_Logo_Blanco.svg"
                                    alt="Logo de IBPP"
                                    width={150}
                                    height={100}
                                />
                            </button>
                        
                        {/* Redes Sociales */}
                        <div className="flex justify-start items-center gap-5 pt-5">
                            
                            <a href="https://www.facebook.com/IBPPMty" className="p-3  rounded-full bg-white/10 hover:bg-blue-600 transition-colors shadow-lg" target="_blank" rel="noopener noreferrer" aria-label="Facebook IBPP">
                                <Image
                                    src="/images/Facebook.svg"
                                    alt="Logo de IBPP"
                                    width={40}
                                    height={40}
                                    className="hover:scale-110 transition-transform"
                                />
                            </a>
                            <a href="https://www.instagram.com/ibppmty/" className="p-3 rounded-full bg-white/10 hover:bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 transition-colors shadow-lg" target="_blank" rel="noopener noreferrer" aria-label="Instagram IBPP">
                                <Image
                                    src="/images/Instagram.svg"
                                    alt="Logo de IBPP"
                                    width={40}
                                    height={40}
                                    className="hover:scale-110 transition-transform"
                                />
                            </a>
                            <a href="https://www.youtube.com/@principedepazmty.1653" className="p-3 rounded-full bg-white/10 hover:bg-red-600 transition-colors shadow-lg" target="_blank" rel="noopener noreferrer" aria-label="YouTube IBPP">
                                <Image
                                    src="/images/Youtube.svg"
                                    alt="Logo de IBPP"
                                    width={45}
                                    height={45}
                                    className="hover:scale-110 transition-transform"
                                />   
                            </a>      
                        </div>
                    </div>
                    

                    {/* Secciones */}
                    <div className="flex flex-col divide-y divide-white">
                        {sections.map((section,idx) => (
                            <div key={section.title}>
                                <div className="flex justify-between items-center py-4">
                                    <Link href={section.link} className="text-white font-bold hover:underline pl-5">
                                        {section.title}
                                    </Link>
                                    <button
                                        onClick={() => setOpen(open === idx ? null : idx)}
                                        className="focus:outline-none"
                                        aria-label="Desplegar"
                                    >
                                        <Image
                                            src="/images/arrow-down.svg"
                                            alt="Logo de IBPP"
                                            width={45}
                                            height={45}
                                            className={open === idx ? "rotate-180 transition-transform" : "transition-transform"}
                                        />
                                    </button>
                                </div>
                                {open === idx && (
                                    <div className="py-2 pl-4 flex flex-col gap-2">
                                        {section.links.map(link => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className="text-white hover:underline"
                                            >
                                                {link.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))} 
                    </div>
                </div>


                {/* Responsivo en Desktop */}
                
                <div className="hidden lg:grid grid-cols-6 gap-4 p-8">
                    <div className="col-span-1 p-5">
                        <div className="flex justify-center items-center">
                                <button onClick={scrollToTop} className="bg-transparent border-none p-0 m-0 cursor-pointer">
                                    <Image
                                        src="/images/IBPP_Logo_Blanco.svg"
                                        alt="Logo de IBPP"
                                        width={150}
                                        height={100}
                                    />
                                </button>
                        </div>
                        

                        {/* Redes Sociales */}
                        <div className="flex justify-start items-center gap-5 pt-5">
                            
                            <a href="https://www.facebook.com/IBPPMty" className="p-3  rounded-full bg-white/10 hover:bg-blue-600 transition-colors shadow-lg" target="_blank" rel="noopener noreferrer" aria-label="Facebook IBPP">
                                <Image
                                    src="/images/Facebook.svg"
                                    alt="Logo de IBPP"
                                    width={50}
                                    height={50}
                                    className="hover:scale-110 transition-transform"
                                />
                            </a>
                            <a href="https://www.instagram.com/ibppmty/" className="p-3 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 transition-colors shadow-lg" target="_blank" rel="noopener noreferrer" aria-label="Instagram IBPP">
                                <Image
                                    src="/images/Instagram.svg"
                                    alt="Logo de IBPP"
                                    width={50}
                                    height={50}
                                    className="hover:scale-110 transition-transform"
                                />
                            </a>
                            <a href="https://www.youtube.com/@principedepazmty.1653" className="p-3 rounded-full bg-white/10 hover:bg-red-600 transition-colors shadow-lg" target="_blank" rel="noopener noreferrer" aria-label="YouTube IBPP">
                                <Image
                                    src="/images/Youtube.svg"
                                    alt="Logo de IBPP"
                                    width={55}
                                    height={55}
                                    className="hover:scale-110 transition-transform"
                                />   
                            </a>      
                        </div>
                        <div className="text-white text-center font-semibold pt-5">
                            <p>© Copyright IBPP 2025</p>
                        </div>

                    </div>

                    {/* Seccion de MIRAR */}
                    <div className="col-span-1 p-5">
                        <Link href={sections[0].link} className="font-semibold text-xl hover:text-amber-200 transition-colors">
                            {sections[0].title}
                        </Link>
                        <ul >
                            {sections[0].links.map(link => (
                                <li key={link.href} className="hover:text-amber-300">
                                    <Link href={link.href}>
                                        {link.name}
                                    </Link>
                                </li>
                                
                            ))}
                        </ul>
                        
                        
                        {/* Seccion de VISITANOS */}
                        <div className="pt-15">
                            <Link href={sections[1].link} className="font-semibold text-xl hover:text-amber-200 transition-colors">
                                {sections[1].title}
                            </Link>

                            <ul>
                                {sections[1].links.map((link) => (
                                    <li key={link.href} className="hover:text-amber-300">
                                        <Link href={link.href}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))} 
                            </ul>
                        </div>

                    </div>

                    

                     {/* Seccion de CONECTA */}
                    <div className="col-span-1 p-5">
                        <Link href={sections[2].link} className="font-semibold text-xl hover:text-amber-200 transition-colors">
                            {sections[2].title}
                        </Link>

                        <ul>
                            {sections[2].links.map((link) => (
                                <li key={link.href} className="hover:text-amber-300">
                                    <Link href={link.href}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                    </div>

                     {/* Seccion de CRECE */}
                    <div className="col-span-1 p-5">
                        <Link href={sections[3].link} className="font-semibold text-xl hover:text-amber-200 transition-colors">
                            {sections[3].title}
                        </Link>

                        <ul>
                            {sections[3].links.map((link) => (
                                <li key={link.href} className="hover:text-amber-300">
                                    <Link href={link.href}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                    </div>

                     {/* Seccion de SOBRE IBPP */}
                    <div className="col-span-1 p-5">
                        <Link href={sections[4].link} className="font-semibold text-xl hover:text-amber-200 transition-colors">
                            {sections[4].title}
                        </Link>

                        <ul>
                            {sections[4].links.map((link) => (
                                <li key={link.href} className="hover:text-amber-300">
                                    <Link href={link.href}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                     {/* Seccion de SUSCRIBETE */}
                    <div className="col-span-1 p-5 font-semibold text-2xl text-white" >
                        
                        <h1>Suscribete para hacerte llegarte las ultimas novedades</h1>

                        <div className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Yourmail@gmail.com"
                                className="py-3 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 border-2"
                            />

                            <button className="bg-orange-300 hover:bg-orange-400 text-black font-semibold py-3 px-6 rounded-lg transition-colors flex text-center justify-center items-center">
                                SUSCRIBETE
                            </button>
                            

                        </div>

                    </div>

                </div>

                <div className="text-white text-center font-semibold pt-5 lg:hidden">
                    <p>© Copyright IBPP 2025</p>
                </div>           
               
            </div>
        </footer>
    );
}