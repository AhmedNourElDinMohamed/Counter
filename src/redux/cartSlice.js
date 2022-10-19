import { createSlice } from "@reduxjs/toolkit";

//InitialState
const initialState = {
  counter: 0,
  productList: [],
};

//Reducer
export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increamentCartCounter: (state, action) => {
      state.counter += action.payload;
    },
    decrementCartCounter: (state, action) => {
      state.counter -= action.payload;
    },
    addProduct: (state, action) => {
      if (!state.productList.length) {
        console.log("hhhhhhhhhh");
        console.log(action.payload);
        action.payload.quant = 1;
        state.productList.push(action.payload);
        console.log("with prop", action.payload);
        --action.payload.rating.count;
      } else {
        state.productList.forEach((product) => {
          if (action.payload.id === product.id) {
            console.log(product.rating.count);
            --product.rating.count;
            ++product.quant;
            console.log(product.rating.count);
          }
        });
      }
      if (
        !state.productList.some((product) => {
          return action.payload.id === product.id;
        })
      ) {
        action.payload.quant = 1;
        state.productList.push(action.payload);
      }
    },
    removeProduct: (state, action) => {
      state.productList = state.productList.filter((product) => {
        return product.id !== action.payload.id;
      });
      state.counter -= action.payload.quant;
    },
  },
});

//Action
export const { increamentCartCounter } = cartSlice.actions;
export const { decrementCartCounter } = cartSlice.actions;
export const { addProduct } = cartSlice.actions;
export const { removeProduct } = cartSlice.actions;
console.log(cartSlice);
