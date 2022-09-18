import { configureStore } from "@reduxjs/toolkit";
import bottomNavSlice from "./slices/bottomNav";

export const store = configureStore({
    reducer: {
        bottomNav: bottomNavSlice
    }
})