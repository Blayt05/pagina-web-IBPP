import Image from "next/image";

export default function PaginaConecta() {
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
                    <h1 className="text-white text-5xl lg:text-8xl font-extrabold">Conecta</h1>
                </div>
            </div>

            <div>
                <div className="flex justify-center items-center">
                    <h1 className=" text-center text-2xl bg-amber-200 p-3 m-3 rounded-2xl ">
                        Sigamos creciendo y ayudando a los que nos rodean
                    </h1>
                </div>
        

                

                <div className="lg:hidden carousel carousel-vertical rounded-box h-145 carousel-item flex-col ">
        
                    <a href="/conecta/donaciones">
                        <div className="carousel-item flex-col p-5" data-aos="fade-right" data-aos-duration="2000">
                                <Image
                                    src="/images/Donar.svg"
                                    alt="=Logo de IBPP"
                                    width={800}
                                    height={500}
                                />
                                <h2 className="font-semibold text-xl text-center pt-10"> Donar </h2>
                        </div>
                    </a>
        
                    
                </div>
        
                {/* Desktop */}
        
                <div className="hidden lg:flex justify-center items-center pb-10carousel-item transition-transform duration-300 hover:scale-110 " data-aos="fade-right" data-aos-duration="2000">
                    
                    <a href="/conecta/donaciones">
                        <div className=" p-5">
                            <Image
                            src="/images/Donar.svg"
                            alt="=Logo de IBPP"
                            width={400}
                            height={500}
                            className="border-amber-400 border-2 rounded-4xl "
                            />
                            <h2 className="font-semibold text-xl text-center pt-10">Donar</h2>
                        </div>
                    </a>
                    
                </div>
            </div>
        
        </main>
    );
}