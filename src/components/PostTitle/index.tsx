import type { PostTitleTypes } from "../../types";

const PostTitle = ({ type, postTitle }: PostTitleTypes) => {
  return (
    <>
      {type === "h3" ? (
        <h3
          className="post-title text-2xl max-[500px]:text-xl"
          data-testid="heading-h3"
        >
          {postTitle}
        </h3>
      ) : (
        <h1
          className="post-title text-4xl max-[500px]:text-2xl"
          data-testid="heading-h1"
        >
          {postTitle}
        </h1>
      )}
    </>
  );
};

export default PostTitle;
