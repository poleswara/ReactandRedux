// import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { FarmerReducer } from "../reducers/FarmerReducer";
import postsSlice  from "../createslice/Posts";

// const rootReducer = combineReducers({
//   farmer: FarmerReducer,
// });

// const store = createStore(rootReducer); createStore
const store = configureStore({
  // reducer: rootReducer,
  reducer : {
    farmer: FarmerReducer,
    post : postsSlice,
  }
});

export default store;
