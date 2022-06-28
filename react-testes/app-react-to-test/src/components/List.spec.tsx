import {
  findByText,
  fireEvent,
  render,
  waitFor,
  waitForElementToBeRemoved,
  screen,
  queryAllByText,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { List } from "../components/List";

describe("List component", () => {
  const user = userEvent.setup();
  const items = ["André", "Bárbara", "Eduardo", "Bernardo"];

  it("should render a list items", async () => {
    const { getByText, rerender, debug } = render(<List initialItems={items} />);

    expect(getByText("André")).toBeInTheDocument();
    expect(getByText("Bárbara")).toBeInTheDocument();
    expect(getByText("Eduardo")).toBeInTheDocument();
    expect(getByText("Bernardo")).toBeInTheDocument();

    rerender(<List initialItems={[]} />);
    debug()
    // expect(("André")).toBeInTheDocument();
    // expect(queryAllByText("Bárbara")).not.toBeInTheDocument();
  });

  it("should be able to add new item at the list", async () => {
    const { getByText, getByPlaceholderText, findByText } = render(
      <List initialItems={[]} />
    );

    const input = getByPlaceholderText("Novo item");
    const button = getByText("Adicionar");

    await user.type(input, "Fulano");
    await user.click(button);

    expect(await findByText("Fulano")).toBeInTheDocument();
  });

  it("should be able to remove item from the list", async () => {
    const { getByText, getAllByText, queryByText } = render(
      <List initialItems={items} />
    );

    const removeButtons = getAllByText("Remover");

    user.click(removeButtons[0]);

    await waitFor(() => {
      expect(queryByText("André")).not.toBeInTheDocument();
    });
  });
});
