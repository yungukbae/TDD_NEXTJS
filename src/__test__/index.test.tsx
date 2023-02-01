import Home from "@/pages/index";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Todo Test", () => {
  it("ui test", async () => {
    render(<Home />);
  });

  it("input test", async () => {
    render(<Home />);
  });

  it("checkbox Test", async () => {
    render(<Home />);
  });
});
