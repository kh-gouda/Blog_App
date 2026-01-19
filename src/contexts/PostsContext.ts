import { createContext } from "react";
import type { ContextTypes } from "../types";

export const PostsContext = createContext<ContextTypes>({
  posts: null,
  loading: false,
  error: null,
  setRows: () => {},
  postsInDisplay: null,
  setPostsInDisplay: () => {},
  isAllPostsInDisplay: false,
  handleSearch: () => {},
  handleHomeNavigation: () => {},
  isSearchResult: false,
  setIsSearchResult: () => {},
});
