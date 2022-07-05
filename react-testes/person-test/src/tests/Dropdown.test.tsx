import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Dropdown } from "../components/Dropdown";

const setup = {
  title: "Selecione seu pokemon",
  options: ["Bulbasaur", "Chamander", "Squitle"],
  onSelect: jest.fn(),
};

const getButton = () => screen.getByRole("button", { name: setup.title });
const getMenuItem = (option: number) =>
  screen.getByRole("menuitem", { name: setup.options[option] });
const getMenu = () => {
  return screen.queryByRole("menu");
};

describe("Dropdown", () => {
  beforeEach(() => {
    render(<Dropdown {...setup} />);
  });

  it("should start closed", () => {
    const menu = getMenu();
    expect(menu).not.toBeInTheDocument();
  });

  it("should show options when opened", async () => {
    const button = getButton();
    const menu = getMenu();
    const user = userEvent.setup();

    expect(menu).not.toBeInTheDocument();

    await user.click(button);

    const menuItemFirst = getMenuItem(0);
    const menuItemSecond = getMenuItem(1);
    const menuItemThird = getMenuItem(2);

    expect(menuItemFirst).toBeInTheDocument();
    expect(menuItemSecond).toBeInTheDocument();
    expect(menuItemThird).toBeInTheDocument();
  });

  it("should close dropdown when an option was selected", async () => {
    const user = userEvent.setup();

    const button = getButton();
    
    await user.click(button);
    
    const menu = getMenu();
    expect(menu).toBeInTheDocument();

    const menuItemFirst = getMenuItem(0);

    await user.click(menuItemFirst);

    expect(setup.onSelect).toHaveBeenCalledWith(setup.options[0]);
    expect(menu).not.toBeInTheDocument();
  });
});
