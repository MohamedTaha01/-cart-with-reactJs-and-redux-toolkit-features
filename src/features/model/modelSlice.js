import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  model: false,
};

const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    close: (state) => {
      state.model = false;
    },
    open: (state) => {
      state.model = true;
    },
  },
});

export const { close, open } = modelSlice.actions;

export default modelSlice.reducer;
