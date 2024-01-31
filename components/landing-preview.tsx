import React from "react";
import { usePreview } from "../lib/sanity";
import { indexQuery } from "../lib/queries";
import { Landing } from "./landing";

interface LandingPreviewProps {
  allPosts: any; // TODO: Especificar tipos
}

const LandingPreview: React.FC<LandingPreviewProps> = ({ allPosts }) => {
  const previewAllPosts = usePreview(null, indexQuery);
  return <Landing allPosts={previewAllPosts ?? allPosts} preview />;
};

export default LandingPreview;