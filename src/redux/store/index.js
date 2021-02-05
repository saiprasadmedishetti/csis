import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//Import the reducer
import rootReducer from "../reducers";

// Connect our store to the reducers
export const store = createStore(rootReducer, applyMiddleware(thunk));
