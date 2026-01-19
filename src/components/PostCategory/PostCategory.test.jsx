import { render, screen } from "@testing-library/react";
import PostCategory from "./index";

describe("Post Category Component", () => {
  test("render Post Category with parent {card}", () => {
    render(<PostCategory parent="card" postCategory="Technology" />);

    expect(screen.getByTestId("post-category")).toHaveClass(
      "post-category-card",
    );
    expect(screen.getByText("Technology")).toBeInTheDocument();
  });

  test("render Post Category with parent {undefined}", () => {
    render(<PostCategory postCategory="Technology" />);

    expect(screen.getByTestId("post-category")).toHaveClass(
      "post-category-details",
    );
    expect(screen.getByText("Technology")).toBeInTheDocument();
  });
});
