import { render, screen, fireEvent } from "@testing-library/react";
import LoadMoreButton from "./index";
import { PostsContext } from "../../contexts/PostsContext";

const mockSetRows = vi.fn();

const renderWithContext = (isAllPostsInDisplay) => {
  render(
    <PostsContext.Provider
      value={{
        isAllPostsInDisplay,
        setRows: mockSetRows,
      }}
    >
      <LoadMoreButton />
    </PostsContext.Provider>,
  );
};

describe("LoadMoreButton", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('render "Load More" when all posts are not displayed', () => {
    renderWithContext(false);

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Load More");
  });

  test('render "Load Less" when all posts are displayed', () => {
    renderWithContext(true);

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Load Less");
  });

  test("call setRows with updater function when clicking Load More", () => {
    renderWithContext(false);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(mockSetRows).toHaveBeenCalledTimes(1);
    expect(mockSetRows).toHaveBeenCalledWith(expect.any(Function));
    const updater = mockSetRows.mock.calls[0][0];
    expect(updater(3)).toBe(4);
  });

  test("call setRows(3) when clicking Load Less", () => {
    renderWithContext(true);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(mockSetRows).toHaveBeenCalledTimes(1);
    expect(mockSetRows).toHaveBeenCalledWith(3);
  });
});
