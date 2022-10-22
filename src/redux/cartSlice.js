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
      // Reducer To Add Product To Cart
      if (!state.productList.length) {
        // To Add The First Product To Cart
        action.payload.quant = 1;
        state.productList.push(action.payload);
        console.log("with prop", action.payload);
        --action.payload.rating.count;
      } else {
        state.productList.forEach((product) => {
          //Check If Product In Cart Or Not To Increament Quantity Without Push It
          if (action.payload.id === product.id) {
            --product.rating.count;
            ++product.quant;
          }
        });
      }
      if (
        // If Product Not Includes In Cart Push It
        !state.productList.some((product) => {
          return action.payload.id === product.id;
        })
      ) {
        action.payload.quant = 1;
        state.productList.push(action.payload);
      }
    },
    removeProduct: (state, action) => {
      // Remove Product From Cart And Decrease Counter
      state.productList = state.productList.filter((product) => {
        return product.id !== action.payload.id;
      });
      state.counter -= action.payload.quant;
    },
    // Increament Quantity
    increamentProductQuant: (state, action) => {
      const itemIndex = state.productList.findIndex(
        (product) => product.id === action.payload.product.id
      );
      state.productList[itemIndex].quant += 1;
      state.counter += 1;
    },
    decreamentProductQuant: (state, action) => {
      const itemIndex = state.productList.findIndex(
        (product) => product.id === action.payload.product.id
      );
      state.productList[itemIndex].quant -= 1;
      state.counter -= 1;
    },
  },
});

//Action
export const { increamentCartCounter } = cartSlice.actions;
export const { decrementCartCounter } = cartSlice.actions;
export const { addProduct } = cartSlice.actions;
export const { removeProduct } = cartSlice.actions;
export const { increamentProductQuant } = cartSlice.actions;
export const { decreamentProductQuant } = cartSlice.actions;
console.log(cartSlice);
