import React from "react";

export const Intro: React.FC = () => {
  return (
    <section className="flex flex-col my-16">
      <h1 className="text-6xl font-bold leading-tight tracking-tighter sm:text-8xl">
        Glint Blog.
      </h1>
      <h2 className="mt-5 text-lg">
        Blog especializado en desarrollo web, UX y accesibilidad.
      </h2>
    </section>
  );
};
