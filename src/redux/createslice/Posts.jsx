import { createSlice } from "@reduxjs/toolkit";
import { userDetails } from "../../services/service";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idel",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(userDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
