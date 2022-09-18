import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const NoBookings = () => {
  return (
    <View>
        <Image
          style={{
            width: 400, height: 400, resizeMode: "contain"
          }}
          source={
            require("../assets/undraw_Date_picker_re_r0p8-removebg-preview.png")
          }
        />
        <Text style={tw`text-lg text-center text-[#673ab7] -top-4`}>Ooh Really! 🤔, Did you book anything? 😒💔.</Text>
      </View>
  )
}

export default NoBookings