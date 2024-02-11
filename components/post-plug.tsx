import { CardProps, Card } from "./card";

interface PostPlugProps extends CardProps { }

export const PostPlug: React.FC<PostPlugProps> = (props) => {
  return <Card {...props} />;
};