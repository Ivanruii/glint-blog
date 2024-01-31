import { lazy, Suspense } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PreviewSuspense } from "next-sanity/preview";
import { postQuery, postSlugsQuery } from "../../lib/queries";
import { getClient, overlayDrafts, sanityClient } from "../../lib/sanity.server";
import { Post, PostProps } from "../../components/post";
import React from "react";

const LazyPostPreview = lazy(() => import("../../components/post-preview"));

const PostPage: NextPage<PostProps> = ({ preview, data }) => {
  if (preview && data?.post) {
    return (
      <PreviewSuspense fallback="Loading...">
        <Suspense fallback="Loading...">
          <LazyPostPreview data={data} />
        </Suspense>
      </PreviewSuspense>
    );
  }

  return <Post data={data} />;
};


export const getStaticProps: GetStaticProps<PostProps> = async ({ params, preview = false }) => {
  const { post, morePosts } = await getClient(preview).fetch(postQuery, {
    slug: params?.slug,
  });

  return {
    props: {
      preview,
      data: {
        post,
        morePosts: overlayDrafts(morePosts),
      },
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(postSlugsQuery);
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
};


export default PostPage;