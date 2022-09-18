import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from './Home'
import Bookings from './Bookings'
import Saved from './Saved'
import Profile from './Profile'
import BottomNavigation from '../components/BottomNavigation'

export default function MainScreen ({ navigation }) {
  const Stack = createNativeStackNavigator()
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Saved" component={Saved} options={{ headerShown: false }} />
        <Stack.Screen name="Bookings" component={Bookings} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      </Stack.Navigator>
      <BottomNavigation navigation={navigation} />
    </>
  )
}
