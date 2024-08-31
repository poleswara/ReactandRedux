import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { Studentreducer } from "../reducers/StudentReducer";

const rootReducer = combineReducers({
  student: Studentreducer,
});

// const store = createStore(rootReducer);
const store = configureStore({
  reducer:rootReducer
})

export default store;
