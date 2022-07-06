import React from "react";
import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { useCartStore } from ".";

describe("useCartStore", () => {
  let result: any;

  beforeEach(() => {
    result = renderHook(() => useCartStore()).result;
  });

  afterEach(() => {
    act(() => {
      result.current.actions.resetStore();
    });
  });

  it("should return state.open equals false", () => {
    expect(result.current.state.open).toBe(false);
  });

  it("should return state.open equals false", () => {
    expect(result.current.state.open).toBe(false);

    act(() => {
      result.current.actions.toggle();
    });

    expect(result.current.state.open).toBe(true);

    act(() => {
      result.current.actions.toggle();
    });

    expect(result.current.state.open).toBe(false);
  });

  it("should add products and open the cart", () => {
    const products = [
      {
        id: 1,
        name: "Product 1",
        price: 10,
      },
      {
        id: 2,
        name: "Product 2",
        price: 20,
      },
    ];

    expect(result.current.state.open).toBe(false);
    expect(result.current.state.products).toHaveLength(0);

    act(() => {
      for (const product of products) {
        result.current.actions.addProduct(product);
      }
    });

    expect(result.current.state.products).toHaveLength(products.length);
    expect(result.current.state.open).toBe(true);
  });

  it("should NOT add same product twice", () => {
    const product = {
      id: 3,
      name: "Product 1",
      price: 10,
    };

    expect(result.current.state.products).toHaveLength(0);

    act(() => {
      result.current.actions.addProduct(product);
      result.current.actions.addProduct(product);
    });

    expect(result.current.state.products).toHaveLength(1);
  });

  it("should remove a product", () => {
    const products = [
      {
        id: 4,
        name: "Product 1",
        price: 10,
      },
      {
        id: 5,
        name: "Product 2",
        price: 20,
      },
    ];

    act(() => {
      for (const product of products) {
        result.current.actions.addProduct(product);
      }
    });

    expect(result.current.state.products).toHaveLength(2);

    act(() => {
      result.current.actions.removeProduct(products[0]);
    });

    expect(result.current.state.products).toHaveLength(1);
  });

  it("should remove ao products", () => {
    act(() => {
      result.current.actions.removeAllProducts();
    });

    expect(result.current.state.products).toHaveLength(0);
  });
});
