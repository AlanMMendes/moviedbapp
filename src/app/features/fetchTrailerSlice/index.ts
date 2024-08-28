import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTrailer = createAsyncThunk(
  "fetchTrailer/fetchData",
  async ({ id, type }: any) => {
    if (!id && !type) return;
    const response = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${process.env.NEXT_PUBLIC_BASE_API_URL}&language=en-US`,
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

const fetchTrailerSlice = createSlice({
  name: "fetchTrailer",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrailer.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTrailer.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchTrailer.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default fetchTrailerSlice.reducer;
