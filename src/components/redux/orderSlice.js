import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {
    addOrder(state, action) {
      state.push(action.payload);
      return state;
    },
    removeOrders(state, action) {
      return [];
    },
  },
});

const { actions, reducer } = orderSlice;
export const { addOrder, removeOrders } = actions;
export default reducer;
