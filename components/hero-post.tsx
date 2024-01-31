import React from "react";
import { Avatar } from "../components/avatar";
import { Date } from "../components/date";
import { CoverImage } from "../components/cover-image";
import Link from "next/link";

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
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage slug={slug} title={title} image={coverImage} priority />
      </div>
      <div className="mb-20 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </section>
  );
};