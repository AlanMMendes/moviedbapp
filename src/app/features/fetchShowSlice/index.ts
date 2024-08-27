import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchShow = createAsyncThunk(
  "fetchShowData/fetchData",
  async ({ type, id }: any) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.NEXT_PUBLIC_BASE_API_URL}&language=en-US`,
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

const fetchShowSlice = createSlice({
  name: "fetchShowData",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShow.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchShow.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchShow.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default fetchShowSlice.reducer;
