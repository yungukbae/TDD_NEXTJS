import Home from "@/pages/index";
import { render, screen } from "@testing-library/react";

describe("Todo Test", () => {
  it("rendering test", () => {
    render(<Home />);
    screen.findAllByText("test");
  });
});
