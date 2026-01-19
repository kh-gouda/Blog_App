import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import PostCard from "./index";
import { PostsContext } from "../../contexts/PostsContext";

const mockPost = {
  id: 10,
  title: "Testing React Components",
  category: "Testing",
  image: "/assets/test-image.png",
  datePublished: "2024-01-01",
  author: {
    name: "Khaled",
    image: "/assets/test-image.png",
  },
};

const mockSetIsSearchResult = vi.fn();

const renderWithContext = (post) => {
  render(
    <MemoryRouter>
      <PostsContext.Provider
        value={{
          setIsSearchResult: mockSetIsSearchResult,
        }}
      >
        <PostCard post={post} />
      </PostsContext.Provider>
    </MemoryRouter>,
  );
};

describe("PostCard", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("render title, category, and author correctly", () => {
    renderWithContext(mockPost);

    expect(screen.getByText("Testing React Components")).toBeInTheDocument();

    expect(screen.getByText("Testing React Components")).toBeInTheDocument();

    expect(screen.getByText("Khaled")).toBeInTheDocument();
  });

  test("links to correct post route", () => {
    renderWithContext(mockPost);

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/post/10");
  });

  test("calls setIsSearchResult(false) when clicked", () => {
    renderWithContext(mockPost);

    const link = screen.getByRole("link");

    fireEvent.click(link);

    expect(mockSetIsSearchResult).toHaveBeenCalledTimes(1);
    expect(mockSetIsSearchResult).toHaveBeenCalledWith(false);
  });
});
