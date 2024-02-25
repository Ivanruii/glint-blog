import React from "react";
import { AnimatedLink } from "./";

export const Header: React.FC = () => {
  return (
    <h2 className="mt-8 mb-20 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
      <AnimatedLink href="/" className="hover:underline">
        Glint Blog
      </AnimatedLink>
      .
    </h2>
  );
};
