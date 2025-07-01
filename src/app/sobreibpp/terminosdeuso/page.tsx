import Image from "next/image";

export default function TerminosDeUso() {
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
                <h1 className="text-white text-2xl md:text-5xl lg:text-6xl text-center">Terminos de Uso</h1>
            </div>
        </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem" }}>
        <h1 className="text-3xl font-bold">Términos de Uso</h1>
        <p><strong>Última actualización:</strong> 16 de Junio del 2025</p>
        <p>
          Bienvenido al sitio web de la Iglesia Bautista Príncipe de Paz. Al acceder y utilizar este sitio, aceptas cumplir con los siguientes términos y condiciones. Si no estás de acuerdo con alguno de ellos, te pedimos que no utilices el sitio.
        </p>
        <ol>
          <li>
            <strong>Uso del sitio web</strong>
            <p>
              Este sitio tiene como propósito compartir información relacionada con nuestras actividades, enseñanzas bíblicas, eventos, recursos cristianos y oportunidades para conectar con nuestra comunidad. Aceptas utilizar este sitio de manera respetuosa y conforme a los principios cristianos.
            </p>
          </li>
          <li>
            <strong>Contenido</strong>
            <p>
              Todo el contenido publicado (textos, imágenes, videos, audios, gráficos, etc.) pertenece a Iglesia Bautista Príncipe de Paz o a sus respectivos autores, y está protegido por derechos de autor. Puedes compartir nuestros contenidos siempre que menciones la fuente y no los uses con fines comerciales sin autorización previa.
            </p>
          </li>
          <li>
            <strong>Conducta del usuario</strong>
            <ul className="list-disc ml-6">
              <li>No enviar contenido ofensivo, difamatorio o que incite al odio</li>
              <li>No usar el sitio para fines ilegales o contrarios a los valores cristianos</li>
              <li>No introducir virus o tecnologías que afecten el funcionamiento del sitio</li>
            </ul>
            <p>
              Nos reservamos el derecho de eliminar cualquier contenido o restringir el acceso a usuarios que violen estas normas.
            </p>
          </li>
          <li>
            <strong>Enlaces a terceros</strong>
            <p>
              Nuestro sitio puede incluir enlaces a otras páginas cristianas o servicios de terceros. Iglesia Bautista Príncipe de Paz no se hace responsable del contenido ni de las políticas de privacidad de dichos sitios.
            </p>
          </li>
          <li>
            <strong>Modificaciones</strong>
            <p>
              Podemos modificar estos Términos de Uso en cualquier momento. Te recomendamos revisarlos periódicamente. El uso continuo del sitio después de los cambios indica tu aceptación de los nuevos términos.
            </p>
          </li>
          <li>
            <strong>Limitación de responsabilidad</strong>
            <p>
              Este sitio web se ofrece “tal cual”. Aunque buscamos mantener la información actualizada y correcta, no garantizamos que el sitio esté libre de errores o interrupciones. No nos hacemos responsables por daños directos o indirectos derivados del uso del sitio.
            </p>
          </li>
          <li>
            <strong>Propiedad intelectual</strong>
            <p>
              El nombre Iglesia Bautista Príncipe de Paz, su logotipo, y todo contenido relacionado están protegidos. No puedes usarlos sin nuestro permiso escrito.
            </p>
          </li>
          <li>
            <strong>Jurisdicción</strong>
            <p>
              Estos términos se rigen por las leyes del país donde opera la iglesia (México, si aplica). Cualquier disputa será resuelta ante los tribunales competentes de dicha jurisdicción.
            </p>
          </li>
        </ol>
        <h2>Contacto</h2>
        <p>
          Si tienes preguntas sobre estos Términos de Uso, puedes comunicarte con nosotros:
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