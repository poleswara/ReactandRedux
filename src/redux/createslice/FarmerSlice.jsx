import { createSlice } from "@reduxjs/toolkit";
import { postDetails } from "../../services/service";

const initialState = {
  farmername: "",
  farmerage: "",
  gender: "",
  mobile: "",
  farmingcrop: "",
  cropyear: "",
  price: "",
  farmers: [],
  loading: false,
  data: null,
  error: null,
};

const farmerSlice = createSlice({
  name: "farmer",
  initialState,
  reducers: {
    setVal: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    addFarmer: (state, action) => {
      state.farmers.push(action.payload);
    },
    deleteFarmer: (state, action) => {
      state.farmers = state.farmers.filter((_, idx) => idx !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(postDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.data;
      });
  },
});

export const { setVal, addFarmer, deleteFarmer } = farmerSlice.actions;

export default farmerSlice.reducer;
