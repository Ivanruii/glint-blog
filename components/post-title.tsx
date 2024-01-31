import React from "react";

interface PostTitleProps {
  children: React.ReactNode;
}

export const PostTitle: React.FC<PostTitleProps> = ({ children }) => {
  return (
    <h1 className="mb-12 text-6xl font-bold leading-tight tracking-tighter text-center md:text-7xl lg:text-8xl md:leading-none md:text-left">
      {children}
    </h1>
  );
};
