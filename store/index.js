import { configureStore } from "@reduxjs/toolkit";
import sampleSlice from "./slices/sample";

export const store = configureStore({
    reducer: {
        sample: sampleSlice
    }
})