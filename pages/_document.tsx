import { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import { Analytics } from "@vercel/analytics/react"

interface DocumentProps { }

const MyDocument: React.FC<DocumentProps> = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html >
  );
};

export default MyDocument;
