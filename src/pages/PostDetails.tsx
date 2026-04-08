import { useParams } from "react-router";
import { useContext } from "react";
import PostCategory from "../components/PostCategory";
import PostTitle from "../components/PostTitle";
import PostAuthor from "../components/PostAuthor";
import PostArticles from "../components/PostArticles";
import { PostsContext } from "../contexts/PostsContext";

const PostDetails = () => {
  const { posts } = useContext(PostsContext);
  const postId = Number(useParams().id);

  const post = posts?.find((p) => p.id === postId);
  

  return (
    <div className="mx-auto w-200 max-w-full py-8 max-[850px]:px-4">
      {post && (
        <>
          <PostCategory postCategory={post.category} />
          <PostTitle type="h1" postTitle={post.title} />
          <PostAuthor
            postAuthor={post.author}
            datePublished={post.datePublished}
          />
          {post?.details?.image && (
            <img
              className="my-8 rounded-xl"
              src={post.details.image}
              alt={`post-${post.id}-image`}
            />
          )}
          <PostArticles postArticles={post.details.articles} />
        </>
      )}
    </div>
  );
};

export default PostDetails;
