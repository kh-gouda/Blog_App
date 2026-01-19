import type { ReactNode } from "react";

const PostParagraph = ({ children }: { children: ReactNode }) => {
  return <p className="post-paragraph">{children}</p>;
};

export default PostParagraph;
