import { Toaster } from "@/components/ui/sonner";
import React from "react";
import { Footer, Meta, SiteHeader, ThemeProvider } from "./";

interface LayoutProps {
  preview: boolean;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ preview, children }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Meta />
        <div className="min-h-screen">
          {/* <Alert preview={preview} /> */}
          <SiteHeader />
          <div className="flex flex-col m-auto max-w-[120ch]">
            {children}
          </div>
          <Toaster />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};
