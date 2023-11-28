import { createSlice } from "@reduxjs/toolkit";

const welcomeSlice = createSlice({
  name: "welcome",
  initialState: true,
  reducers: {
    showWelcome(state, action) {
      return true;
    },
    hideWelcome(state, action) {
      return false;
    },
  },
});

const { actions, reducer } = welcomeSlice;
export const { showWelcome, hideWelcome } = actions;
export default reducer;
