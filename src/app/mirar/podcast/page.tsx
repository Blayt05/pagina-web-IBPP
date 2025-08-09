"use client"
import Image from "next/image"

export default function Podcast() {
    return(
        <main>
            <div className="relative">
                <Image
                    src="/images/SermonesImage.svg"
                    alt="Sermones Imagen de fondo "
                    width={100}
                    height={100}
                    className="w-full"
                />

                <div className="absolute inset-0 flex justify-center items-center gap-8">
                    <h1 className="font-bold text-2xl md:text-6xl">Escucha nuestro Podcast</h1>
                </div>
            </div>

            <div className="p-5 " >
                <h1 className="text-center font-bold text-4xl p-10"> Dios te quiere decir algo</h1>
        
                <div className="lg:flex flex-row-reverse justify-center items-center gap-3">
                    <Image
                        src="/images/Podcast IBPP.svg"
                        alt="Imagen del Tema del Año"
                        width={850}
                        height={750}
                        className="rounded-3xl w-full lg:w-1/2"
                    />
                    <div className="flex justify-center items-center w-full lg:w-1/2 " style={{ borderRadius: '12px', overflow: 'hidden', margin: '20px 0' }}>
                        <iframe
                            src="https://open.spotify.com/embed/show/5Vo0PbJk5WoRcQJhj1xzY7?utm_source=generator"
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allow="a5utoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

            </div>
            
        </main>
    );
}