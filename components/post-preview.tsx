import { postQuery } from "../lib/queries";
import { usePreview } from "../lib/sanity";
import { Post } from "./";

interface PostPreviewProps {
  data: any; // TODO: Especificar tipos
}

const PostPreview: React.FC<PostPreviewProps> = ({ data }) => {
  const slug = data?.post?.slug;
  const previewData = usePreview(null, postQuery, { slug });
  return <Post data={previewData ?? data} preview />;
};

export default PostPreview;