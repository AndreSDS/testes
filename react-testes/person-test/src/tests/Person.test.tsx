import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Person } from "../components/Person";

describe("Person", () => {
  it("should render name", () => {
    render(<Person name="André" />);

    const divElement = screen.getByRole("content");

    expect(divElement).toHaveTextContent("Name is André");
    expect(divElement).toHaveAttribute("role", 'content');
  });
});
