import 'whatwg-fetch'
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";

import { ApiComponent } from "../components/ApiComponent";

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(
      ctx.json({
        name: "André",
      })
    );
  })
);

describe("ApiComponent", () => {
  beforeAll(() => server.listen());
  afterAll(() => server.resetHandlers());
  afterAll(() => server.close());

  it("gets the data", async () => {
    const { getByRole } = render(<ApiComponent />);

    const outData = await waitFor(() => getByRole("contentinfo"));

    expect(outData).toHaveTextContent("Name is André");
  });
});
