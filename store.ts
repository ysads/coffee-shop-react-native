import AsyncStorage from "@react-native-async-storage/async-storage";
import combinedReducers from "./reducers";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = persistReducer(persistConfig, combinedReducers);

export const store = createStore(rootReducer);
export const persistor = persistStore(store);
