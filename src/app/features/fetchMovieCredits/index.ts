import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Definindo uma thunk assíncrona para a chamada da API
export const fetchMovieCredits = createAsyncThunk(
  "fetchParticipantsData/fetchData",
  async (id: any) => {
    if (!id) return;
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_BASE_API_URL}&language=en-US`,
      {
        method: "GET",
      }
    ); // Substitua pela sua URL
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  }
);

// Criando o slice
const fetchMovieCreditsSlice = createSlice({
  name: "fetchParticipants",
  initialState: {
    data: null,
    status: "idle", // ou 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieCredits.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovieCredits.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchMovieCredits.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default fetchMovieCreditsSlice.reducer;
