import Home from "@/pages/index";
import { render, screen } from "@testing-library/react";

describe("Todo Test", () => {
  it("ui test", async () => {
    render(<Home />);
    await screen.findByText(/todo list/i);
    await screen.findByText(/first task/i);
    await screen.findByRole("textbox");
    const checkEl = await screen.findByRole("checkbox");
    expect(checkEl).not.toBeChecked();
  });
});
