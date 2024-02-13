import Link from "next/link";
import React from "react";
import { CoverImage, Date } from "./";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
export interface PostPlugProps {
  title: string;
  coverImage: {
    asset?: {
      _ref?: string;
    };
  };
  date: string;
  excerpt: string;
  author?: {
    name: string;
    picture: {
      asset?: {
        _ref?: string;
      };
    };
  };
  categories: string[],
  slug: string;
}

export const PostPlug: React.FC<PostPlugProps> = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  categories
}) => {
  return (
    <Card>
      <CoverImage className="rounded-t-xl" slug={slug} title={title} image={coverImage} priority={undefined} />
      <div className="flex flex-col p-4 item">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl leading-snug">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="text-md">
            <Date dateString={date} />
          </div>
        </div>
        <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
        <div className="flex gap-4">
          {categories && categories.map((category, index) => (
            <Badge key={index}>{category}</Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};
