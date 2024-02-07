import Link from "next/link";
import React from "react";
import { Avatar, CoverImage, Date } from "./";

interface PostPlugProps {
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

export const PostPlug: React.FC<PostPlugProps> = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) => {
  return (
    <div className="border border-gray-300 rounded-2xl">
      <div className="mb-5">
        <CoverImage className="rounded-t-2xl" slug={slug} title={title} image={coverImage} priority={undefined} />
      </div>
      <div className="px-4">
        <div className="flex items-center justify-between my-4">
          <h3 className="text-3xl leading-snug">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="text-lg">
            <Date dateString={date} />
          </div>
        </div>
        <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
    </div>
  );
};
