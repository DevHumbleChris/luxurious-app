import { createSlice } from '@reduxjs/toolkit'

export const amenityIcons = createSlice({
    name: 'amenityIcons',
    initialState: {
        icons: [
            {
                name: 'bed',
                type: 'material-community',
                amenity: 'Bedrooms'
            },
            {
                name: 'bath',
                type: 'font-awesome-5',
                amenity: 'Bathrooms'
            }
        ]
    }
})

export default amenityIcons.reducer