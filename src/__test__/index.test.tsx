import Home from "@/pages/index";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Todo Test", () => {
  it("input test", async () => {
    render(<Home />);
    const inputEl = await screen.getByRole("textbox");
    const addBtn = await screen.getByRole("button", { name: "addBtn" });
    await userEvent.type(inputEl, "test task");
    await userEvent.click(addBtn);
    expect(inputEl).toHaveValue("");
    await screen.getByText(/test task/i);
    const taskTxt = await screen.getByText(/test task/i);
    const checkBox = await screen.getAllByRole("checkbox");
    const delBtn = await screen.getAllByRole("button");
    await userEvent.click(checkBox[1]);
    expect(checkBox[1]).toBeChecked();
    expect(taskTxt).toHaveClass("line-through");
    await userEvent.click(delBtn[2]);
    expect(taskTxt).not.toBeInTheDocument();
  });
});
