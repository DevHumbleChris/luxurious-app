import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import tw from 'twrnc'

const screen = Dimensions.get("window")

const Slide = ({item}) => {
  return (
    <View>
      <Image
        source={{
            uri: item.image
        }}
        style={{
            height: '75%', width: screen.width, resizeMode: 'cover'
        }}
      />
      <View style={{
        width: screen.width,
        padding: 15
      }}>
        <Text style={tw`text-3xl text-white my-2`}>{item.title}</Text>
        <Text style={tw`text-lg text-white`}>{item.description}</Text>
      </View>
    </View>
  )
}

export default Slide