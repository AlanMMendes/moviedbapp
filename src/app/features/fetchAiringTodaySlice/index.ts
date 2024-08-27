import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAiringToday = createAsyncThunk(
  "fetchAiringToday/fetchData",
  async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.NEXT_PUBLIC_BASE_API_URL}&language=en-US`,
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

const fetchAiringTodaySlice = createSlice({
  name: "fetchAiringToday",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAiringToday.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAiringToday.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchAiringToday.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default fetchAiringTodaySlice.reducer;
