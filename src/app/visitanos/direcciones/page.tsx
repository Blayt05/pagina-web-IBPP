
import Image from "next/image";

export default function Visitanos() {
    return(
        <main>
            <div className="relative">
                <Image
                    src="/images/contactoImage.svg"
                    alt="Imagen de Contacto"
                    width={100}
                    height={100}
                    className="w-full"
                />

                <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="text-white text-2xl md:text-5xl lg:text-6xl text-center">Obten las Direcciones</h1>
                </div>
            </div>

            


        </main>
    );
}