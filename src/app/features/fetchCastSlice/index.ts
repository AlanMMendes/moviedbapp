import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCast = createAsyncThunk(
  "fetchCast/fetchData",
  async ({ type, id }: any) => {
    if (!type && !id) return;
    const response = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${process.env.NEXT_PUBLIC_BASE_API_URL}&language=en-US`,
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  }
);

const fetchCastSlice = createSlice({
  name: "fetchCast",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCast.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCast.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchCast.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default fetchCastSlice.reducer;
