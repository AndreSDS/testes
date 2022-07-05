import "whatwg-fetch";
import { render, waitFor, screen } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";

import { useApi } from "../hooks/useApi";

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(
      ctx.json({
        name: "André",
      })
    );
  })
);

describe("useApi", () => {
  beforeAll(() => server.listen());
  afterAll(() => server.resetHandlers());
  afterAll(() => server.close());

  it("should fetch data", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useApi());

    await waitForNextUpdate();

    expect(result.current).toEqual({ name: "André" });
  });
});
