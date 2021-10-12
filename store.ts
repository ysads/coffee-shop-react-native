import combinedReducers from "./reducers";
import { createStore } from "redux";

export const store = createStore(combinedReducers);
