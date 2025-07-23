import Image from "next/image"


export default function SobreNosotros() {
    return (
        <main id="sobre-nosotros">
            <div className="relative">
                <Image
                    src="/images/SobreNosotrosImage.svg"
                    alt="Imagen de Sobre Nosotros"
                    width={100}
                    height={100}
                    className="w-full "
                />
                <div className="absolute inset-0 flex justify-center items-center ">
                    <h1 className="font-extrabold text-2xl text-center">Al servicio del mundo que <br/>nos rodea</h1>
                </div>
            </div>

            {/* Seccion de Amor y Compasion */}
            <div className="text-center text-3xl pt-20 pb-20">
                <h1 className="font-semibold">Amor y Compasion</h1>
                <p className="p-10 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quidem aliquid repellat debitis, neque delectus iure eius inventore exercitationem. 
                    Quae earum asperiores libero officia non eius unde odit quidem atque sunt!
                </p>
                
                <div className=" carousel w-full lg:hidden ">
                    <div id="slide1" className="carousel-item relative w-full flex flex-col items-center">
                    <Image
                        src="/images/Pastor IBPP 1.svg"
                        alt="Imagen de Pastor"
                        width={500}
                        height={500}
                        className="rounded-4xl pb-3"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    </div>
                    
                    <div id="slide2" className="carousel-item relative w-full flex flex-col items-center">
                    <Image
                        src="/images/Chicas Orando IBPP 2.svg"
                        alt="Imagen de Chicas IBPP"
                        width={500}
                        height={500}
                        className="rounded-4xl pb-3"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full flex flex-col items-center">
                    <Image
                        src="/images/Hermanos Orando IBPP 1.svg"
                        alt="Imagen de Chicas IBPP"
                        width={500}
                        height={500}
                        className="rounded-4xl pb-3"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                    </div>
                    
                </div>
                
                {/* Diseño en Desktop */}
                <div className="hidden lg:flex justify-center lg:gap-10 ">
                    
                    <div className="rounded-4xl ">
                        <Image
                            src="/images/Chicas Orando IBPP 2.svg"
                            alt="Imagen de Chicas IBPP"
                            width={400}
                            height={400}
                            className=" rounded-4xl pb-3 pl-3  "
                        />
                    </div>
                    
                    <div className=" pt-20 ">
                        <Image
                            src="/images/Pastor IBPP 1.svg"
                            alt="Imagen de Pastor"
                            width={500}
                            height={400}
                            className=" rounded-4xl"
                        />
                    </div>
                    
                    <div className="">
                        <Image
                            src="/images/Hermanos Orando IBPP 1.svg"
                            alt="Imagen de Chicas IBPP"
                            width={400}
                            height={400}
                            className="rounded-4xl pb-3 pr-2"
                        />
                    </div> 
                </div>
            </div>
            
            {/* Seccion de Mision, Vision y Que hacemos */}
            <div className="lg:flex gap-5 ">
                <div className="pb-15 text-center p-10 pt-1">
                    <div className="bg-[#FFF5EB] border-[#FFD0A0] border-b-10 rounded-2xl ">
                        <div className="flex justify-center pt-5">
                        <Image
                            src="/images/Conexion Icon.svg"
                            alt=" Icono de Aportar"
                            width={70}
                            height={30}
                        />
                        </div>
                        
                        <p className="uppercase font-semibold">Nuestra Mision y Vision</p>
                        <h2 className="font-semibold text-2xl pt-3">Por un mañana mejor</h2> 
                        <p className="text-xl text-center p-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Officiis eius accusantium quos ducimus suscipit vel laudantium
                        magnam explicabo exercitationem, neque dolores maiores totam corrupti
                        enim quaerat tempora. Magni, incidunt sint.
                        </p> 
                    </div>
                </div>

                <div className="pb-15 text-center p-10 pt-1">
                    <div className="bg-[#FFF5EB] border-[#FFD0A0] border-b-10 rounded-2xl">
                        <div className="flex justify-center pt-5">
                        <Image
                            src="/images/Conexion Icon.svg"
                            alt=" Icono de Aportar"
                            width={70}
                            height={30}
                        />
                        </div>

                        <p className="uppercase font-semibold">Que hacemos?</p>
                        <h2 className="font-semibold text-2xl pt-3">Compartir del amor que dios nos da</h2> 
                        <p className="text-xl text-center p-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Officiis eius accusantium quos ducimus suscipit vel laudantium
                        magnam explicabo exercitationem, neque dolores maiores totam corrupti
                        enim quaerat tempora. Magni, incidunt sint.
                        </p> 
                    </div>
                </div>
            </div>

            {/* Lo que Creemos */}
            <h2 className="text-center text-3xl font-bold pt-20">Lo que creemos</h2> 
            <div className="space-y-20 px-10 lg:px-20 pt-10">
                {/* Fila 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center lg:pr-20 lg:pl-20">
                    <div className="text-center">
                        <h3 className="font-bold uppercase">Biblia</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Numquam distinctio natus ea impedit eum tempore, corrupti dolore,
                        nemo minus, sunt nesciunt asperiores atque quam voluptatibus aspernatur quasi adipisci quae illum.</p>
                    </div>
                    <div>
                        <Image
                            src="/images/TEMA DEL AÑO IBPP.svg"
                            alt="Tema del año"
                            width={2000}
                            height={10}
                        />
                    </div>
                </div>

                {/* Fila 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center lg:pr-20 lg:pl-20">  
                    <div className="md:order-2 flex flex-col justify-center items-center text-center">
                        <h3 className="font-bold uppercase">Trinidad</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Numquam distinctio natus ea impedit eum tempore, corrupti dolore,
                        nemo minus, sunt nesciunt asperiores atque quam voluptatibus aspernatur quasi adipisci quae illum.</p>
                    </div>
                    <div className="md:order-1">
                        <Image
                            src="/images/TEMA DEL AÑO IBPP.svg"
                            alt="Tema del año"
                            width={2000}
                            height={10}
                        />
                    </div>
                </div>


                {/* Fila 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center lg:pr-20 lg:pl-20">
                    <div className="text-center">
                        <h3 className="font-bold uppercase">Salvacion</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Numquam distinctio natus ea impedit eum tempore, corrupti dolore,
                        nemo minus, sunt nesciunt asperiores atque quam voluptatibus aspernatur quasi adipisci quae illum.</p>
                    </div>
                    <div>
                        <Image
                            src="/images/TEMA DEL AÑO IBPP.svg"
                            alt="Tema del año"
                            width={2000}
                            height={10}
                        />
                    </div>
                </div>

                {/* Fila 4 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center lg:pr-20 lg:pl-20">  
                    <div className="md:order-2 flex flex-col justify-center items-center text-center">
                        <h3 className="font-bold uppercase">Relacion con Dios</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Numquam distinctio natus ea impedit eum tempore, corrupti dolore,
                        nemo minus, sunt nesciunt asperiores atque quam voluptatibus aspernatur quasi adipisci quae illum.</p>
                    </div>
                    <div className="md:order-1">
                        <Image
                            src="/images/TEMA DEL AÑO IBPP.svg"
                            alt="Tema del año"
                            width={2000}
                            height={10}
                        />
                    </div>
                </div>
            </div>

            {/* Conoce a nuestro Equipo Inspiracional */}
            <div className="pt-30 pb-20">
                <h2 className=" text-2xl text-center font-bold pb-10">Conoce a nuestro Equipo Inspiracional</h2>

                <div className="flex flex-col justify-center items-center gap-10 md:flex-row">
                    {/* Primer Fila */}
                    <div className="bg-amber-50 flex flex-col justify-center items-center pb-5 pt-5 rounded-4xl">
                        <Image
                            src="images/Pastor IBPP 1.svg"
                            alt="Imagen del Pastor"
                            width={100}
                            height={1000}
                            className="rounded-full"
                        />
                        <h2 className="pt-10">DANIELLE WATKINS</h2>
                        <p>Pastor de la iglesia</p>
                        {/* Redes Sociales */}
                        <div className="flex justify-center items-center gap-3 pt-5 pr-5 pl-5">
                            
                            <a className="p-3">
                                <Image
                                    src="/images/Facebook.svg"
                                    alt="Logo de IBPP"
                                    width={40}
                                    height={40}
                                />
                            </a>
                            <a className="p-3">
                                <Image
                                    src="/images/Instagram.svg"
                                    alt="Logo de IBPP"
                                    width={40}
                                    height={40}
                                />
                            </a>
                            <a className="p-3">
                                <Image
                                    src="/images/Youtube.svg"
                                    alt="Logo de IBPP"
                                    width={45}
                                    height={45}
                                />   
                            </a>      
                        </div>
                    </div>

                    <div className="bg-amber-50 flex flex-col justify-center items-center pb-5 pt-5 rounded-4xl">
                        <Image
                            src="images/Pastor IBPP 1.svg"
                            alt="Imagen del Pastor"
                            width={100}
                            height={1000}
                            className="rounded-full"
                        />
                        <h2 className="pt-10">DANIELLE WATKINS</h2>
                        <p>Pastor de la iglesia</p>
                        {/* Redes Sociales */}
                        <div className="flex justify-center items-center gap-3 pt-5 pr-5 pl-5">
                            
                            <a className="p-3">
                                <Image
                                    src="/images/Facebook.svg"
                                    alt="Logo de IBPP"
                                    width={40}
                                    height={40}
                                />
                            </a>
                            <a className="p-3">
                                <Image
                                    src="/images/Instagram.svg"
                                    alt="Logo de IBPP"
                                    width={40}
                                    height={40}
                                />
                            </a>
                            <a className="p-3">
                                <Image
                                    src="/images/Youtube.svg"
                                    alt="Logo de IBPP"
                                    width={45}
                                    height={45}
                                />   
                            </a>      
                        </div>
                    </div>                    
                </div>
                
                {/* Segunda Fila */}
                <div className="flex flex-col justify-center items-center gap-10 md:flex-row pt-10">
                    
                    <div className="bg-amber-50 flex flex-col justify-center items-center pb-5 pt-5 rounded-4xl">
                        <Image
                            src="images/Pastor IBPP 1.svg"
                            alt="Imagen del Pastor"
                            width={100}
                            height={1000}
                            className="rounded-full"
                        />
                        <h2 className="pt-10">DANIELLE WATKINS</h2>
                        <p>Pastor de la iglesia</p>
                        {/* Redes Sociales */}
                        <div className="flex justify-center items-center gap-3 pt-5 pr-5 pl-5">
                            
                            <a className="p-3">
                                <Image
                                    src="/images/Facebook.svg"
                                    alt="Logo de IBPP"
                                    width={40}
                                    height={40}
                                />
                            </a>
                            <a className="p-3">
                                <Image
                                    src="/images/Instagram.svg"
                                    alt="Logo de IBPP"
                                    width={40}
                                    height={40}
                                />
                            </a>
                            <a className="p-3">
                                <Image
                                    src="/images/Youtube.svg"
                                    alt="Logo de IBPP"
                                    width={45}
                                    height={45}
                                />   
                            </a>      
                        </div>
                    </div>

                    <div className="bg-amber-50 flex flex-col justify-center items-center pb-5 pt-5 rounded-4xl">
                        <Image
                            src="images/Pastor IBPP 1.svg"
                            alt="Imagen del Pastor"
                            width={100}
                            height={1000}
                            className="rounded-full"
                        />
                        <h2 className="pt-10">DANIELLE WATKINS</h2>
                        <p>Pastor de la iglesia</p>
                        {/* Redes Sociales */}
                        <div className="flex justify-center items-center gap-3 pt-5 pr-5 pl-5">
                            
                            <a className="p-3">
                                <Image
                                    src="/images/Facebook.svg"
                                    alt="Logo de IBPP"
                                    width={40}
                                    height={40}
                                />
                            </a>
                            <a className="p-3">
                                <Image
                                    src="/images/Instagram.svg"
                                    alt="Logo de IBPP"
                                    width={40}
                                    height={40}
                                />
                            </a>
                            <a className="p-3">
                                <Image
                                    src="/images/Youtube.svg"
                                    alt="Logo de IBPP"
                                    width={45}
                                    height={45}
                                />   
                            </a>      
                        </div>
                    </div>

                    <div className="bg-amber-50 flex flex-col justify-center items-center pb-5 pt-5 rounded-4xl">
                        <Image
                            src="images/Pastor IBPP 1.svg"
                            alt="Imagen del Pastor"
                            width={100}
                            height={1000}
                            className="rounded-full"
                        />
                        <h2 className="pt-10">DANIELLE WATKINS</h2>
                        <p>Pastor de la iglesia</p>
                        {/* Redes Sociales */}
                        <div className="flex justify-center items-center gap-3 pt-5 pr-5 pl-5">
                            
                            <a className="p-3">
                                <Image
                                    src="/images/Facebook.svg"
                                    alt="Logo de IBPP"
                                    width={40}
                                    height={40}
                                />
                            </a>
                            <a className="p-3">
                                <Image
                                    src="/images/Instagram.svg"
                                    alt="Logo de IBPP"
                                    width={40}
                                    height={40}
                                />
                            </a>
                            <a className="p-3">
                                <Image
                                    src="/images/Youtube.svg"
                                    alt="Logo de IBPP"
                                    width={45}
                                    height={45}
                                />   
                            </a>      
                        </div>
                    </div>
                </div>
                
                {/* Tercer Fila */}
                <div className="flex flex-col justify-center items-center gap-10 md:flex-row pt-10">
                    <div className="bg-amber-50 flex flex-col justify-center items-center pb-5 pt-5 rounded-4xl">
                        <Image
                            src="images/Pastor IBPP 1.svg"
                            alt="Imagen del Pastor"
                            width={100}
                            height={1000}
                            className="rounded-full"
                        />
                        <h2 className="pt-10">DANIELLE WATKINS</h2>
                        <p>Pastor de la iglesia</p>
                        {/* Redes Sociales */}
                        <div className="flex justify-center items-center gap-3 pt-5 pr-5 pl-5">
                            
                            <a className="p-3">
                                <Image
                                    src="/images/Facebook.svg"
                                    alt="Logo de IBPP"
                                    width={40}
                                    height={40}
                                />
                            </a>
                            <a className="p-3">
                                <Image
                                    src="/images/Instagram.svg"
                                    alt="Logo de IBPP"
                                    width={40}
                                    height={40}
                                />
                            </a>
                            <a className="p-3">
                                <Image
                                    src="/images/Youtube.svg"
                                    alt="Logo de IBPP"
                                    width={45}
                                    height={45}
                                />   
                            </a>      
                        </div>
                    </div>

                    <div className="bg-amber-50 flex flex-col justify-center items-center pb-5 pt-5 rounded-4xl">
                        <Image
                            src="images/Pastor IBPP 1.svg"
                            alt="Imagen del Pastor"
                            width={100}
                            height={1000}
                            className="rounded-full"
                        />
                        <h2 className="pt-10">DANIELLE WATKINS</h2>
                        <p>Pastor de la iglesia</p>
                        {/* Redes Sociales */}
                        <div className="flex justify-center items-center gap-3 pt-5 pr-5 pl-5">
                            
                            <a className="p-3">
                                <Image
                                    src="/images/Facebook.svg"
                                    alt="Logo de IBPP"
                                    width={40}
                                    height={40}
                                />
                            </a>
                            <a className="p-3">
                                <Image
                                    src="/images/Instagram.svg"
                                    alt="Logo de IBPP"
                                    width={40}
                                    height={40}
                                />
                            </a>
                            <a className="p-3">
                                <Image
                                    src="/images/Youtube.svg"
                                    alt="Logo de IBPP"
                                    width={45}
                                    height={45}
                                />   
                            </a>      
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}
