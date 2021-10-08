import googleUserReducer from "./googleUser";
import { combineReducers } from "redux";

const combinedReducers = combineReducers({
  googleUser: googleUserReducer,
});

export default combinedReducers;
