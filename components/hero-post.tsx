import React from "react";
import { AnimatedLink, Avatar, CoverImage, Date } from "./";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

interface HeroPostProps {
  title: string;
  coverImage: {
    asset?: {
      _ref?: string;
    };
  };
  date: string;
  excerpt: string;
  author: {
    name: string;
    picture: {
      asset?: {
        _ref?: string;
      };
    };
  };
  slug: string;
}

export const HeroPost: React.FC<HeroPostProps> = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) => {
  return (
    <>
      <Card className="p-5">
        <div className="flex-grow pr-4">
          <div className="mb-20 md:mb-14">
            <div className="flex flex-col h-full">
              <Badge variant="secondary">Nuevo Post</Badge>
              <div className="flex flex-col items-center justify-between md:flex-row">
                <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
                  <AnimatedLink
                    href={`/posts/${slug}`}
                    className="font-semibold hover:underline"
                  >
                    {title}
                  </AnimatedLink>
                </h3>
                <div className="mb-4 text-lg">
                  <CoverImage
                    className="rounded-lg"
                    slug={slug}
                    title={title}
                    image={coverImage}
                    priority
                  />
                </div>
              </div>
              <p className="text-lg leading-relaxed ">{excerpt}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            {author && <Avatar name={author.name} picture={author.picture} />}
            <Date dateString={date} />
          </div>
        </div>
      </Card>
    </>
  );
};
