import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { SideBar } from "../components/SideBar";

const setup = {
  items: [
    {
      name: "André",
      href: "https://www.andre.com",
    },
    {
      name: "André2",
      href: "https://www.andre2.com",
    },
    {
      name: "André3",
      href: "https://www.andre3.com",
    },
  ],
};

describe("SideBar", () => {
  it("should render items", () => {
    render(<SideBar items={setup.items} />);

    const anchorElements = screen.getAllByRole("navigation");
    
    expect(anchorElements[0]).toHaveTextContent(setup.items[0].name);
    expect(anchorElements[0]).toHaveAttribute("href", setup.items[0].href);
  });
});
