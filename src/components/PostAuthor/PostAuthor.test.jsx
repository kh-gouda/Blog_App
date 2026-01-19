import { render, screen } from "@testing-library/react";
import PostAuthor from "./index";

const mockPost = {
  author: {
    name: "Tracey Wilson",
    image: "/src/assets/images/authors/Tracey_Wilson.png",
  },
  datePublished: "August 20, 2022",
};

describe("Post Author Component", () => {
  test("render Post Author with parent {card}", async () => {
    render(
      <PostAuthor
        parent="card"
        postAuthor={mockPost.author}
        datePublished={mockPost.datePublished}
      />,
    );
    expect(screen.getByTestId("post-author")).toHaveClass("post-author-card");
    expect(await screen.findByRole("img")).toBeInTheDocument();
    expect(screen.getByText("Tracey Wilson")).toBeInTheDocument();
    expect(screen.getByText("August 20, 2022")).toBeInTheDocument();
  });

  test("render Post Author with parent {undefined}", async () => {
    render(
      <PostAuthor
        postAuthor={mockPost.author}
        datePublished={mockPost.datePublished}
      />,
    );
    expect(screen.getByTestId("post-author")).toHaveClass(
      "post-author-details",
    );
    expect(await screen.findByRole("img")).toBeInTheDocument();
    expect(screen.getByText("Tracey Wilson")).toBeInTheDocument();
    expect(screen.getByText("August 20, 2022")).toBeInTheDocument();
  });
});
