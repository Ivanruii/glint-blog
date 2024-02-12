import Link from "next/link";
import React from "react";
import { Badge, CoverImage, Date } from "./";

export interface CardProps {
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

export const Card: React.FC<CardProps> = ({
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
    categories
}) => {
    return (
        <div className="border border-gray-300 rounded-2xl">
            <CoverImage className="rounded-t-2xl" slug={slug} title={title} image={coverImage} priority={undefined} />
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

                {categories && categories.map((category, index) => (
                    <Badge key={index} nombre={category} color="blue" />
                ))}
                {/* {author && <Avatar name={author.name} picture={author.picture} />} */}
            </div>
        </div>
    );
};
