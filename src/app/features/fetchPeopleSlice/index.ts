import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Definindo uma thunk assíncrona para a chamada da API
export const fetchPeopleData = createAsyncThunk(
  "fetchPeopleData/fetchData",
  async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${process.env.NEXT_PUBLIC_BASE_API_URL}&language=en-US`,
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
const fetchPeopleSlice = createSlice({
  name: "fetchData",
  initialState: {
    data: null,
    status: "idle", // ou 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeopleData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPeopleData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchPeopleData.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default fetchPeopleSlice.reducer;
