import Head from "next/head";
import { HOME_OG_IMAGE_URL } from "../lib/constants";

export const Meta: React.FC = () => {
  return (
    <Head>
      <title>Glint Blog - Desarrollo Web, UX y Accesibilidad</title>
      <meta
        name="description"
        content="Glint Blog es un espacio especializado en desarrollo web, UX y accesibilidad. Encuentra artículos y recursos para mejorar tus habilidades en estas áreas."
      />
      <meta
        name="keywords"
        content="desarrollo web, UX, accesibilidad, programación, diseño web, experiencia de usuario, desarrollo frontend, desarrollo backend, UX"
      />
      <meta name="author" content="Iván Ruiz" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Glint Blog - Desarrollo Web, UX y Accesibilidad" />
      <meta
        property="og:description"
        content="Glint Blog es un espacio especializado en desarrollo web, UX y accesibilidad. Encuentra artículos y recursos para mejorar tus habilidades en estas áreas."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://glint-blog.com" />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Glint Blog - Desarrollo Web, UX y Accesibilidad" />
      <meta
        name="twitter:description"
        content="Glint Blog es un espacio especializado en desarrollo web, UX y accesibilidad. Encuentra artículos y recursos para mejorar tus habilidades en estas áreas."
      />
      <meta name="twitter:image" content={HOME_OG_IMAGE_URL} />

      {/* Favicon y Apple Touch Icon */}
      <link rel="icon" type="image" href="/favicon/favicon.ico" sizes="any" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />

      {/* Otros */}
      <link rel="canonical" href="https://glint-blog.com" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};
