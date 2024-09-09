import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSeriesTrendingAll = createAsyncThunk(
  "fetchSeriesTrendingData/fetchData",
  async ({ page }: any) => {
    if (!page) return;
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.NEXT_PUBLIC_BASE_API_URL}&language=en-US&page=${page}`,
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

const fetchSeriesTrendingAllSlice = createSlice({
  name: "fetchSeriesTrendingAll",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSeriesTrendingAll.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSeriesTrendingAll.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchSeriesTrendingAll.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default fetchSeriesTrendingAllSlice.reducer;
