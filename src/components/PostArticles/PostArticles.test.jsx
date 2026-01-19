const { screen, render } = require("@testing-library/react");
import PostArticles from "./index";

const mockPostArticles = [
  {
    title: "Research Your Destination",
    paragraphs: [
      "Before embarking on your journey, take the time ....",
    ],
  },
];

test("initial render", () => {
  render(<PostArticles postArticles={mockPostArticles} />);
  expect(screen.getByText("Research Your Destination")).toBeInTheDocument();
  expect(screen.getByText("Before embarking on your journey, take the time ....")).toBeInTheDocument();
  expect(screen.queryByText("Plan Your Itinerary")).not.toBeInTheDocument();
});
