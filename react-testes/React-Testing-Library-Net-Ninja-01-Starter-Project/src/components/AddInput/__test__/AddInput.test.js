import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "./AddInput";

const { todos, setTodos } = {
  todos: [
    {
      id: "1",
      task: "Learn React",
      completed: false,
    },
    {
      id: "2",
      task: "Learn Testing",
      completed: false,
    },
  ],
  setTodos: jest.fn(),
};

describe("AddInput", () => {
  it("should render input element", async () => {
    render(<AddInput todos={todos} setTodos={setTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });
});
