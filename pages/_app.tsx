import React from "react";
import "../styles/index.css";
import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { inject } from "@vercel/analytics";

// TODO: Poner opción para cuando este en modo desarrollo
inject({ mode: "production" });

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default MyApp;
