import "@testing-library/jest-dom";
import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "../components/Counter";

describe("Counter", () => {
  it("should render the title", async () => {
    const user = userEvent.setup();

    const { getByText, getByRole } = render(<Counter />);

    const divElement = getByRole("contentinfo");
    const buttonElement = getByText("Add one");

    await user.click(buttonElement);

    expect(divElement).toHaveTextContent("Count is 1");
  });
});
