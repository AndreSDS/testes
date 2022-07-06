import create from "zustand";
import produce, { original } from "immer";

type ProductType = {
  id: number;
  name: string;
  price: number;
};

interface CartStateProps {
  state: {
    open: boolean;
    products: ProductType[];
  };
  actions: {
    toggle: () => void;
    addProduct: (product: ProductType) => void;
    resetStore: () => void;
    removeAllProducts: () => void;
  };
}

const initialState = {
  open: false,
  products: [],
};

export const useCartStore = create<CartStateProps>((set) => {
  return {
    state: { ...initialState },
    actions: {
      toggle: () =>
        set(({ state }) => {
          return { state: { ...state, open: !state.open } };
        }),
      addProduct: (product: ProductType) =>
        set(({ state }) => {
          if (!state.products.includes(product)) {
            state.products.push(product);
          }

          return {
            state: { ...state, open: true },
          };
        }),
      resetStore: () => {
        return set(({state}) => {
            state.open = false;
            state.products = [];
          return { state: { ...state } };
        });
      },
      removeProduct: (product: ProductType) => {
        return set(({ state }) => {
          state.products = state.products.filter((p) => p.id !== product.id);
          return { state: { ...state } };
        });
      },
      removeAllProducts: () => {
        return set(({ state }) => {
          state.products = [];
          return { state: { ...state } };
        });
      },
    },
  };
});
