import Head from "next/head";
import React from "react";
import { Container, HeroPost, Intro, MoreStories } from "./";
import { Layout } from "./layout";
import CookieConsent from "./cookies";

interface LandingProps {
  allPosts: any[]; // TODO: Especificar tipos
  preview: boolean;
}

export const Landing: React.FC<LandingProps> = ({ allPosts, preview }) => {
  const [heroPost, ...morePosts] = allPosts || [];
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`Glint Blog`}</title>
        </Head>
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
    </>
  );
};
