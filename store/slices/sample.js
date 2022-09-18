import { createSlice } from "@reduxjs/toolkit";

export const sampleSlice = createSlice({
    name: 'sample',
    initialState: {
        count: 0
    },
    reducers: {
        incCount: () => {
            state.count += 1
        }
    }
})

export const { inCCount } = sampleSlice.actions
export default sampleSlice.reducer