import React from "react";
import { Container, Header, Layout } from "./";

export const CookiesPolitics: React.FC = ({ preview = false }: any) => {
    return (
        <Layout preview={preview}>
            <Container>
                <Header />
                <article className="mb-10">
                    <header>
                        <h1 className="my-4 text-3xl font-bold">Política de Cookies</h1>
                    </header>
                    <section>
                        <p>
                            Esta página web utiliza cookies para mejorar la experiencia del usuario. Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Son ampliamente utilizadas para que los sitios web funcionen correctamente y de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
                        </p>
                    </section>
                    <section>
                        <h2 className="my-4 text-2xl font-bold">Tipos de Cookies Utilizadas</h2>
                        <ul>
                            <li className="pl-3 ml-6 list-disc"><strong>Cookies Estrictamente Necesarias:</strong> Son esenciales para que pueda navegar por el sitio web y utilizar sus funciones, como acceder a áreas seguras. Sin estas cookies, los servicios que ha solicitado, como carritos de compras o facturación electrónica, no pueden ser proporcionados.</li>
                            <li className="pl-3 ml-6 list-disc"><strong>Cookies de Rendimiento:</strong> Estas cookies recopilan información sobre cómo utiliza el sitio web, como qué páginas visita con más frecuencia y si recibe mensajes de error. Estas cookies no recopilan información que identifique directamente al visitante. Toda la información que recopilan estas cookies es agregada y, por lo tanto, anónima. Se utiliza únicamente para mejorar el funcionamiento del sitio web.</li>
                            <li className="pl-3 ml-6 list-disc"><strong>Cookies de Funcionalidad:</strong> Estas cookies permiten al sitio web recordar las elecciones que ha realizado (como su nombre de usuario, idioma o región) y proporcionar características mejoradas y más personalizadas. También pueden utilizarse para recordar cambios que ha realizado en el tamaño del texto, fuentes y otras partes de las páginas web que puede personalizar. La información que estas cookies recopilan puede ser anónima y no pueden rastrear su actividad de navegación en otros sitios web.</li>
                            <li className="pl-3 ml-6 list-disc"><strong>Cookies de Marketing:</strong> Estas cookies se utilizan para hacer que la publicidad que recibe sea más relevante para sus intereses. También se utilizan para limitar el número de veces que ve un anuncio y para ayudar a medir la efectividad de las campañas publicitarias. Las cookies de marketing suelen ser colocadas por redes de publicidad con el permiso del operador del sitio web. Recuerdan que ha visitado un sitio web y esta información se comparte con otras organizaciones, como los anunciantes.</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="my-4 text-2xl font-bold">Control de Cookies</h2>
                        <p>
                            Puede controlar y/o eliminar las cookies según lo desee. Para obtener más información, consulte <a href="https://www.aboutcookies.org/" target="_blank">aboutcookies.org</a>. Puede eliminar todas las cookies que ya están en su computadora y puede configurar la mayoría de los navegadores para evitar que se coloquen. Sin embargo, si lo hace, es posible que tenga que ajustar manualmente algunas preferencias cada vez que visite un sitio y es posible que algunas funciones y servicios no funcionen.
                        </p>
                    </section>
                    <section>
                        <h2 className="my-4 text-2xl font-bold">Cambios en la Política de Cookies</h2>
                        <p>
                            Nos reservamos el derecho de modificar esta Política de Cookies en cualquier momento. Cualquier cambio sustancial en esta Política de Cookies será notificado en nuestro sitio web.
                        </p>
                    </section>
                </article>
            </Container >
        </Layout >
    );
};
