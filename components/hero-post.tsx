import Link from "next/link";
import React from "react";
import { Avatar, CoverImage, Date } from "./";

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
    <section className="flex items-center p-5 border border-gray-300 rounded-2xl">
      <div className="flex-grow pr-4 border-r border-gray-300">
        <div className="mb-20 md:mb-28">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between">
              <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
                <Link href={`/posts/${slug}`} className="hover:underline">
                  {title}
                </Link>
              </h3>
              <div className="mb-4 text-lg">
                <Date dateString={date} />
              </div>
            </div>
            <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
          </div>
        </div>
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      <div className="pl-4 w-[50%]">
        <CoverImage slug={slug} title={title} image={coverImage} priority />
      </div>
    </section>
  );
};
