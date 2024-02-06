import React from "react";
import { indexQuery } from "../lib/queries";
import { usePreview } from "../lib/sanity";
import { Landing } from "./";

interface LandingPreviewProps {
  allPosts: any; // TODO: Especificar tipos
}

const LandingPreview: React.FC<LandingPreviewProps> = ({ allPosts }) => {
  const previewAllPosts = usePreview(null, indexQuery);
  return <Landing allPosts={previewAllPosts ?? allPosts} preview />;
};

export default LandingPreview;