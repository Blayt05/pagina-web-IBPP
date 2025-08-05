import Image from "next/image";

export default function PaginaSobreIBPP() {
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
                    <h1 className="text-white text-5xl lg:text-8xl font-extrabold">Sobre IBPP</h1>
                </div>
            </div>

            <div>
                <div className="flex justify-center items-center">
                    <h1 className=" text-center text-2xl bg-amber-200 p-3 m-3 rounded-2xl ">
                        Conoce mas sobre la iglesia
                    </h1>
                </div>
        

                

                <div className="lg:hidden carousel carousel-vertical rounded-box h-145">
                    <a href="/sobreibpp/nuestrahistoria">
                        <div className="carousel-item flex-col p-5 transition-transform duration-300 hover:scale-105" data-aos="fade-right" data-aos-duration="2000">
                                <Image
                                    src="/images/LOGOIBPPC.svg"
                                    alt="=Logo de IBPP"
                                    width={800}
                                    height={500}
                                />

                                <h2 className="font-semibold text-xl text-center pt-10"> Nuestra Historia </h2>
                        </div>
                    </a>
        
        
                    <a href="/contactanos">
                        <div className="carousel-item flex-col p-5 transition-transform duration-300 hover:scale-105" data-aos="fade-right" data-aos-duration="2000">
                                <Image
                                    src="/images/Contactanos.svg"
                                    alt="=Logo de IBPP"
                                    width={800}
                                    height={500}
                                />
                                <h2 className="font-semibold text-xl text-center pt-10"> Contactanos </h2>
                        </div>
                    </a>

                    <a href="/sobreibpp/politicasdeprivacidad">
                        <div className="carousel-item flex-col p-5 transition-transform duration-300 hover:scale-105" data-aos="fade-right" data-aos-duration="2000">
                                <Image
                                    src="/images/Politicas.svg"
                                    alt="=Logo de IBPP"
                                    width={800}
                                    height={500}
                                />
                                <h2 className="font-semibold text-xl text-center pt-10"> Politicas de Privacidad </h2>
                        </div>
                    </a>

                    <a href="/sobreibpp/terminosdeuso">
                        <div className="carousel-item flex-col p-5 transition-transform duration-300 hover:scale-110" data-aos="fade-right" data-aos-duration="2000">
                                <Image
                                    src="/images/Terminos.svg"
                                    alt="=Logo de IBPP"
                                    width={800}
                                    height={500}
                                />
                                <h2 className="font-semibold text-xl text-center pt-10"> Terminos de Uso </h2>
                        </div>
                    </a>
        
                    
                </div>
        
                {/* Desktop */}
        
                <div className="hidden lg:flex justify-center items-center pb-10 " data-aos="fade-right" data-aos-duration="2000">

                    <a href="/sobreibpp/nuestrahistoria">
                        <div className=" p-5 transition-transform duration-300 hover:scale-105">
                            <Image
                                src="/images/LOGOIBPPC.svg"
                                alt="=Logo de IBPP"
                                width={400}
                                height={500}
                                className="rounded-4xl"
                            />
                            <h2 className="font-semibold text-xl text-center pt-10">Nuestra Historia</h2>
                        </div>
                    </a>

                    <a href="/contactanos">
                            <div className="  p-5 transition-transform duration-300 hover:scale-105">
                            <Image
                                src="/images/Contactanos.svg"
                                alt="=Logo de IBPP"
                                width={400}
                                height={500}
                                className="rounded-4xl"
                            />
                                <h2 className="font-semibold text-xl text-center pt-10">Contactanos</h2>
                        </div>
                    </a>

                    <a href="/sobreibpp/politicasdeprivacidad">
                            <div className="  p-5 transition-transform duration-300 hover:scale-105">
                            <Image
                                src="/images/Politicas.svg"
                                alt="=Logo de IBPP"
                                width={400}
                                height={500}
                                className="rounded-4xl"
                            />
                                <h2 className="font-semibold text-xl text-center pt-10">Politicas de Privacidad</h2>
                        </div>
                    </a>
                    
                    <a href="/sobreibpp/terminosdeuso">
                        <div className="  p-5 transition-transform duration-300 hover:scale-105">
                            <Image
                            src="/images/Terminos.svg"
                            alt="=Logo de IBPP"
                            width={400}
                            height={500}
                            className="rounded-4xl"
                            />
                            <h2 className="font-semibold text-xl text-center pt-10">Terminos de Uso</h2>
                        </div>
                    </a>
                    
                </div>
            </div>
        
        </main>
    );
}