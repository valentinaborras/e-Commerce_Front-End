import { createSlice } from "@reduxjs/toolkit";

const logSlice = createSlice({
  name: "log",
  initialState: null,
  reducers: {
    login(state, action) {
      return action.payload;
    },
    logout(state, action) {
      return null;
    },
  },
});

const { actions, reducer } = logSlice;
export const { login, logout } = actions;
export default reducer;
