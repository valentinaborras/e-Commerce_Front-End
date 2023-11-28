import { configureStore } from "@reduxjs/toolkit";
import logSlice from "./logSlice";
import cartSlice from "./cartSlice";
import orderSlice from "./orderSlice";
import welcomeSlice from "./welcomeSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  login: logSlice,
  cart: cartSlice,
  order: orderSlice,
  welcome: welcomeSlice,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
let persistor = persistStore(store);

export { store, persistor };
