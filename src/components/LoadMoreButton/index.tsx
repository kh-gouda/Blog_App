import { useContext } from "react";
import { PostsContext } from "../../contexts/PostsContext";

const LoadMoreButton = () => {
  const { isAllPostsInDisplay, setRows } = useContext(PostsContext);

  const handleClick = () => {
    if (isAllPostsInDisplay) {
      setRows(3);
    } else {
      setRows((prev) => prev + 1);
    }
  };

  return (
    <button className="load-more-button" onClick={handleClick}>
      {isAllPostsInDisplay ? "Load Less" : "Load More"}
    </button>
  );
};

export default LoadMoreButton;
