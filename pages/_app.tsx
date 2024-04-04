import React from "react";
import "../styles/index.css";
import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default MyApp;
