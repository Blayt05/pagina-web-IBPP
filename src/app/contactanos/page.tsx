

import Image from "next/image";

export default function Contactanos() {
    return(
        <main>
            <div className="relative">
                <Image
                    src="images/contactoImage.svg"
                    alt="Imagen de Contacto"
                    width={100}
                    height={100}
                    className="w-full"
                />

                <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="text-white text-2xl md:text-5xl lg:text-6xl text-center">Pongase en contacto con nuestra iglesia</h1>
                </div>
            </div>
            
            <div className="flex flex-col justify-center items-center gap-10 md:flex-row md:gap-30 lg:gap-50">

                {/* Formulario de Contacto */}
                <form className=" p-6 bg-white rounded space-y-6">
                    <h2 className="font-bold text-2xl">Formulario de Contacto</h2>
                    <div>
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>  
                        <input
                            type="text"
                            id="text"
                            name="text"
                            placeholder="Escribe tu nombre completo"
                            className="mt-1 block w-full border border-gray-300 rounded p-2"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>  
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Escribe tu correo electronico"
                            className="mt-1 block w-full border border-gray-300 rounded p-2"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">Mensaje</label>  
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            placeholder="Que nos quieres compartir?"
                            rows={4}
                            className="mt-1 block w-full border border-gray-300 rounded p-2"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#FFD0A0] text-white py-2 px-4 rounded hover:bg-[#7d7e75] transition"
                    >
                        Enviar
                    </button>
                </form>

                {/* Direcciones */}
                <div className="flex flex-col pb-20">
                    <h2>Address</h2>
                    <p className="font-extrabold pb-5">Carlos Osuna 40, Nueva España,<br/> 
                    Alta Vista, 64840 Monterrey, N.L.</p>
                    <h2>Contact Details</h2>
                    <p className="underline font-extrabold ">81 8358 5945</p>
                    <p className="pb-5 font-extrabold">IBPP@EXAMPLE.COM</p>
                    {/* <h2>Find us here</h2> */}
                    {/* Google Maps */}
                </div>
            </div>
        </main>
    );
}