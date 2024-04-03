import { lazy, Suspense } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PreviewSuspense } from "next-sanity/preview";
import { postQuery, postSlugsQuery } from "../../lib/queries";
import {
  getClient,
  overlayDrafts,
  sanityClient,
} from "../../lib/sanity.server";
import { Post, PostProps } from "../../components/post";
import { Meta, MetaProps } from "../../components/meta";
import React from "react";

const LazyPostPreview = lazy(() => import("../../components/post-preview"));

const PostPage: NextPage<PostProps> = ({ preview, data }) => {
  const metaProps: MetaProps = {
    title: data?.post?.title,
    description: data?.post?.excerpt,
  };

  if (preview && data?.post) {
    return (
      <>
        <Meta {...metaProps} />
        <PreviewSuspense fallback="Loading...">
          <Suspense fallback="Loading...">
            <LazyPostPreview data={data} />
          </Suspense>
        </PreviewSuspense>
      </>
    );
  }

  return (
    <>
      <Meta {...metaProps} />
      <Post data={data} />
    </>
  );
};

export const getStaticProps: GetStaticProps<PostProps> = async ({
  params,
  preview = false,
}) => {
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
