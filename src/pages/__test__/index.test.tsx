import Home from "@/pages/index";
import { render, screen } from "@testing-library/react";

describe("Todo Test", () => {
  it("ui test", () => {
    render(<Home />);

    screen.findAllByText(/todo list/i);
    screen.findByRole("textbox");
    screen.findByRole("button");
  });
});
