import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

interface DocumentProps { }

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
