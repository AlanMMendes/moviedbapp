import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchEpisodesProvider = createAsyncThunk(
  "fetchEpisodesProvider/fetchData",
  async ({ tv_id, season_number, episode_number }: any) => {
    if (!tv_id && !season_number && !episode_number) return;
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${tv_id}/season/${season_number}/episode/${episode_number}/watch/providers?api_key=${process.env.NEXT_PUBLIC_BASE_API_URL}&language=en-US`,
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

const fetchEpisodesProviderSlice = createSlice({
  name: "fetchEpisodesProvider",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEpisodesProvider.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEpisodesProvider.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchEpisodesProvider.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default fetchEpisodesProviderSlice.reducer;
