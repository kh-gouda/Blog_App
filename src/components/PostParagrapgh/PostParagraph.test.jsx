import { render, screen } from "@testing-library/react";
import PostParagraph from "./index";

test("render Post Paragraph", () => {
  render(<PostParagraph>Test Paragraph</PostParagraph>);

  expect(screen.getByText("Test Paragraph")).toBeInTheDocument();
});
