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
    removeItem: (state, action) => {
      const idToRemove = action.payload;
      state.items = state.items.filter((item: any) => item.id !== idToRemove);
    },
  },
});

export const { setData, removeItem } = watchListSlice.actions;

export default watchListSlice.reducer;
