import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { type CartItem } from "../../types/productType";

type CartState = {
  items: CartItem[];
};

const localCart = localStorage.getItem("cart");

const initialState: CartState = {
  items: localCart ? JSON.parse(localCart) : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<{ id: number; price: number }>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].qty++;
        localStorage.setItem("cart", JSON.stringify(state.items));
      } else {
        state.items.push({
          id: action.payload.id,
          price: action.payload.price,
          qty: 1,
        });
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    deleteItemFromCart(state, action: PayloadAction<number>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      state.items.splice(itemIndex, 1);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (state.items[itemIndex].qty === 1) {
        state.items.splice(itemIndex, 1);
        localStorage.setItem("cart", JSON.stringify(state.items));
      } else {
        state.items[itemIndex].qty--;
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    clearCart(state) {
      state.items = [];
      localStorage.setItem("cart", JSON.stringify(state.items));
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

export function getTotalPrice(state: CartItem[]) {
  const totalPrice = state.reduce((acc, cur) => acc + cur.price * cur.qty, 0);

  return totalPrice;
}
