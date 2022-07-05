import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Dropdown } from "../components/Dropdown";

const setup = {
  title: "Selecione seu pokemon",
  options: ["Bulbasaur", "Chamander", "Squitle"],
  onSelect: jest.fn(),
};

describe("Dropdown", () => {
  beforeEach(() => {
    render(<Dropdown {...setup} />);
  });

  it("should start closed", () => {
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("should show options when opened", async () => {
    const button = screen.getByRole("button", { name: setup.title });
    const user = userEvent.setup();

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();

    await user.click(button);

    expect(
      screen.getByRole("menuitem", { name: setup.options[0] })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: setup.options[1] })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: setup.options[2] })
    ).toBeInTheDocument();
  });

  it("should close dropdown when an option was selected", async () => {
    const user = userEvent.setup();
    
    const button = screen.getByRole("button", { name: setup.title });

    await user.click(button);
    
    expect(screen.queryByRole("menu")).toBeInTheDocument();

    const menuItem = screen.getByRole("menuitem", { name: setup.options[0] });

    await user.click(menuItem);
    
    expect(setup.onSelect).toHaveBeenCalledWith(setup.options[0]);
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

});
