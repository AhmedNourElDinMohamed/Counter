import { createSlice } from "@reduxjs/toolkit";

//InitialState
const initialState = {
  counter: 0,
};

//Reducer
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increamentCounter: (state, action) => {
      state.counter += action.payload;
    },
    decreamentCounter: (state, action) => {
      if (state.counter > 0) state.counter -= action.payload;
    },
    resetCounter: (state) => {
      state.counter = 0;
    },
  },
});

//Action
export const { increamentCounter } = counterSlice.actions;
export const { decreamentCounter } = counterSlice.actions;
export const { resetCounter } = counterSlice.actions;
