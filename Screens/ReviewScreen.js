import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const ReviewScreen = ({ navigation, route: { params } }) => {
  return (
    <View style={tw``}>
      <View style={tw`h-72`}>
        <View style={tw`flex-1`}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover'
          }}
          source={{
            uri: params.image
          }}
        />
        </View>
      </View>
      <View style={tw`h-full`}>
          <View style={{
            borderTopRightRadius: 50,
            backgroundColor: 'blue',
            height: '100%'
          }}>
            <Text>Hello</Text>
          </View>
      </View>
    </View>
  )
}

export default ReviewScreen