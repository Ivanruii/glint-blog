import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlForImage } from "../lib/sanity";

interface CoverImageProps {
  title: string;
  slug?: string;
  image: {
    asset?: {
      _ref?: string;
    };
  };
  priority: boolean | undefined;
  className?: string; // Nueva propiedad para las clases adicionales
}

export const CoverImage: React.FC<CoverImageProps> = ({
  title,
  slug,
  image: source,
  priority,
  className, // Agregar className a las props
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
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};
