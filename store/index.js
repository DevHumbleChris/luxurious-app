import { configureStore } from "@reduxjs/toolkit";
import amenityIcons from "./slices/amenityIcon";
import bottomNavSlice from "./slices/bottomNav";
import categorySlice from "./slices/CategorySlice";
import luxuriousSlice from "./slices/luxurious";

export const store = configureStore({
    reducer: {
        bottomNav: bottomNavSlice,
        filterOptions: categorySlice,
        luxurious: luxuriousSlice,
        amenity: amenityIcons
    }
})