"use client"
import Image from "next/image";
import "flowbite"; // importante para los data-carousel

export default function Clasesyeventos() {
    return (
        <main>
            
            <div className="relative">
                <Image
                    src="/images/FondoClases.svg"
                    alt="Niños Imagen de Fondo"
                    width={100}
                    height={100}
                    className="w-full"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="text-white text-5xl lg:text-8xl font-extrabold">Clases y Eventos</h1>
                </div>
            </div>

            {/* Cambia h-40 y md:h-60 para ajustar la altura del carousel */}
            <div id="default-carousel" className="relative w-full mx-auto" data-carousel="slide">
                <div className="relative h-200 overflow-hidden rounded-lg md:h-200">
                    {/* Cambia width y height de cada imagen para ajustar su tamaño */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <Image src="/images/EventoEscuelitas2025.svg"
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="..." width={950} height={200} />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <Image src="/images/EventoGraduados2025.svg"
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="..." width={350} height={200} />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <Image src="/images/Fondo IBPP 2.svg"
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="..." width={350} height={200} />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <Image src="/images/Fondo IBPP 2.svg"
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="..." width={350} height={200} />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <Image src="/images/Fondo IBPP 2.svg"
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="..." width={350} height={200} />
                    </div>
                </div>
                {/* Slider indicators */}
                <div className="absolute z-30 flex -translate-x-1/2 bottom-2 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" className="w-3 h-3 rounded-full bg-white" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full bg-white/50" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full bg-white/50" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" className="w-3 h-3 rounded-full bg-white/50" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    <button type="button" className="w-3 h-3 rounded-full bg-white/50" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                </div>
                {/* Slider controls */}
                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-2 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-2 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-black rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-2 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-2 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-black rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </main>
    );
}