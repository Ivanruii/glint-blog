import React from "react";
import { Container, Header, Layout } from "./";
import Link from "next/link";

export const AboutPage: React.FC = ({ preview = false }: any) => {
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        <article className="mb-10">
          <header>
            <h1 className="my-4 text-3xl font-bold">Sobre Mí</h1>
          </header>
          <section>
            <p>
              ¡Hola! Soy Iván Ruiz, un estudiante de grado medio de informática
              apasionado por la UX, la accesibilidad y el desarrollo web. Este
              blog es mi proyecto personal donde comparto conocimientos,
              experiencias y recursos relacionados con estos temas.
            </p>
          </section>
          <section>
            <h2 className="my-4 text-2xl font-bold">Mi Misión</h2>
            <p>
              Mi misión es explorar y compartir información sobre cómo mejorar
              la experiencia de usuario, promover la accesibilidad y desarrollar
              sitios web más efectivos y amigables para todos los usuarios. A
              través de este blog, espero contribuir al crecimiento y la
              difusión de buenas prácticas en la industria.
            </p>
          </section>
          <section>
            <h2 className="my-4 text-2xl font-bold">Contacto</h2>
            <p>
              ¿Tienes alguna pregunta, sugerencia o simplemente quieres decir
              hola? ¡Me encantaría saber de ti! Puedes contactarme a través de
              la{" "}
              <Link
                href={"/contact"}
                className="text-gray-400 transition-all hover:text-black dark:hover:text-white hover:font-semibold"
              >
                página de contacto
              </Link>
              .
            </p>
          </section>
        </article>
      </Container>
    </Layout>
  );
};
