"use client"
import Image from "next/image";
import { useState, useRef } from "react";

export default function Home() {

  const slides = [
    {
      title: "Luz y verdad",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, voluptatem aut! Beatae sit fugit rem necessitatibus.",
      author: "By Mathew Johnson",
      date: "Tuesday 13 May, 2021",
    },
    {
      title: "Camino vivo",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, voluptatem aut! Beatae sit fugit rem necessitatibus.",
      author: "By Mathew Johnson",
      date: "Tuesday 13 May, 2021",
    },
    {
      title: "Firme en fe",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, voluptatem aut! Beatae sit fugit rem necessitatibus.",
      author: "By Mathew Johnson",
      date: "Tuesday 13 May, 2021",
    },
    {
      title: "Roca eterna",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, voluptatem aut! Beatae sit fugit rem necessitatibus.",
      author: "By Mathew Johnson",
      date: "Tuesday 13 May, 2021",
    },
  ];

  const [current, setCurrent] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const goToSlide = (idx: number) => {
    setCurrent(idx);
    const carousel = carouselRef.current;
    if (carousel) {
      const slide = carousel.children[idx] as HTMLElement;
      carousel.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
    }
  };

  // Update current slide on scroll
  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      const { scrollLeft, offsetWidth } = carousel;
      const idx = Math.round(scrollLeft / offsetWidth);
      setCurrent(idx);
    }
  };

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
        

        <div className="lg:hidden absolute inset-0 flex flex-col justify-start items-end pr-8 pt-3 ">
          <div className="relative">
            <h1 className="text-white text-2xl font-semibold ">
              Se parte de nuestra <br/> comunidad
            </h1>
          </div>

          <div className="absolute inset-0 flex flex-row justify-end items-start pt-10 pr-5 ">
            <button className="bg-amber-400 rounded-full p-1 "> 
              Aprende Mas
            </button>
          </div> 
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex justify-center lg:gap-10">
          <div className=" absolute inset-0 flex flex-col justify-start items-end lg:pr-76 pt-30">
            <div className="relative">
              <h1 className="text-white text-2xl font-semibold lg:text-6xl">
                Se parte de nuestra <br/> comunidad
              </h1>
            </div>

            <div className="absolute inset-0 flex flex-row justify-end items-start  lg:pr-85 pt-45">
              <button className="bg-amber-400 rounded-full lg: p-4 pl-10 pr-10"> 
                Aprende Mas
              </button>
            </div> 
          </div>
        </div>
      </div>

      {/* Iglesia con Vision */}
      <div className="text-center text-3xl pt-20 pb-20">
        <h1 className="font-semibold">Una iglesia con vision</h1>
        
        <div className="p-10 lg:flex gap-20 ">
          <div className="pb-15 ">
            <div className="bg-[#FFF5EB] border-[#FFD0A0] border-b-10 rounded-2xl">
              <div className="flex justify-center pt-5 ">
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
      
      {/* Beneficios de Unirte a la Iglesia */}
      <div>
        <h1 className="text-center text-3xl font-bold pb-5">Los beneficios de unirte a nuestra iglesia</h1>


        <div className="lg:hidden carousel carousel-vertical rounded-box h-145">
          <div className="carousel-item relative p-5">
            <Image
              src="/images/LOGO IBPP.svg"
              alt="=Logo de IBPP"
              width={800}
              height={500}
            />
            <div className="absolute bottom-0 left-0 w-full p-5">
              <h2 className="font-semibold text-xl">Watch and listen to our sermons</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quas, temporibus. Fugit ullam assumenda possimus esse expedita,
                quas dignissimos in ea, facere vel repellendus qui at dolorum id repudiandae,
                similique cupiditate!</p>
            </div>
          </div>


          <div className="carousel-item relative p-5">
            <Image
              src="/images/LOGO IBPP.svg"
              alt="=Logo de IBPP"
              width={800}
              height={500}
            />
            <div className="absolute bottom-0 left-0 w-full p-5">
              <h2 className="font-semibold text-xl">Watch and listen to our sermons</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quas, temporibus. Fugit ullam assumenda possimus esse expedita,
                quas dignissimos in ea, facere vel repellendus qui at dolorum id repudiandae,
                similique cupiditate!</p>
            </div>
          </div>

          <div className=" carousel-item relative p-5">
            <Image
              src="/images/LOGO IBPP.svg"
              alt="=Logo de IBPP"
              width={800}
              height={500}
            />
            <div className="absolute bottom-0 left-0 w-full p-5">
              <h2 className="font-semibold text-xl">Watch and listen to our sermons</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quas, temporibus. Fugit ullam assumenda possimus esse expedita,
                quas dignissimos in ea, facere vel repellendus qui at dolorum id repudiandae,
                similique cupiditate!</p>
            </div>
          </div>

            <div className=" carousel-item relative p-5">
              <Image
                src="/images/LOGO IBPP.svg"
                alt="=Logo de IBPP"
                width={800}
                height={500}
              />
              <div className="absolute bottom-0 left-0 w-full p-5">
                <h2 className="font-semibold text-xl">Watch and listen to our sermons</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Quas, temporibus. Fugit ullam assumenda possimus esse expedita,
                  quas dignissimos in ea, facere vel repellendus qui at dolorum id repudiandae,
                  similique cupiditate!</p>
              </div>
            </div>
        </div>

        {/* Desktop */}

        <div className="hidden lg:flex ">
          <div className="relative p-5">
            <Image
              src="/images/LOGO IBPP.svg"
              alt="=Logo de IBPP"
              width={800}
              height={500}
            />
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-white/80 to-transparent">
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
            <div className="absolute bottom-0 left-0 w-full p-8 ">
              <h2 className="font-semibold text-xl">Watch and listen to our sermons</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quas, temporibus. Fugit ullam assumenda possimus esse expedita,
                quas dignissimos in ea, facere vel repellendus qui at dolorum id repudiandae,
                similique cupiditate!</p>
            </div>
          </div>

          <div className=" relative p-5">
            <Image
              src="/images/LOGO IBPP.svg"
              alt="=Logo de IBPP"
              width={800}
              height={500}
            />
            <div className="absolute bottom-0 left-0 w-full p-8">
              <h2 className="font-semibold text-xl">Watch and listen to our sermons</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quas, temporibus. Fugit ullam assumenda possimus esse expedita,
                quas dignissimos in ea, facere vel repellendus qui at dolorum id repudiandae,
                similique cupiditate!</p>
            </div>
          </div>

            <div className=" relative p-5">
              <Image
                src="/images/LOGO IBPP.svg"
                alt="=Logo de IBPP"
                width={800}
                height={500}
              />
              <div className="absolute bottom-0 left-0 w-full p-8">
                <h2 className="font-semibold text-xl">Watch and listen to our sermons</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Quas, temporibus. Fugit ullam assumenda possimus esse expedita,
                  quas dignissimos in ea, facere vel repellendus qui at dolorum id repudiandae,
                  similique cupiditate!</p>
              </div>
            </div>
        </div>
      </div>

      

      {/* Seccion Unetenos y se parte... */}
      <div className="p-5 ">
        <h1 className="text-center font-bold text-4xl p-10">Unetenos y se parte de algo mas grande</h1>

        <div className="lg:flex flex-row-reverse">
        <Image
          src="/images/TEMA DEL AÑO IBPP.svg"
          alt="Imagen del Tema del Año"
          width={1000}
          height={1000}
          className="rounded-3xl"
        />

        <div className="p-3"></div>
          <div className="bg-[#FFF5EB] border-[#FFD0A0] border-b-10 rounded-2xl p-5 lg:pt-20">
            <div className=" lg:flex flex-col justify-center items-center ">
              <p>Proximo Evento</p>
              <h2 className="font-semibold pb-2">Mira y escucha nuestros sermones</h2>
              <p className="lg:text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Sit porro error in optio possimus earum amet asperiores reprehenderit distinctio vel.
              </p>

              <div className="flex gap-3 pt-7 lg:flex-col">
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
          </div>
        </div>
        <div className="flex justify-center items-center pt-5 lg:justify-end lg:pr-10">
          <a>Mira todos los sermones</a>
          <Image
            src="images/arrow-forward.svg"
            alt="Imagen de Flecha"
            width={50}
            height={50}
          />
        </div>
      </div>

      {/* Queremos ser de bendicion */}
      <div className="p-5 ">
        <div className="relative ">
          <div className="lg:hidden">
            <Image
              src="images/MundoIBPP.svg"
              alt="Imagen de Flecha"
              width={1000}
              height={50}
              className="rounded-3xl"
            />
          </div>
          <div className="hidden lg:flex">
            <Image
              src="images/MundoIBPP.svg"
              alt="Imagen de Flecha"
              width={2000}
              height={50}
              className="rounded-3xl"
            />
          </div>
          <div className="pt-5 lg:absolute inset-0 lg:flex justify-center items-center">
            <div className="bg-[#FFF5EB] opacity-65 rounded-2xl p-5 lg:p-15 text-center max-w-xl mx-auto ">
              <h2 className="font-bold text-4xl pb-3 lg:text-2xl">Queremos ser de bendicion para el mundo que nos rodea</h2>
              <p className="pb-5 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Dolore, voluptatem aut! Beatae sit fugit rem necessitatibus.
              </p>

              <button className="bg-[#FFD0A0] p-3 rounded-2xl">
                Visitanos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Seccion de Compartir, Inspirar y innovar */}

      <div className="p-10">
        <h2 className="text-center font-bold text-4xl pb-10">Compartir, inspirar y innovar</h2>
        <div className="lg:hidden">
          <div
            className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-4 scroll-smooth"
            ref={carouselRef}
            onScroll={handleScroll}
            style={{ scrollSnapType: "x mandatory" }}
          >
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className="min-w-full md:min-w-[400px] max-w-md flex-shrink-0 snap-center w-full bg-amber-200 p-3 rounded-2xl"
              >
                <div className="bg-[#FFF5EB] border-[#FFD0A0] border-b-10 rounded-2xl p-5 h-full">
                  <h2 className="font-bold text-xl pb-3">{slide.title}</h2>
                  <p className="pb-5">{slide.text}</p>
                  <p>{slide.author}</p>
                  <p>{slide.date}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${current === idx ? "bg-amber-500" : "bg-amber-200"} transition-colors`}
                onClick={() => goToSlide(idx)}
                aria-label={`Ir al slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Desktop */}
        <div className=" hidden lg:carousel carousel-center rounded-box gap-5">
          {slides.map((slide, idx) => (
            <div className=" carousel-item min-w-full md:min-w-[400px] max-w-md flex-shrink-0 snap-center w-full bg-amber-200 p-3 rounded-2xl" key={idx}>
              <div className="bg-[#FFF5EB] border-[#FFD0A0] border-b-10 rounded-2xl p-5 h-full">
                <h2 className="font-bold text-xl pb-3">{slide.title}</h2>
                <p className="pb-5">{slide.text}</p>
                <p>{slide.author}</p>
                <p>{slide.date}</p>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </main>
  );
}
