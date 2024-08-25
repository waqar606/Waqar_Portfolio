import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../cartSlice/CartSlice";
import CategorySlice from "../cartSlice/CategorySlice";
import SearchSlice from "../cartSlice/SearchSlice";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
    category: CategorySlice,
    search: SearchSlice,
  },
});
