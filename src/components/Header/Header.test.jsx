import { render, screen } from "@testing-library/react";
import Header from "./index";
import { MemoryRouter } from "react-router";

test("render Header component", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );
  expect(screen.getByAltText("Logo")).toBeInTheDocument();
  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  expect(screen.getByAltText("Search")).toBeInTheDocument();
});
