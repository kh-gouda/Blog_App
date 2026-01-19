import { render, screen } from "@testing-library/react";
import PostTitle from "./index";

describe("Post Title Component", () => {
  test("render Post Title with type {h3}", () => {
    render(<PostTitle type="h3" postTitle={"test title"} />);

    expect(screen.getByTestId("heading-h3")).toBeInTheDocument();
    expect(screen.queryByTestId("heading-h1")).not.toBeInTheDocument();
    expect(screen.getByText("test title")).toBeInTheDocument();
  });

  test("render Post Title with type {undefined}", () => {
    render(<PostTitle postTitle={"test title"} />);

    expect(screen.getByTestId("heading-h1")).toBeInTheDocument();
    expect(screen.queryByTestId("heading-h3")).not.toBeInTheDocument();
    expect(screen.getByText("test title")).toBeInTheDocument();
  });
});
