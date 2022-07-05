import { renderHook, act } from "@testing-library/react-hooks";

import { useCounter } from "../hooks/useCounter";

describe("useCounter", () => {
  test("should increment the count", () => {
    const { increment, count } = renderHook(() => useCounter()).result.current;

    act(() => {
      increment();
    });

    expect(count).toBe(1);
  });
});
