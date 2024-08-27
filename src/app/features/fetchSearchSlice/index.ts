import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSearch = createAsyncThunk(
  "fetchSearch/fetchData",
  async ({ type, query, page }: any) => {
    if (!query && !page && !type) return;
    const response = await fetch(
      `https://api.themoviedb.org/3/search/${type}?query=${query}&include_adult=false&language=en-US&page=${page}&api_key=${process.env.NEXT_PUBLIC_BASE_API_URL}`,
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

const fetchSearchSlice = createSlice({
  name: "fetchSearch",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchSearch.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default fetchSearchSlice.reducer;
