import PostCard from "../components/PostCard";
import LoadMoreButton from "../components/LoadMoreButton";
import { PostsContext } from "../contexts/PostsContext";
import { useContext } from "react";

const Home = () => {
  const { postsInDisplay, loading, error, isSearchResult } =
    useContext(PostsContext);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="home-page">
        {postsInDisplay?.length
          ? postsInDisplay.map((post) => <PostCard key={post.id} post={post} />)
          : isSearchResult && (
              <div className="text-red-500">No posts match your search.</div>
            )}
      </div>
      {!isSearchResult && (
        <div className="text-center">
          <LoadMoreButton />
        </div>
      )}
    </>
  );
};
export default Home;
