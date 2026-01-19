import type { Dispatch, SetStateAction } from "react";

export type Post = {
  id: number;
  image: string;
  title: string;
  category: string;
  author: {
    name: string;
    image: string;
  };
  datePublished: string;
  details: {
    image: string;
    articles: { title: string; quote?: string; paragraphs?: string[] }[];
  };
};

export type ContextTypes = {
  posts: Post[] | null;
  loading: boolean;
  error: string | null;
  setRows: Dispatch<SetStateAction<number>>;
  postsInDisplay: Post[] | null;
  setPostsInDisplay: Dispatch<SetStateAction<Post[] | null>>;
  isAllPostsInDisplay: boolean;
  handleSearch: (searchTerm: string) => void;
  handleHomeNavigation: () => void;
  isSearchResult: boolean;
  setIsSearchResult: Dispatch<SetStateAction<boolean>>;
};

export type PostArticlesTypes = {
  postArticles: { title: string; quote?: string; paragraphs?: string[] }[];
};

export type PostAutherTypes = {
  parent?: string;
  postAuthor: { name: string; image: string };
  datePublished: string;
};

export type PostCategoryTypes = {
  parent?: string;
  postCategory?: string;
};

export type PostTitleTypes = {
  type?: string;
  postTitle?: string;
};
