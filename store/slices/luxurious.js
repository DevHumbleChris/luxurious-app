import { createSlice } from "@reduxjs/toolkit";
import Hotels from "../Hotels.json";
import Homes from "../Home.json";

export const luxuriousSlice = createSlice({
  name: "luxuriousSlice",
  initialState: {
    hotels: Hotels,
    homes: Homes,
  },
});

export default luxuriousSlice.reducer;
