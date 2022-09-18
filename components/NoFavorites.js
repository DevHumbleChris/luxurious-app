import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const NoFavorites = () => {
  return (
    <View>
        <Image
          style={{
            width: 400, height: 400, resizeMode: "contain"
          }}
          source={
            require("../assets/undraw_Super_thank_you_re_f8bo-removebg-preview.png")
          }
        />
        <Text style={tw`text-lg text-center text-[#673ab7]`}>We both know 🤔, you never pressed the heart button 😒💔.</Text>
      </View>
  )
}

export default NoFavorites