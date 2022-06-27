import { slugify } from "../slugfy";

describe("slugfy", () => {
  it("should be converts a string to a slug", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });
});
