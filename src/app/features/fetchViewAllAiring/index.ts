import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchViewAllAiring = createAsyncThunk(
  "fetchViewAllAiring/fetchData",
  async ({ page }: any) => {
    if (!page) return;
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.NEXT_PUBLIC_BASE_API_URL}&language=en-US&page=${page}`,
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

const fetchViewAllAiringSlice = createSlice({
  name: "fetchViewAllAiring",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchViewAllAiring.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchViewAllAiring.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchViewAllAiring.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default fetchViewAllAiringSlice.reducer;
