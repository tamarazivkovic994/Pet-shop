import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import AuthReducer from "./features/authSlice";
import {cartReducer} from "./features/cartSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig,cartReducer);

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    cart: persistedReducer,
  },
});

export const persistor = persistStore(store);
