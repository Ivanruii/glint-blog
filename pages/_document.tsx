import { Head, Html, Main, NextScript } from "next/document";
import React from "react";

interface DocumentProps {}

const MyDocument: React.FC<DocumentProps> = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
