import type { PostCategoryTypes } from "../../types";

const PostCategory = ({ parent, postCategory }: PostCategoryTypes) => {
  return (
    <span
      className={`post-category-main ${
        parent === "card" ? "post-category-card" : "post-category-details"
      }`}
      data-testid="post-category"
    >
      {postCategory}
    </span>
  );
};

export default PostCategory;
