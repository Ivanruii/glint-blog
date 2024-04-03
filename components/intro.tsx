import React from "react";

export const Intro: React.FC = () => {
  return (
    <section className="flex flex-col my-16">
      <h1 className="text-6xl font-bold leading-tight tracking-tighter sm:text-7xl text-balance">
        Glint Blog - Desarrollo Web, UX y Accesibilidad.
      </h1>
      <h2 className="mt-5 text-lg">
        Encuentra artículos y recursos para mejorar tus habilidades en estas
        áreas.
      </h2>
    </section>
  );
};
