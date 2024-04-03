import React from "react";
import Link from "next/link";
import useAnimatedRouter from "./hooks/use-animated-router";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export const AnimatedLink: React.FC<Props> = ({ href, children, ...props }) => {
  const { animatedRoute } = useAnimatedRouter();

  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      animatedRoute(href);
    },
    [animatedRoute, href]
  );

  return (
    <Link href={href} passHref {...props} onClick={handleClick}>
      {children}
    </Link>
  );
};
