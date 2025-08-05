import Image from "next/image";

export default function PaginaCrece() {
    return(
        <main>
            <div className="relative">
                <Image
                    src="/images/SobreNosotrosImage.svg"
                    alt="Niños Imagen de Fondo"
                    width={100}
                    height={100}
                    className="w-full"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="text-white text-5xl lg:text-8xl font-extrabold">Crece</h1>
                </div>
            </div>

            <div>
                <div className="flex justify-center items-center">
                    <h1 className=" text-center text-2xl bg-amber-200 p-3 m-3 rounded-2xl ">
                        Unetenos a nuestras actividades grupales
                    </h1>
                </div>
        

                

                <div className="lg:hidden carousel carousel-vertical rounded-box h-145">
                    <a href="/crece/sobrelosninos">
                        <div className="carousel-item flex-col p-5 transition-transform duration-300 hover:scale-105" data-aos="fade-right" data-aos-duration="2000">
                                <Image
                                    src="/images/Ninos.svg"
                                    alt="=Logo de IBPP"
                                    width={800}
                                    height={500}
                                />
                                <h2 className="font-semibold text-xl text-center pt-10"> Sobre los niños </h2>
                        </div>
                    </a>
        
        
                    <a href="/crece/femenil">
                        <div className="carousel-item flex-col p-5 transition-transform duration-300 hover:scale-105" data-aos="fade-right" data-aos-duration="2000">
                                <Image
                                    src="/images/Femenil.svg"
                                    alt="=Logo de IBPP"
                                    width={800}
                                    height={500}
                                />
                                <h2 className="font-semibold text-xl text-center pt-10"> Femenil </h2>
                        </div>
                    </a>

                    <a href="/crece/varonil">
                        <div className="carousel-item flex-col p-5 transition-transform duration-300 hover:scale-105" data-aos="fade-right" data-aos-duration="2000">
                                <Image
                                    src="/images/Varonil.svg"
                                    alt="=Logo de IBPP"
                                    width={800}
                                    height={500}
                                />
                                <h2 className="font-semibold text-xl text-center pt-10"> Varonil </h2>
                        </div>
                    </a>

                    <a href="/crece/jovenes">
                        <div className="carousel-item flex-col p-5 transition-transform duration-300 hover:scale-105" data-aos="fade-right" data-aos-duration="2000">
                                <Image
                                    src="/images/Jovenes.svg"
                                    alt="=Logo de IBPP"
                                    width={800}
                                    height={500}
                                />
                                <h2 className="font-semibold text-xl text-center pt-10"> Jovenes </h2>
                        </div>
                    </a>

                    <a href="/crece/clasesyeventos">
                        <div className="carousel-item flex-col p-5 transition-transform duration-300 hover:scale-105" data-aos="fade-right" data-aos-duration="2000">
                                <Image
                                    src="/images/Clases.svg"
                                    alt="=Logo de IBPP"
                                    width={800}
                                    height={500}
                                />
                                <h2 className="font-semibold text-xl text-center pt-10"> Clases y Eventos </h2>
                        </div>
                    </a>
        
                </div>
        
                {/* Desktop */}
        
                <div className="hidden lg:flex justify-center items-center pb-10 " data-aos="fade-right" data-aos-duration="2000">

                    <a href="/crece/sobrelosninos">
                        <div className=" p-5 transition-transform duration-300 hover:scale-105">
                            <Image
                                src="/images/Ninos.svg"
                                alt="=Logo de IBPP"
                                width={400}
                                height={500}
                                className="rounded-4xl"
                            />
                                <h2 className="font-semibold text-xl text-center pt-10"> Sobre los niños </h2>
                        </div>
                    </a>
                    
                    <a href="/crece/femenil">
                        <div className="  p-5 transition-transform duration-300 hover:scale-105">
                            <Image
                                src="/images/Femenil.svg"
                                alt="=Logo de IBPP"
                                width={400}
                                height={500}
                                className="rounded-4xl"
                            />
                                <h2 className="font-semibold text-xl text-center pt-10"> Femenil  </h2>
                        </div>
                    </a>

                    <a href="/crece/varonil">
                        <div className="  p-5 transition-transform duration-300 hover:scale-105">
                            <Image
                                src="/images/Varonil.svg"
                                alt="=Logo de IBPP"
                                width={400}
                                height={500}
                                className="rounded-4xl"
                            />
                                <h2 className="font-semibold text-xl text-center pt-10"> Varonil </h2>
                        </div>
                    </a>

                    <a href="/crece/jovenes">
                        <div className=" p-5 transition-transform duration-300 hover:scale-105">
                            <Image
                                src="/images/Jovenes.svg"
                                alt="=Logo de IBPP"
                                width={400}
                                height={500}
                                className="rounded-4xl"
                            />
                                <h2 className="font-semibold text-xl text-center pt-10"> Jovenes </h2>
                        </div>
                    </a>

                    <a href="/crece/clasesyeventos">
                        <div className=" p-5 transition-transform duration-300 hover:scale-105">
                            <Image
                                src="/images/Clases.svg"
                                alt="=Logo de IBPP"
                                width={400}
                                height={500}
                                className="rounded-4xl"
                            />
                                <h2 className="font-semibold text-xl text-center pt-10"> Clases y Eventos </h2>
                        </div>
                    </a>
                    
                </div>
            </div>
        
        </main>
    );
}