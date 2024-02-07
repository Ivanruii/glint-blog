import React from "react";
import { Alert, Footer, Meta } from "./";

interface LayoutProps {
  preview: boolean;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ preview, children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main className="flex m-auto max-w-[120ch]">{children}</main>
      </div>
      <Footer />
    </>
  );
};
