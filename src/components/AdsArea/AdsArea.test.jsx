const { screen, render } = require("@testing-library/react");
import AdsArea from "./index";

test("initial render", () => {
  render(<AdsArea />);
  expect(screen.getByText("Advertisement")).toBeInTheDocument();
  expect(screen.getByText("You can place ads")).toBeInTheDocument();
  expect(screen.getByText("750x100")).toBeInTheDocument();
});
