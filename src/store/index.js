import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./products/products.slice";
import { categoriesSlice } from "./categories/categories.slice";
import { cartSlice } from "./cart";
import { userSlice } from "./user/user.slice";


export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    products: productSlice.reducer,
    categories: categoriesSlice.reducer,
    cart: cartSlice.reducer
  },
});

export default store;
