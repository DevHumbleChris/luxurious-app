import { createSlice } from '@reduxjs/toolkit'

export const bottomNavSlice = createSlice({
    name: 'bottomNavSlice',
    initialState: {
        navs: [
            {
                name: 'Home',
                screen: 'Home',
                activeColor: '#673ab7',
                inActiveColor: '#b39cdb',
                isActive: true,
                iconName: 'home'
            },
            {
                name: 'Favorites',
                screen: 'Saved',
                activeColor: '#673ab7',
                inActiveColor: '#b39cdb',
                isActive: false,
                iconName: 'cards-heart-outline'
            },
            {
                name: 'Bookings',
                screen: 'Bookings',
                activeColor: '#673ab7',
                inActiveColor: '#b39cdb',
                isActive: false,
                iconName: 'book'
            },
            {
                name: 'Profile',
                screen: 'Profile',
                activeColor: '#673ab7',
                inActiveColor: '#b39cdb',
                isActive: false,
                iconName: 'account'
            }
        ]
    },
    reducers: {
        setActiveNav: (state, action) => {
            state.navs.map(nav => {
                if (nav.isActive === true) {
                    nav.isActive = false
                }
                if (nav.iconName === action.payload.iconName) {
                    nav.isActive = true
                }
                return nav
            })
        }
    }
})

export const { setActiveNav } = bottomNavSlice.actions
export default bottomNavSlice.reducer