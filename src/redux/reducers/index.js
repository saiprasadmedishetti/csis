import { combineReducers } from "redux";
import CarReducer from "./CarReducer";

// combine reducers
const rootReducer = combineReducers({
  CarReducer,
});

export default rootReducer;
