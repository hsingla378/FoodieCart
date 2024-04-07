import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // vanilla redux (older) -> Don't mutate teh state, returning was manadatory
      // const newState = [...state];
      // newState.items.push(action.payload);
      // return newState;

      // mutating the state here - Redux Toolkit takes care of immutability
      // We have** to mutate the state
      // no need to return anything
      // Redux Toolkit uses *Immer* BTS
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
