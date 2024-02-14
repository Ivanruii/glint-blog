import React from "react";
import { PostContent } from "./post-content";

interface PostBodyProps {
  content: any; // TODO: Especificar tipos
}

export const PostBody: React.FC<PostBodyProps> = ({ content }) => {
  return (
    <div className="max-w-2xl mx-auto my-6 text-lg leading-relaxed">
      <PostContent content={content} />
    </div>
  );
};
