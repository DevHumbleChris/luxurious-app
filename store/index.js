import { configureStore } from "@reduxjs/toolkit";
import bottomNavSlice from "./slices/bottomNav";
import categorySlice from "./slices/CategorySlice";
import luxuriousSlice from "./slices/luxurious";

export const store = configureStore({
    reducer: {
        bottomNav: bottomNavSlice,
        filterOptions: categorySlice,
        luxurious: luxuriousSlice
    }
})