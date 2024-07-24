import { createStore, combineReducers } from "redux";
import { Studentreducer } from "../reducers/StudentReducer";

const rootReducer = combineReducers({
  student: Studentreducer,
});

const store = createStore(rootReducer);

export default store;
