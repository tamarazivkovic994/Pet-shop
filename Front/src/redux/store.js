import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import CartReducer from "./features/cartSlice";

export default configureStore({
  reducer: {
    auth: AuthReducer,
    cart: CartReducer,
  },
});
