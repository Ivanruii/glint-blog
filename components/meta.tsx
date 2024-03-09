import React from "react";
import Head from "next/head";
import { HOME_OG_IMAGE_URL } from "../lib/constants";

export interface MetaProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  date?: string;
  keywords?: string;
  canonical?: string;
  robots?: string;
  twitter?: {
    card?: string;
    site?: string;
    title?: string;
    description?: string;
    image?: string;
    creator?: string;
  };
  og?: {
    title?: string;
    description?: string;
    type?: string;
    url?: string;
    image?: string;
    site_name?: string;
  };
  viewport?: string;
}

export const Meta: React.FC<MetaProps> = ({
  title = "Glint Blog - Desarrollo Web, UX y Accesibilidad",
  description: propDescription,
  image = HOME_OG_IMAGE_URL,
  url = "https://glint-blog.com",
  keywords = "desarrollo web, UX, accesibilidad, programación, diseño web, experiencia de usuario, desarrollo frontend, desarrollo backend, UX",
  author = "Iván Ruiz",
  twitter = { card: "summary_large_image" },
  og = { type: "website", image: HOME_OG_IMAGE_URL },
  viewport = "width=device-width, initial-scale=1",
}) => {
  const description = propDescription || "Glint Blog es un espacio especializado en desarrollo web, UX y accesibilidad. Encuentra artículos y recursos para mejorar tus habilidades en estas áreas.";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={og.title || title} />
      <meta property="og:description" content={og.description || description} />
      <meta property="og:type" content={og.type || "website"} />
      <meta property="og:url" content={og.url || url} />
      <meta property="og:image" content={og.image || image} />
      <meta property="og:site_name" content={og.site_name || undefined} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content={twitter.card || "summary_large_image"} />
      <meta name="twitter:title" content={twitter.title || title} />
      <meta name="twitter:description" content={twitter.description || description} />
      <meta name="twitter:image" content={twitter.image || image} />
      <meta name="twitter:site" content={twitter.site || undefined} />
      <meta name="twitter:creator" content={twitter.creator || undefined} />

      {/* Favicon y Apple Touch Icon */}
      <link rel="icon" type="image" href="/favicon/favicon.ico" sizes="any" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />

      {/* Others */}
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content={viewport} />
    </Head>
  );
};
