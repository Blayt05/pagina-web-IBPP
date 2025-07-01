
import Image from "next/image";

export default function Donaciones() {
    return (
        <main className="">
            <div className="relative">
                <Image 
                    src="/images/TEMA DEL AÑO IBPP.svg"
                    alt="Imagen de donacion"
                    width={20}
                    height={20}
                    className="w-full"
                />
                <div className="absolute inset-0 flex justify-center items-center ">
                    <h1 className="text-6xl">Donaciones</h1>
                </div>
            </div>

            {/* Datos bancarios */}
            <div className="bg-[#D9D9D9] min-h-screen">
                <div className="bg-[#F5F5F5] text-center">
                    <h2 className=" pt-20 font-bold text-5xl ">Datos Bancarios</h2>
                    <p>EXAMPLEE </p>
                </div>

                {/* Importancia de Dar */}
                <div className="bg-[#F5F5F5] min-h-screen flex items-center justify-center py-10">
                    <div className="bg-white rounded shadow max-w-5xl w-full flex flex-col md:flex-row p-6 md:p-10 gap-8">
                        {/* Imagen */}
                        <div className="flex-shrink-0 w-full md:w-1/2 flex items-center justify-center">
                        <Image
                            src="/images/TEMA DEL AÑO IBPP.svg"
                            alt="Importancia del dar"
                            width={500}
                            height={300}
                            className="rounded w-full h-auto object-cover"
                        />
                        </div>
                        {/* Contenido */}
                        <div className="flex flex-col justify-center w-full md:w-1/2">
                        <div className="flex justify-between text-xs text-gray-500 mb-2">
                            <span>TUESDAY 13 MAY, 2022</span>
                            <span>BY JOHN HUNAU DEO</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase">La importancia del dar</h2>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Un enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </main>
    );
}