import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="container px-5 mx-auto">{children}</div>;
};
