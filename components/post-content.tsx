import { PortableText, PortableTextComponents } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";

const ImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);
  return (
    <img
      src={urlBuilder()
        .image(value)
        .width(isInline ? 100 : 800)
        .fit("max")
        .auto("format")
        .url()}
      alt={value.alt || " "}
      loading="lazy"
      style={{
        display: isInline ? "inline-block" : "block",
        aspectRatio: width / height,
      }}
    />
  );
};

const ContentComponents: PortableTextComponents = {
  types: {
    image: ImageComponent,
  },
  block: {
    h1: ({ children }) => (
      <h1 className="my-4 text-4xl font-bold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="my-4 text-3xl font-bold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="my-4 text-2xl font-bold">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="pl-4 my-4 italic text-gray-700 border-l-4 border-gray-300">
        {children}
      </blockquote>
    ),
    ul: ({ children }) => <ul className="my-4 ml-8 list-disc">{children}</ul>,
    ol: ({ children }) => (
      <ol className="my-4 ml-8 list-decimal">{children}</ol>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,
    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="m-5" style={{ listStyleType: "disc" }}>
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li className="m-5" style={{ listStyleType: "decimal" }}>
        {children}
      </li>
    ),

    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
};

export const PostContent = ({ content }) => {
  return <PortableText value={content} components={ContentComponents} />;
};
