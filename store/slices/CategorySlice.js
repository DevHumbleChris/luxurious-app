import { createSlice } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
    name: 'categorySlice',
    initialState: {
        categories: [
            { name: 'Apartments', image: 'https://www.phillyaptrentals.com/wp-content/uploads/2020/12/apartment-building-what-makes-good-apartment-building-scaled.jpg'},
            { name: 'Homes', image: 'https://images.squarespace-cdn.com/content/v1/5e0e16044ce9a12790e1596e/1591889572404-XAQT6P9PG96R9ITX7BZR/Custom+Traditional+New+Home+in+Edina27.jpg'},
            { name: 'Offices', image: 'https://imageproxy-v2.services.lokalebasen.dk/370x270/lb-images-eu/ke/1183056/1134600-waiyaki-way-1.jpg?v=m1655728818'}
        ],
        selectedCategory: 'Apartments'
    },
    reducers: {
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload.name
        }
    }
})

export const { setSelectedCategory } = categorySlice.actions
export default categorySlice.reducer