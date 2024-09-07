import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { FarmerReducer } from "../reducers/FarmerReducer";

const rootReducer = combineReducers({
  farmer: FarmerReducer,
});

// const store = createStore(rootReducer); createStore
const store = configureStore({
  reducer: rootReducer,
});

export default store;
