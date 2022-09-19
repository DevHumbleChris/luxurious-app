import { configureStore } from "@reduxjs/toolkit";
import bottomNavSlice from "./slices/bottomNav";
import categorySlice from "./slices/CategorySlice";

export const store = configureStore({
    reducer: {
        bottomNav: bottomNavSlice,
        filterOptions: categorySlice
    }
})