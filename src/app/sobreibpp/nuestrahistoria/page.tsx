
import Image from "next/image";

export default function Nuestrahistoria() {
    return(
        <main>
            <div className="relative">
                <Image
                    src="/images/IBPP FONDO.svg"
                    alt="Imagen de IBPP de fondo"
                    width={10}
                    height={10}
                    className="w-full"
                />
                <div className="absolute inset-0 flex justify-center items-start pt-20">
                    <h1 className="text-white text-2xl md:text-5xl lg:text-6xl font-extrabold">Historia</h1>
                </div>
            </div>

            {/* Importancia de Dar */}
            <div className="bg-[#F5F5F5] flex items-center justify-center py-10 lg:pl-50">
                <div className="bg-white rounded shadow max-w-5xl w-full flex flex-col md:flex-row-reverse p-6 md:p-10 gap-8">
                    {/* Imagen */}
                    <div className="flex-shrink-0 w-full md:w-1/2 flex items-center justify-center">
                    <Image
                        src="/images/PRIMER LOGO IBPP.svg"
                        alt="Primer logo de la iglesia"
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
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase">El primer logo de IBPP</h2>
                    <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Un enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                    </p>
                    </div>
                </div>
            </div>

            <div className="bg-[#F5F5F5] flex items-center justify-center py-10 lg:pr-50">
                <div className="bg-white rounded shadow max-w-5xl w-full flex flex-col md:flex-row p-6 md:p-10 gap-8">
                    {/* Imagen */}
                    <div className="flex-shrink-0 w-full md:w-1/2 flex items-center justify-center">
                    <Image
                        src="/images/IGLESIA COMIENZOS.svg"
                        alt="Imagen de los comienzos de la iglesia"
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
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase">Los comienzos de la iglesia</h2>
                    <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Un enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                    </p>
                    </div>
                </div>
            </div>

            <div className="bg-[#F5F5F5] flex items-center justify-center py-10 lg:pl-50">
                <div className="bg-white rounded shadow max-w-5xl w-full flex flex-col md:flex-row-reverse p-6 md:p-10 gap-8">
                    {/* Imagen */}
                    <div className="flex-shrink-0 w-full md:w-1/2 flex items-center justify-center">
                    <Image
                        src="/images/IGLESIA ACTUALIDAD.svg"
                        alt="Imagen de la iglesia actualmente"
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
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase">La iglesia en la actualidad</h2>
                    <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Un enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                    </p>
                    </div>
                </div>
            </div>
            
        </main>
    );
}