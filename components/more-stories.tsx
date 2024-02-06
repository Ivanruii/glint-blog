import React, { useState } from "react";
import { PostPlug } from "./post-plug";

interface MoreStoriesProps {
  posts: {
    slug: string;
    title: string;
    coverImage: {
      asset?: {
        _ref?: string;
      };
    };
    date: string;
    author: {
      name: string;
      picture: {
        asset?: {
          _ref?: string;
        };
      };
    };
    excerpt: string;
  }[];
}

export const MoreStories: React.FC<MoreStoriesProps> = ({ posts }) => {
  const [showAll, setShowAll] = useState(false);

  const visiblePosts = showAll ? posts : posts.slice(0, 6);

  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        Otros Posts.
      </h2>
      <div className="grid grid-cols-1 mb-32 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32">
        {visiblePosts.map((post) => (
          <PostPlug
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
      {!showAll && posts.length > 6 && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="flex items-center justify-center px-4 py-2 text-sm font-semibold text-white transition-all bg-gray-500 border-b-4 rounded-lg shadow-lg  group h-min disabled:opacity-50 disabled:hover:opacity-50 hover:opacity-95 ring-none font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 border-b-gray-600 disabled:border-0 disabled:bg-violet-500 disabled:text-white ring-white hover:border-0 active:border-0 hover:text-gray-100 active:bg-white-800 active:text-gray-300 focus-visible:outline-white-500 sm:text-base"
          >
            Ver más...
          </button>
        </div>
      )}
    </section>
  );
};
