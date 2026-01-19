import { useEffect, useEffectEvent, useState, type ReactNode } from "react";
import type { Post } from "../types";
import { PostsContext } from "./PostsContext";

const PostsContextProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [rows, setRows] = useState<number>(3);

  const [postsInDisplay, setPostsInDisplay] = useState<Post[] | null>(null);
  const isAllPostsInDisplay = postsInDisplay?.length === posts?.length;

  const [isSearchResult, setIsSearchResult] = useState<boolean>(false);

  const fetchPosts = useEffectEvent(async () => {
    try {
      setLoading(true);
      const response = await fetch("/posts.json");
      const data: Post[] = await response.json();
      setPosts(data);
      setPostsInDisplay(data.slice(0, rows * 3));
    } catch {
      setError("Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (posts) {
      setPostsInDisplay(posts.slice(0, rows * 3));
    }
  }, [rows, posts]);

  const handleSearch = (searchTerm: string) => {
    if (!posts) return;
    const filteredPosts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setPostsInDisplay(filteredPosts);
    setIsSearchResult(true);
  };

  const handleHomeNavigation = () => {
    setIsSearchResult(false);
    if (!posts) return;
    setPostsInDisplay(posts.slice(0, rows * 3));
  };

  return (
    <PostsContext.Provider
      value={{
        posts,
        loading,
        error,
        setRows,
        postsInDisplay,
        setPostsInDisplay,
        isAllPostsInDisplay,
        handleSearch,
        handleHomeNavigation,
        isSearchResult,
        setIsSearchResult,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
