
import Image from "next/image";

export default function Ninos() {
    return(
        <main>
            <div className="relative">
                <Image
                    src="/images/ESCUELITAS 2 IBPP.svg"
                    alt="Niños Imagen de Fondo"
                    width={100}
                    height={100}
                    className="w-full"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="text-white text-5xl lg:text-8xl font-extrabold">Niños</h1>
                </div>
            </div>

            <div className="text-center text-3xl pt-20 pb-20">
                
                <div className="space-y-20 px-10 lg:px-20 pt-10">
                    
                    {/* Fila 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center lg:pr-20 lg:pl-20">  
                        <div className="md:order-2 flex flex-col justify-center items-center text-center bg-[#FFF5EB] border-[#FFD0A0] border-b-10 rounded-2xl p-20 ">
                            <h3 className="font-bold uppercase">Trinidad</h3>
                            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Numquam distinctio natus ea impedit eum tempore, corrupti dolore,
                            nemo minus, sunt nesciunt asperiores atque quam voluptatibus aspernatur quasi adipisci quae illum.</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <Image
                                src="/images/TEMA DEL AÑO IBPP.svg"
                                alt="Descripción"
                                width={288}
                                height={288}
                                className="rounded object-cover w-85 h-85 md:w-81 md:h-81 lg:w-117 lg:h-117 shadow-[-26px_-23px_0px_-3px_#FFD0A0]"
                            />
                        </div>
                    </div>
    
                    {/* Fila 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center lg:pr-20 lg:pl-20">
                        <div className="text-center bg-[#FFF5EB] border-[#FFD0A0] border-b-10 rounded-2xl p-20">
                            <h3 className="font-bold uppercase">Salvacion</h3>
                            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Numquam distinctio natus ea impedit eum tempore, corrupti dolore,
                            nemo minus, sunt nesciunt asperiores atque quam voluptatibus aspernatur quasi adipisci quae illum.</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <Image
                                src="/images/TEMA DEL AÑO IBPP.svg"
                                alt="Descripción"
                                width={288}
                                height={288}
                                className="rounded object-cover w-85 h-85 md:w-81 md:h-81 lg:w-117 lg:h-117 shadow-[-26px_-23px_0px_-3px_#FFD0A0]"
                            />
                        </div>
                        
                    </div>
                </div>
            
            </div>
        
        </main>
    );
}