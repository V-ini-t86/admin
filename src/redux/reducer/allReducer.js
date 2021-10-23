import { combineReducers } from "redux";
import getDataReducer from "./getDataReducer";
import searchReducer from "./searchReducer";

const allReducers = combineReducers({
  getDataReducer,
  searchReducer
});

export default allReducers;
