import { createSlice } from "@reduxjs/toolkit";

const token = sessionStorage.getItem("token");

const initialState = {
  isLogin: token ? true : false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin(state) {
      state.isLogin = true;
    },
    setLogout(state) {
      state.isLogin = false;
      sessionStorage.removeItem("token");
    },
  },
});

export const { setLogin, setLogout } = loginSlice.actions;
