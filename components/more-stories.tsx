import React from "react";
import { PostPlug } from "./";
import { Button } from "./ui/button";

interface MoreStoriesProps {
  posts: {
    categories: string[];
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
  const [showAll, setShowAll] = React.useState(false);

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
            categories={post.categories}
          />
        ))}
      </div>

      {!showAll && posts.length > 6 && (
        <div className="flex justify-center">
          <Button onClick={() => setShowAll(true)}>Ver más...</Button>
        </div>
      )}
    </section>
  );
};
