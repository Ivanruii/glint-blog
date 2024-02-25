import cn from "classnames";
import Image from "next/image";
import React from "react";
import { urlForImage } from "../lib/sanity";
import { AnimatedLink } from "./animated-link";

interface CoverImageProps {
  title: string;
  slug?: string;
  image: {
    asset?: {
      _ref?: string;
    };
  };
  priority: boolean | undefined;
  className?: string;
}

export const CoverImage: React.FC<CoverImageProps> = ({
  title,
  slug,
  image: source,
  priority,
  className,
}) => {
  const imageClasses = cn(
    "w-full h-auto shadow-small shadow-slate-300",
    className
  );

  const image = source?.asset?._ref ? (
    <div>
      <Image
        className={imageClasses}
        width={2000}
        height={1000}
        alt={`Cover Image for ${title}`}
        src={urlForImage(source).height(1000).width(2000).url()}
        sizes="100vw"
        priority={priority}
      />
    </div>
  ) : (
    <div style={{ paddingTop: "50%", backgroundColor: "#ddd" }} />
  );

  return (
    <div className="bg-transparent sm:mx-0">
      {slug ? (
        <AnimatedLink href={`/posts/${slug}`} aria-label={title}>
          {image}
        </AnimatedLink>
      ) : (
        image
      )}
    </div>
  );
};
