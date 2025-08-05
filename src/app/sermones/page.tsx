"use client"
import Image from "next/image";

export default function Sermones() {

    // const slides = [
    //     {
    //       title: "Luz y verdad",
    //       text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, voluptatem aut! Beatae sit fugit rem necessitatibus.",
    //       author: "By Mathew Johnson",
    //       date: "Tuesday 13 May, 2021",
    //     },
    //     {
    //       title: "Camino vivo",
    //       text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, voluptatem aut! Beatae sit fugit rem necessitatibus.",
    //       author: "By Mathew Johnson",
    //       date: "Tuesday 13 May, 2021",
    //     },
    //     {
    //       title: "Firme en fe",
    //       text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, voluptatem aut! Beatae sit fugit rem necessitatibus.",
    //       author: "By Mathew Johnson",
    //       date: "Tuesday 13 May, 2021",
    //     },
    //     {
    //       title: "Roca eterna",
    //       text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, voluptatem aut! Beatae sit fugit rem necessitatibus.",
    //       author: "By Mathew Johnson",
    //       date: "Tuesday 13 May, 2021",
    //     },
    //   ];
    
    


    return (
        <main>
            <div className="relative" >
                <Image
                    src="/images/SermonesImage.svg"
                    alt="Sermones Imagen de fondo "
                    width={100}
                    height={100}
                    className="w-full"
                />

                <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="font-bold text-2xl md:text-6xl">Participa en nuestro Sermon</h1>
                </div>
            </div>

            <div className="p-5 " data-aos="fade-right" data-aos-duration="2000">
                <h1 className="text-center font-bold text-4xl p-10">Unetenos y se parte de algo mas grande</h1>
        
                <div className="lg:flex flex-row-reverse">
                <Image
                    src="/images/TEMA DEL AÑO IBPP.svg"
                    alt="Imagen del Tema del Año"
                    width={1000}
                    height={1000}
                    className="rounded-3xl"
                />
        
                <div className="p-3"></div>
                    <div className="bg-[#FFF5EB] border-[#FFD0A0] border-b-10 rounded-2xl p-5 lg:pt-20">
                    <div className=" lg:flex flex-col justify-center items-center ">
                        <p>Proximo Evento</p>
                        <h2 className="font-semibold pb-2">Mira y escucha nuestros sermones</h2>
                        <p className="lg:text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Sit porro error in optio possimus earum amet asperiores reprehenderit distinctio vel.
                        </p>
        
                        <div className="flex gap-3 pt-7 lg:flex-col">
                        <Image
                            src="/images/Clock icon.svg"
                            alt="Imagen del Tema del Año"
                            width={30}
                            height={30}
                        />
                        <p>Friday 23:39 IST Saturday 11:20 ISD</p>
        
                        <Image
                            src="/images/Ubication Icon.svg"
                            alt="Imagen del Tema del Año"
                            width={30}
                            height={30}
                        />
                        <p>No 233 Main St. New York, United States</p>
                        </div>  
                    </div>
                    </div>
                </div>
                <div className="flex justify-center items-center pt-5 lg:justify-end lg:pr-10">
                    <a>Mira todos los sermones</a>
                    <Image
                    src="images/arrow-forward.svg"
                    alt="Imagen de Flecha"
                    width={50}
                    height={50}
                    />
                </div>
            </div>

            {/* Eventos Proximos */}

            <div className="p-10 flex flex-col justify-center items-center" data-aos="fade-up" data-aos-duration="2000">
                <h2 className="text-center font-bold text-4xl pb-10">Mira todos los eventos que tenemos como Iglesia </h2>
                <a className=" bg-[#FFD0A0] hover:bg-[#FFC285] text-[#7C4700] font-bold py-3 px-5 rounded-full shadow-lg transition duration-200"
                    href="/crece/clasesyeventos"
                >
                    Ver eventos
                </a>
            </div>
        </main>
    );
}