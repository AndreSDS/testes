import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { ButtonWrapper } from "../components/ButtonWarraper";

describe("ButtonWrapper", () => {
  it("should render the title", async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    const { getByText } = render(
      <ButtonWrapper onClick={onClick} title="Button" />
    );

    const buttonElement = getByText("Button");

    await user.click(buttonElement);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
