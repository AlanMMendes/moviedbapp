// src/features/data/dataSlice.js
import { createSlice } from "@reduxjs/toolkit";

const watchListSlice: any = createSlice({
  name: "watchListData",
  initialState: {
    items: [],
  },
  reducers: {
    setData: (state: any, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { setData } = watchListSlice.actions;

export default watchListSlice.reducer;
