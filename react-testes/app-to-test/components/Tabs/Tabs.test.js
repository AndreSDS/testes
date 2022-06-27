import { render, fireEvent } from "@testing-library/react";
import React from "react";
import ReactDom from "react-dom";
import "@testing-library/jest-dom";
import { Tabs } from "../Tabs";

import { useRouter } from "next/router";

jest.mock("next/router");

describe("Tabs", () => {
  useRouter.mockReturnValue({
    push: () => {},
  });

  const tabsComponent = render(
    <Tabs initialTab={{ tab: "tab-3" }}>
      <div label="Tab 1">Somthing</div>
      <div label="Tab 2">Somthing</div>
      <div label="Tab 3">Somthing</div>
    </Tabs>
  );

  test("<Tabs /> matches snapshot", () => {
    expect(tabsComponent.container).toMatchSnapshot();
  });

  test("<Tabs /> renders without crashing", () => {
    const div = document.createElement("div");
    render(
      <Tabs initialTab={{ tab: "tab-3" }}>
        <div label="Tab 1">Somthing</div>
        <div label="Tab 2">Somthing</div>
        <div label="Tab 3">Somthing</div>
      </Tabs>,
      div
    );
  });

  test("Default to the first tab's content", () => {
    const div = document.createElement("div");

    const { getByTestId } = render(
      <Tabs>
        <div label="Tab 1">Somthing</div>
        <div label="Tab 2">Somthing</div>
        <div label="Tab 3">Somthing</div>
      </Tabs>,
      div
    );

    const content = getByTestId("content");

    expect(content.textContent).toBe("Somthing");
  });

  test("Can set a different tab as the initail state", () => {
    const div = document.createElement("div");

    const { getByTestId } = render(
      <Tabs initialTab={{ tab: "tab-3" }}>
        <div label="Tab 1">Somthing</div>
        <div label="Tab 2">Somthing</div>
        <div label="Tab 3">Hello</div>
      </Tabs>,
      div
    );

    const content = getByTestId("content");
    expect(content.textContent).toBe("Hello");
  });

  test("Click from one tab to the next", () => {
    const div = document.createElement("div");

    const { getByTestId, getByText } = render(
      <Tabs initialTab={{ tab: "tab-3" }}>
        <div label="Tab 1">Somthing</div>
        <div label="Tab 2">Somthing</div>
        <div label="Tab 3">Hello</div>
      </Tabs>,
      div
    );

    const li = getByTestId("tab-3");
    expect(li).toHaveClass("current");

    const differentTab = getByText("Tab 2");
    fireEvent.click(differentTab);

    const differentLi = getByTestId("tab-2");

    expect(differentLi).toHaveClass("current");
  });
});
