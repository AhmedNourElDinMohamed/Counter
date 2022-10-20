import { createSlice } from "@reduxjs/toolkit";

//InitialState
const initialState = {
  login: false,
};

//Reducer
export const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state) => {
      state.login = true;
    },
    logout: (state) => {
      state.login = false;
    },
  },
});

//Action
export const { login } = authSlice.actions;
export const { logout } = authSlice.actions;
