import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../features/Products/productSlice";
import AuthReducer from "../features/Auth/AuthSlice";
import CartReducer from "../features/Cart/CartSlice";
// import OrderReducer from "../features/Order/OrderSlice";
import userReducer from "../features/User/UserSlice";

export const store = configureStore({
  reducer: {
    product: ProductsReducer,
    auth: AuthReducer,
    cart: CartReducer,
    // order: OrderReducer,
    user: userReducer,
  },
});
