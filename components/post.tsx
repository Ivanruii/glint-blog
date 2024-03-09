import ErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";
import { CMS_NAME } from "../lib/constants";
import { urlForImage } from "../lib/sanity";
import { Container, Header, Layout, MoreStories, PostBody, PostHeader, PostTitle, SectionSeparator } from "./";

export interface PostProps {
  data?: {
    post: {
      excerpt: string;
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
      content: any; // TODO: Especificar tipos
    };
    morePosts: any[]; // TODO: Especificar tipos
  };
  preview?: boolean;
}

export const Post: React.FC<PostProps> = ({ data, preview = false }) => {
  const router = useRouter();
  if (!data) {
    return <ErrorPage statusCode={404} />;
  }
  const { post, morePosts } = data;
  const slug = post?.slug;

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {`${post?.title} | Next.js Blog Example with ${CMS_NAME}`}
                </title>
                {post?.coverImage?.asset?._ref && (
                  <meta
                    key="ogImage"
                    property="og:image"
                    content={urlForImage(post.coverImage)
                      .width(1200)
                      .height(627)
                      .fit("crop")
                      .url()}
                  />
                )}
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post?.content} />
            </article>
            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  );
};
