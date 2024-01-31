import { indexQuery } from "../lib/queries";
import { getClient, overlayDrafts } from "../lib/sanity.server";
import { PreviewSuspense } from "next-sanity/preview";
import { lazy, Suspense } from "react";
import { Landing } from "../components/landing";
import React from "react";

const LandingPreview = lazy(() => import("../components/landing-preview"));

interface IndexPageProps {
  allPosts: any; // Tipo a definir según la estructura de tus datos
  preview: boolean;
}

const IndexPage: React.FC<IndexPageProps> = ({ allPosts, preview }) => {
  if (preview) {
    return (
      <PreviewSuspense fallback="Loading...">
        <Suspense fallback="Loading...">
          <LandingPreview allPosts={allPosts} />
        </Suspense>
      </PreviewSuspense>
    );
  }

  return <Landing allPosts={allPosts} preview={false} />;
};

export default IndexPage;

export async function getStaticProps({ preview = false }: { preview?: boolean }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery));
  return {
    props: { allPosts, preview },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
