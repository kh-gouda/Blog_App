import { useContext, useEffect, useState } from "react";
import type { Post } from "../../types";
import PostAuthor from "../PostAuthor";
import PostCategory from "../PostCategory";
import PostTitle from "../PostTitle";
import { Link } from "react-router";
import { PostsContext } from "../../contexts/PostsContext";

const PostCard = ({ post }: { post: Post }) => {
  const [postImage, setPostImage] = useState<string>("");
  const { setIsSearchResult } = useContext(PostsContext);

  useEffect(() => {
    const loadImage = async () => {
      const imageModule = await import(/* @vite-ignore */ `${post.image}`);
      setPostImage(imageModule.default);
    };
    loadImage();
  }, [post.image]);

  return (
    <article className="post-card">
      <Link className="block" to={`/post/${post.id}`} onClick={() => setIsSearchResult(false)}>
        {postImage && (
          <img
            className="h-60 w-90 max-w-full rounded-xl"
            src={postImage}
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
