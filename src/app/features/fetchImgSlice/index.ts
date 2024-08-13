import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Definindo uma thunk assíncrona para a chamada da API
export const fetchImg = createAsyncThunk(
  "fetchDataSlice/fetchData",
  async (id: any) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/images`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTlhMTQ1MTIwNzg0OTQ0OGUwYTYwZmRhNGMxNjFiNiIsIm5iZiI6MTcyMzU2MTQ5NC41MjUxNDgsInN1YiI6IjY2YmI3NDg0MDdmNDdkOWUzMjUzYzE5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.blr5eXEuzdV5NFChPW6LaaSx4kx_k_Rdgd1vMk-C0dQ",
        },
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
const fetchImgSlice = createSlice({
  name: "fetchImg",
  initialState: {
    data: null,
    status: "idle", // ou 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImg.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchImg.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchImg.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default fetchImgSlice.reducer;
