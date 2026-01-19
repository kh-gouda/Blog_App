import { render, screen } from "@testing-library/react";
import BlockQuote from "./index";

test("render blockquote with children", () => {
  render(<BlockQuote>Test Quote</BlockQuote>);
  expect(screen.getByText("Test Quote")).toBeInTheDocument();
  expect(screen.getByAltText("quoteImage")).toBeInTheDocument();
});
