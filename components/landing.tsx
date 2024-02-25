import { AllPost } from "@/types/types";
import React from "react";
import { Container, CookieConsent, HeroPost, Intro, Layout, MoreStories } from "./";

interface LandingProps {
  allPosts: AllPost[];
  preview: boolean;
}

export const Landing: React.FC<LandingProps> = ({ allPosts, preview }) => {
  const [heroPost, ...morePosts] = allPosts || [];
  return (
    <Layout preview={preview}>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        <CookieConsent />
      </Container>
    </Layout>
  );
};
