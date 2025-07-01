
import Image from "next/image";

export default function PoliticasDePrivacidad() {
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
                    <h1 className="text-white text-2xl md:text-5xl lg:text-6xl text-center">Politicas de Privacidad</h1>
                </div>
            </div>
            <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem" }}>
                <h1 className="text-3xl font-bold">Política de Privacidad</h1>
                <p><strong>Última actualización:</strong> 16 de Junio del 2025</p>
                <p>
                    En Iglesia Bautista Príncipe de Paz, valoramos tu privacidad y estamos comprometidos a proteger los datos personales que nos compartes a través de nuestro sitio web.
                </p>
                <ol>
                    <li>
                        <strong>¿Qué información recopilamos?</strong>
                        <ul className="list-disc ml-6">
                            <li>Nombre completo</li>
                            <li>Dirección de correo electrónico</li>
                            <li>Número de teléfono (si decides proporcionarlo)</li>
                            <li>
                            Información relacionada con formularios de contacto, solicitudes de oración, suscripción a boletines, o donaciones en línea
                            </li>
                            <li>
                            Información técnica de tu dispositivo como dirección IP, navegador, país de origen, etc., con fines estadísticos y de mejora del sitio.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>¿Para qué usamos tu información?</strong>
                        <ul className="list-disc ml-6">
                            <li>Responder a tus mensajes o peticiones</li>
                            <li>Enviarte actualizaciones, boletines o noticias relacionadas con la iglesia</li>
                            <li>Orar por tus peticiones si así lo solicitas</li>
                            <li>Gestionar donaciones u ofrendas realizadas por medios digitales</li>
                            <li>Mejorar nuestro sitio web y el servicio que ofrecemos</li>
                        </ul>
                    </li>
                    <li>
                        <strong>¿Cómo protegemos tu información?</strong>
                        <p>
                            Adoptamos medidas razonables de seguridad para proteger tus datos personales contra accesos no autorizados, alteraciones o divulgación. No compartimos tu información con terceros, salvo que sea necesario por obligación legal.
                        </p>
                    </li>
                    <li>
                        <strong>¿Compartimos tu información?</strong>
                        <p>
                            No vendemos, intercambiamos ni transferimos tus datos personales a terceros. Podríamos compartirlos únicamente con proveedores de servicios que nos ayuden a operar el sitio web, siempre bajo estrictos acuerdos de confidencialidad.
                        </p>
                    </li>
                    <li>
                        <strong>Uso de cookies</strong>
                        <p>
                            Podemos usar cookies para mejorar tu experiencia en el sitio. Puedes configurar tu navegador para rechazarlas, aunque eso podría afectar algunas funcionalidades del sitio.
                        </p>
                    </li>
                    <li>
                        <strong>Enlaces a sitios externos</strong>
                        <p>
                            Nuestro sitio puede contener enlaces a páginas de terceros (por ejemplo, recursos cristianos, redes sociales, etc.). No somos responsables de las prácticas de privacidad ni del contenido de dichos sitios.
                        </p>
                    </li>
                    <li>
                        <strong>Tus derechos</strong>
                        <p>
                            Puedes solicitar acceso, corrección o eliminación de tus datos personales en cualquier momento escribiéndonos al correo electrónico que aparece en nuestro sitio web.
                        </p>
                    </li>
                    <li>
                        <strong>Consentimiento</strong>
                        <p>
                            Al usar nuestro sitio web, aceptas esta Política de Privacidad.
                        </p>
                    </li>
                </ol>
                <h2>Contacto</h2>
                <p>
                    Si tienes alguna pregunta sobre esta Política de Privacidad o el uso de tus datos, por favor contáctanos en:
                </p>
                <address>
                    Iglesia Bautista Príncipe de Paz<br />
                    Correo electrónico: <a href="mailto:ibpp@example.com">ibpp@example.com</a><br />
                    Teléfono: <a href="tel:8183585945">81 8358 5945</a>
                </address>
            </div>
            
        </main>
    );
}