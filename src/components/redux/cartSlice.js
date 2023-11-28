import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem(state, action) {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index == -1) {
        const newItem = {
          ...action.payload,
          count: action.payload.count ? action.payload.count : 1,
        };
        state.push(newItem);
      } else {
        state[index].count = state[index].count + 1;
      }
      return state;
    },
    subItem(state, action) {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (state[index].count > 1) {
        state[index].count--;
      } else {
        state.splice(index, 1);
      }
      return state;
    },
    inputChange(state, action) {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (action.payload.value != "") {
        state[index].count = Number(action.payload.value);
        if (state[index].count <= 0) {
          state.splice(index, 1);
        }
      }
      return state;
    },
    removeItem(state, action) {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state.splice(index, 1);
      return state;
    },
    cleanCart(state, action) {
      return [];
    },
  },
});

const { actions, reducer } = cartSlice;
export const { addItem, subItem, inputChange, removeItem, cleanCart } = actions;
export default reducer;
