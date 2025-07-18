"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Visitanos() {
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID;

    useEffect(() => {

    if (document.querySelector('script[src^="https://maps.googleapis.com/maps/api/js"]')) {
        setScriptLoaded(true);
        return;
    }

    // Cargar el script de Google Maps dinámicamente
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places,marker`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
        setScriptLoaded(true);
    };

    document.body.appendChild(script);
    }, [apiKey]);

    useEffect(() => {
    if (!scriptLoaded) return;

    
    const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 25.64777684080883, lng: -100.28831898219624 },
        zoom: 14,
        mapId: mapId
    });

    new google.maps.marker.AdvancedMarkerElement({
        position: { lat: 25.64777684080883, lng: -100.28831898219624 },
        map,
        title: "Nuestra Ubicación",
    });
    }, [scriptLoaded, mapId]);

    return (
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
            <h1 className="text-white text-2xl md:text-5xl lg:text-6xl text-center">
            Obtén las Direcciones
            </h1>
        </div>
        </div>

        <div className="flex justify-center items-center pb-10">
            <div id="map" className="w-[1000px] h-[400px] mt-8 rounded-lg shadow-lg"></div>
        </div>
    </main>
  );
}
