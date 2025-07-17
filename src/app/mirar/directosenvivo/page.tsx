"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

function getNextSundayAt11() {
    const now = new Date();
    const nextSunday = new Date(now);
    // Calcula el próximo domingo
    nextSunday.setDate(now.getDate() + ((7 - now.getDay()) % 7 || 7));
    nextSunday.setHours(11, 0, 0, 0);

    // Si hoy es domingo
    if (now.getDay() === 0) {
        const endOfLive = new Date(now);
        endOfLive.setHours(13, 0, 0, 0); // 1:00 pm

        if (now < endOfLive) {
            // Antes de la 1pm, el próximo directo es hoy a las 11am
            nextSunday.setDate(now.getDate());
        } else {
            // Después de la 1pm, el próximo directo es el siguiente domingo
            nextSunday.setDate(now.getDate() + 7);
        }
    }
    return nextSunday;
}

function useCountdown(targetDate: Date) {
    const [timeLeft, setTimeLeft] = useState(targetDate.getTime() - Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(targetDate.getTime() - Date.now());
        }, 1000);
        return () => clearInterval(interval);
    }, [targetDate]);

    if (timeLeft < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    return { days, hours, minutes, seconds };
}

declare global {
  interface Window {
    FB?: {
      XFBML: {
        parse: () => void;
      };
    };
  }
}

export default function DirectosEnVivo() {

    const nextSunday = getNextSundayAt11();
    const { days, hours, minutes, seconds } = useCountdown(nextSunday);


    useEffect(() => {
    if (window.FB) {
        window.FB.XFBML.parse();
        return;
    }
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    script.src = "https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v18.0";
    script.onload = () => {
        if (window.FB) window.FB.XFBML.parse();
    };
    document.body.appendChild(script);
    }, []);

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
                    <h1 className="text-white text-2xl md:text-5xl lg:text-6xl text-center">Directos en Vivo</h1>
                </div>
            </div>

            <div className="flex justify-center items-center p-5">
                <div
                    className="fb-page "
                    data-href="https://www.facebook.com/IBPPMty"
                    data-tabs="live"
                    data-width="2000"
                    data-height="2300"
                    data-small-header="false"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="true"
                    >    
                </div>
            </div>

            <div className="mt-8 flex flex-col items-center pb-10">
                <span className="font-bold text-lg mb-2 text-amber-700">Próximo directo en:</span>
                <div className="flex gap-4">
                    <div className="flex flex-col items-center bg-amber-100 rounded-full w-16 h-16 justify-center shadow-lg border-2 border-amber-300">
                    <span className="text-2xl font-extrabold text-amber-700">{days}</span>
                    <span className="text-xs text-amber-700">días</span>
                    </div>
                    <div className="flex flex-col items-center bg-amber-100 rounded-full w-16 h-16 justify-center shadow-lg border-2 border-amber-300">
                    <span className="text-2xl font-extrabold text-amber-700">{hours}</span>
                    <span className="text-xs text-amber-700">horas</span>
                    </div>
                    <div className="flex flex-col items-center bg-amber-100 rounded-full w-16 h-16 justify-center shadow-lg border-2 border-amber-300">
                    <span className="text-2xl font-extrabold text-amber-700">{minutes}</span>
                    <span className="text-xs text-amber-700">min</span>
                    </div>
                    <div className="flex flex-col items-center bg-amber-100 rounded-full w-16 h-16 justify-center shadow-lg border-2 border-amber-300">
                    <span className="text-2xl font-extrabold text-amber-700">{seconds}</span>
                    <span className="text-xs text-amber-700">seg</span>
                    </div>
                </div>
                <div className="text-sm font-bold mt-3 text-amber-700">Domingo 11:00 a.m.</div>
            </div>
            

        </main>
    );
}