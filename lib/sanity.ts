import createImageUrlBuilder from "@sanity/image-url";
import { definePreview, PreviewConfig } from "next-sanity/preview";
import { sanityConfig as config } from "./config";

export const imageBuilder = createImageUrlBuilder(config);
interface urlForImageProps {
  asset?: {
    _ref?: string;
  };
}

export const urlForImage = (source: urlForImageProps) =>
  imageBuilder.image(source).auto("format").fit("max");

export const usePreview = definePreview({
  projectId: config.projectId,
  dataset: config.dataset,
});
