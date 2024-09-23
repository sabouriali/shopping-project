import { configureStore } from "@reduxjs/toolkit";

import { themeSlice } from "../slices/theme-slice";
import { cartSlice } from "../slices/cart-slice";

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
