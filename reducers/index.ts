import googleUserReducer from "./googleUser";
import weatherReducer from "./weather";
import { combineReducers } from "redux";

const combinedReducers = combineReducers({
  googleUser: googleUserReducer,
  weather: weatherReducer,
});

export default combinedReducers;
