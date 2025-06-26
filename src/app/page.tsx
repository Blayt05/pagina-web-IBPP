import Image from "next/image";

export default function Home() {
  return (
    <main >

      {/* Imagen Inicial */}
      <div className="relative">
        <Image
          src="/images/Fondo IBPP 2.svg"
          alt="Fondo IBPP"
          width={1200}
          height={800}
          className="w-full"
        />

        <div className="absolute inset-0 flex flex-col justify-start items-end pr-8 pt-3">
          <div className="relative">
            <h1 className="text-white text-2xl font-semibold">
              Se parte de nuestra <br/> comunidad
            </h1>
          </div>

          <div className="absolute inset-0 flex flex-row justify-end items-start pt-10 pr-5 ">
            <button className="bg-amber-400 rounded-full p-1"> 
              Aprende Mas
            </button>
          </div> 
        </div>
      </div>


      {/* Iglesia con Vision */}
      <div className="text-center text-3xl pt-20 pb-20">
        <h1 className="font-semibold">Una iglesia con vision</h1>
        
        <div className="p-10">
          <div className="pb-15">
            <div className="bg-[#FFF5EB] border-[#FFD0A0] border-b-10 rounded-2xl">
              <div className="flex justify-center pt-5">
                <Image
                  src="/images/Sobre Nosotros Icon.svg"
                  alt=" Icono de Aportar"
                  width={70}
                  height={30}
                />
              </div>

              <h2 className="font-semibold text-2xl pt-3">Sobre Nosotros</h2> 
              <p className="text-xl text-center p-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officiis eius accusantium quos ducimus suscipit vel laudantium
                magnam explicabo exercitationem, neque dolores maiores totam corrupti
                enim quaerat tempora. Magni, incidunt sint.
              </p> 
            </div>
          </div>

          <div className="pb-15">
            <div className="bg-[#FFF5EB] border-[#FFD0A0] border-b-10 rounded-2xl">
              <div className="flex justify-center pt-5">
                <Image
                  src="/images/Conexion Icon.svg"
                  alt=" Icono de Aportar"
                  width={70}
                  height={30}
                />
              </div>

              <h2 className="font-semibold text-2xl pt-3">Participa</h2> 
              <p className="text-xl text-center p-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officiis eius accusantium quos ducimus suscipit vel laudantium
                magnam explicabo exercitationem, neque dolores maiores totam corrupti
                enim quaerat tempora. Magni, incidunt sint.
              </p> 
            </div>
          </div>

          <div className="pb-15">
            <div className="bg-[#FFF5EB] border-[#FFD0A0] border-b-10 rounded-2xl">
              <div className="flex justify-center pt-5">
                <Image
                  src="/images/Corazon Icon.svg"
                  alt=" Icono de Aportar"
                  width={70}
                  height={30}
                />
              </div>
                
              <h2 className="font-semibold text-2xl pt-3">Aporta</h2> 
              <p className="text-xl text-center p-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officiis eius accusantium quos ducimus suscipit vel laudantium
                magnam explicabo exercitationem, neque dolores maiores totam corrupti
                enim quaerat tempora. Magni, incidunt sint.
              </p> 
            </div>
          </div>
        </div>
  
      </div>

      {/* Seccion Amor y Compasion */}
      <div className="text-center text-3xl pt-20 pb-20">
        <h1 className="font-semibold">Amor y Compasion</h1>
        <p className="p-10 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quidem aliquid repellat debitis, neque delectus iure eius inventore exercitationem. 
          Quae earum asperiores libero officia non eius unde odit quidem atque sunt!
        </p>
        
        <div className="p-5">
          <Image
            src="/images/Pastor IBPP 1.svg"
            alt="Imagen de Pastor"
            width={500}
            height={500}
            className="rounded-4xl pb-3"
          />

          <Image
            src="/images/Chicas Orando IBPP 2.svg"
            alt="Imagen de Chicas IBPP"
            width={500}
            height={500}
            className="rounded-4xl pb-3"
          />

          <Image
            src="/images/Hermanos Orando IBPP 1.svg"
            alt="Imagen de Chicas IBPP"
            width={500}
            height={500}
            className="rounded-4xl pb-3"
          />


          <h2 className="font-semibold text-3xl pt-10">Celebra con Nosotros</h2>
          <p className="text-center text-xl pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Corrupti praesentium quas ducimus voluptates incidunt, expedita 
            et ullam distinctio aut quos quo odit, excepturi soluta totam. 
            Possimus ratione nostrum quasi quas.</p>
          
          <div className="flex justify-center items-center pt-5">
            <a>Lee Mas</a>
            <Image
              src="images/arrow-forward.svg"
              alt="Imagen de Flecha"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
      
      {/* Beneficios de Unirte a la Iglesia */}
      <div>
        <h1 className="text-center text-3xl font-bold pb-5">Los beneficios de unirte a nuestra iglesia</h1>
        
        <div className="relative p-5">
          <Image
            src="/images/LOGO IBPP.svg"
            alt="=Logo de IBPP"
            width={800}
            height={500}
          />
          <div className="absolute inset-0 pt-90 p-5">
            <h2 className="font-semibold text-xl">Watch and listen to our sermons</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quas, temporibus. Fugit ullam assumenda possimus esse expedita,
              quas dignissimos in ea, facere vel repellendus qui at dolorum id repudiandae,
              similique cupiditate!</p>
          </div>
          
        </div>


        <div className="relative p-5">
          <Image
            src="/images/LOGO IBPP.svg"
            alt="=Logo de IBPP"
            width={800}
            height={500}
          />
          <div className="absolute inset-0 pt-90 p-5">
            <h2 className="font-semibold text-xl">Watch and listen to our sermons</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quas, temporibus. Fugit ullam assumenda possimus esse expedita,
              quas dignissimos in ea, facere vel repellendus qui at dolorum id repudiandae,
              similique cupiditate!</p>
          </div>
          
        </div>

        <div className="relative p-5">
          <Image
            src="/images/LOGO IBPP.svg"
            alt="=Logo de IBPP"
            width={800}
            height={500}
          />
          <div className="absolute inset-0 pt-90 p-5">
            <h2 className="font-semibold text-xl">Watch and listen to our sermons</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quas, temporibus. Fugit ullam assumenda possimus esse expedita,
              quas dignissimos in ea, facere vel repellendus qui at dolorum id repudiandae,
              similique cupiditate!</p>
          </div>
          
        </div>

        <div className="relative p-5">
          <Image
            src="/images/LOGO IBPP.svg"
            alt="=Logo de IBPP"
            width={800}
            height={500}
          />
          <div className="absolute inset-0 pt-90 p-5">
            <h2 className="font-semibold text-xl">Watch and listen to our sermons</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quas, temporibus. Fugit ullam assumenda possimus esse expedita,
              quas dignissimos in ea, facere vel repellendus qui at dolorum id repudiandae,
              similique cupiditate!</p>
          </div>
        </div>
      </div>

      {/* Seccion Unetenos y se parte... */}
      <div className="p-5">
        <h1 className="text-center font-bold text-4xl p-10">Unetenos y se parte de algo mas grande</h1>

        <Image
          src="/images/TEMA DEL AÑO IBPP.svg"
          alt="Imagen del Tema del Año"
          width={1000}
          height={1000}
          className="rounded-3xl"
        />

        <div className="p-5 ">
          <div className="bg-[#FFF5EB] border-[#FFD0A0] border-b-10 rounded-2xl p-5">
            <p>Proximo Evento</p>
            <h2 className="font-semibold pb-2">Mira y escucha nuestros sermones</h2>
            <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Sit porro error in optio possimus earum amet asperiores reprehenderit distinctio vel.
            </p>

            <div className="flex gap-3 pt-7">
              <Image
                src="/images/Clock icon.svg"
                alt="Imagen del Tema del Año"
                width={30}
                height={30}
              />
              <p>Friday 23:39 IST Saturday 11:20 ISD</p>

              <Image
                src="/images/Ubication Icon.svg"
                alt="Imagen del Tema del Año"
                width={30}
                height={30}
              />
              <p>No 233 Main St. New York, United States</p>
            </div>  
          </div>
          <div className="flex justify-center items-center pt-5">
            <a>Mira todos los sermones</a>
            <Image
              src="images/arrow-forward.svg"
              alt="Imagen de Flecha"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>

      {/* Queremos ser de bendicion */}
      <div className="p-5 ">
        <Image
          src="images/MundoIBPP.svg"
          alt="Imagen de Flecha"
          width={1000}
          height={50}
          className="rounded-3xl"
        />
        <div className="pt-5"></div>
        <div className="bg-[#FFF5EB] border-[#FFD0A0] border-b-10 rounded-2xl p-5">
          <h2 className="font-bold text-4xl pb-3">Queremos ser de bendicion para el mundo que nos rodea</h2>
          <p className="pb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Dolore, voluptatem aut! Beatae sit fugit rem necessitatibus.
          </p>

          <button className="bg-[#FFD0A0] p-3 rounded-2xl">
            Visitanos
          </button>
        </div>
      </div>

      <div className="p-10">
        <h2 className="text-center font-bold text-4xl">Compartir, inspirar y innovar</h2>

        <div className="pt-5">
          <div className="bg-[#FFF5EB] border-[#FFD0A0] border-b-10 rounded-2xl p-5">
            <h2 className="font-bold text-xl pb-3">Luz y verdad</h2>
            <p className="pb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Dolore, voluptatem aut! Beatae sit fugit rem necessitatibus.
            </p>
            <p>By Mathew Johnson</p>
            <p>Tuesday 13 May, 2021</p>
          </div>
        </div>


        <div className="pt-5">
          <div className="bg-[#FFF5EB] border-[#FFD0A0] border-b-10 rounded-2xl p-5">
            <h2 className="font-bold text-xl pb-3">Camino vivo</h2>
            <p className="pb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Dolore, voluptatem aut! Beatae sit fugit rem necessitatibus.
            </p>
            <p>By Mathew Johnson</p>
            <p>Tuesday 13 May, 2021</p>
          </div>
        </div>

        <div className="pt-5">
          <div className="bg-[#FFF5EB] border-[#FFD0A0] border-b-10 rounded-2xl p-5">
            <h2 className="font-bold text-xl pb-3">Firme en fe</h2>
            <p className="pb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Dolore, voluptatem aut! Beatae sit fugit rem necessitatibus.
            </p>
            <p>By Mathew Johnson</p>
            <p>Tuesday 13 May, 2021</p>
          </div>
        </div>

        <div className="pt-5">
          <div className="bg-[#FFF5EB] border-[#FFD0A0] border-b-10 rounded-2xl p-5">
            <h2 className="font-bold text-xl pb-3">Roca eterna</h2>
            <p className="pb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Dolore, voluptatem aut! Beatae sit fugit rem necessitatibus.
            </p>
            <p>By Mathew Johnson</p>
            <p>Tuesday 13 May, 2021</p>

          </div>
        </div>
      </div>

    </main>
  );
}
