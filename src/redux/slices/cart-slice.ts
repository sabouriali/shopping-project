import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { type CartItem } from "../../types/productType";

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<number>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].qty++;
      } else {
        state.items.push({ id: action.payload, qty: 1 });
      }
    },
    deleteItemFromCart(state, action: PayloadAction<number>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      state.items.splice(itemIndex, 1);
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (state.items[itemIndex].qty === 1) {
        state.items.splice(itemIndex, 1);
      } else {
        state.items[itemIndex].qty--;
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, clearCart, deleteItemFromCart, removeFromCart } =
  cartSlice.actions;

export function getProductQty(state: CartItem[], id: number) {
  const qty = state.find((item) => item.id === id)?.qty;

  if (qty === undefined) {
    return 0;
  } else {
    return qty;
  }
}

export function getCartQty(state: CartItem[]) {
  const cartQty = state.reduce((acc, cur) => acc + cur.qty, 0);

  return cartQty;
}
