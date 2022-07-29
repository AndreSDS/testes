import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("TodoFooter", () => {
    
  it("renders the number of incomplete tasks", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const numberOfIncompleteTasks = screen.getByText(/1 task left/i);
    expect(numberOfIncompleteTasks).toBeInTheDocument();
  });

  it("should render 'task' when the number of incomplete tasks is one", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const numberOfIncompleteTasks = screen.getByText(/1 task left/i);
    expect(numberOfIncompleteTasks).toBeInTheDocument();
  });

  it("should render 'tasks' when the number of incomplete tasks is more than one", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={2} />);
    const numberOfIncompleteTasks = screen.getByText(/2 tasks left/i);
    expect(numberOfIncompleteTasks).toBeInTheDocument();
  });
});
