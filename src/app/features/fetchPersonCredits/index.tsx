import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPersonCreditsSeries = createAsyncThunk(
  "fetchPersonCreditsSeries/fetchData",
  async ({ person_id }: any) => {
    if (!person_id) return;
    const response = await fetch(
      `https://api.themoviedb.org/3/person/${person_id}/tv_credits?api_key=${process.env.NEXT_PUBLIC_BASE_API_URL}&language=en-US`,
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

export const fetchPersonCreditsMovies = createAsyncThunk(
  "fetchPersonCreditsMovies/fetchData",
  async ({ person_id }: any) => {
    if (!person_id) return;
    const response = await fetch(
      `https://api.themoviedb.org/3/person/${person_id}/movie_credits?api_key=${process.env.NEXT_PUBLIC_BASE_API_URL}&language=en-US`,
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

const fetchPersonCreditsSlice = createSlice({
  name: "fetchPersonCredits",
  initialState: {
    series: null,
    movies: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPersonCreditsSeries.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPersonCreditsSeries.fulfilled, (state: any, action) => {
        state.status = "succeeded";
        state.series = action.payload;
      })
      .addCase(fetchPersonCreditsSeries.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchPersonCreditsMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPersonCreditsMovies.fulfilled, (state: any, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(fetchPersonCreditsMovies.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default fetchPersonCreditsSlice.reducer;
