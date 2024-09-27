import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  farmername: "",
  farmerage: "",
  gender: "",
  mobile: "",
  farmingcrop: "",
  cropyear: "",
  price: "",
  farmers: [],
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
});

export const { setVal, addFarmer, deleteFarmer } = farmerSlice.actions;

export default farmerSlice.reducer;
