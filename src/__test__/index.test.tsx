import Home from "@/pages/index";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Todo Test", () => {
  it("ui test", async () => {
    render(<Home />);
    await screen.findByText(/todo list/i);
    await screen.findByText(/first task/i);
    await screen.findByRole("textbox");
    const checkEl = await screen.findByRole("checkbox");
    expect(checkEl).not.toBeChecked();
  });

  it("input test", async () => {
    render(<Home />);
    const inputEl = await screen.findByRole("textbox");
    await userEvent.click(inputEl);
    await userEvent.type(inputEl, "input test");
    await screen.getByDisplayValue(/input test/);
    await userEvent.keyboard("{Enter}");
    expect(inputEl).toHaveValue("");
  });
});
