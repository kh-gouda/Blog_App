import { render, screen, fireEvent } from "@testing-library/react";
import SearchForm from "./index";
import { PostsContext } from "../../contexts/PostsContext";
import { MemoryRouter } from "react-router";

const mockPosts = [
  {
    id: 1,
    title: "React Testing Guide",
    category: "Testing",
    author: { name: "Khaled" },
  },
  {
    id: 2,
    title: "Vitest Tutorial",
    category: "JavaScript",
    author: { name: "Ahmed" },
  },
];

const mockHandleSearch = vi.fn();

const contextValue = {
  posts: mockPosts,
  handleSearch: mockHandleSearch,
};

describe("SearchForm Component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  beforeEach(() => {
    render(
      <MemoryRouter>
        <PostsContext.Provider value={contextValue}>
          <SearchForm />
        </PostsContext.Provider>
      </MemoryRouter>,
    );
  });

  test("search empty input", () => {
    const form = screen.getByTestId("search-form");

    fireEvent.submit(form);

    expect(mockHandleSearch).not.toHaveBeenCalled();
  });

  test("input change", () => {
    const input = screen.getByPlaceholderText("Search...");

    fireEvent.change(input, { target: { value: "react" } });

    expect(input).toHaveValue("react");
  });

  test("search when value exists", () => {
    const input = screen.getByPlaceholderText("Search...");
    const form = screen.getByTestId("search-form");

    fireEvent.change(input, { target: { value: "react" } });
    fireEvent.submit(form);

    expect(mockHandleSearch).toHaveBeenCalledTimes(1);
    expect(mockHandleSearch).toHaveBeenCalledWith("react");
    expect(input).toHaveValue("");
  });

  test("search with value that returns empty results", () => {
    const input = screen.getByPlaceholderText("Search...");
    const form = screen.getByTestId("search-form");

    fireEvent.change(input, { target: { value: "NON_EXISTENT" } });
    fireEvent.submit(form);

    expect(mockHandleSearch).toHaveBeenCalledWith("NON_EXISTENT");
  });
});
