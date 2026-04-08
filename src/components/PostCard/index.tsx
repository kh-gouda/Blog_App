import { useContext } from "react";
import type { Post } from "../../types";
import PostAuthor from "../PostAuthor";
import PostCategory from "../PostCategory";
import PostTitle from "../PostTitle";
import { Link } from "react-router";
import { PostsContext } from "../../contexts/PostsContext";

const PostCard = ({ post }: { post: Post }) => {
  const { setIsSearchResult } = useContext(PostsContext);


  return (
    <article className="post-card">
      <Link className="block" to={`/post/${post.id}`} onClick={() => setIsSearchResult(false)}>
        {post.image && (
          <img
            className="h-60 w-90 max-w-full rounded-xl"
            src={post.image}
            alt={`post-${post.id}-image`}
          />
        )}
        <PostCategory parent="card" postCategory={post.category} />
        <PostTitle type="h3" postTitle={post.title} />
        <PostAuthor
          parent="card"
          postAuthor={post.author}
          datePublished={post.datePublished}
          />
      </Link>
      </article>
  );
};

export default PostCard;
