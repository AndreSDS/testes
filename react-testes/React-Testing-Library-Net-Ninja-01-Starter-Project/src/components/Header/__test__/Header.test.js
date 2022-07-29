import React from "react";
import { render, screen } from "@testing-library/react";

import Header from "../Header";

describe("Header", () => {
  it("should render a heading element with same text passed into title prop", () => {
    render(<Header title="Test Title" />);
    const headingElement = screen.getByRole("heading", { name: /Test Title/i });
    expect(headingElement).toBeInTheDocument();
  });
});
