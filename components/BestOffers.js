import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import tw from 'twrnc'

const BestOffers = () => {
  return (
    <View style={tw`my-4`}>
        <View style={tw`flex-row justify-between`}>
          <Text style={tw`text-gray-600 text-lg`}>Best Offers</Text>
          <Text style={tw`text-[#673ab7] text-lg underline`}>View All</Text>
        </View>
        {/* Apartments */}
        <View style={tw`my-2 flex-row`}>
          <View style={tw`w-60 bg-white rounded-2xl shadow p-1 mr-3`}>
            <Image
              style={{
                height: 200,
                width: "100%",
                resizeMode: "cover",
                borderRadius: 15,
              }}
              source={{
                uri: "https://www.co-opbank.co.ke/wp-content/uploads/2021/11/good-home-resized.png",
              }}
            />
            <View
              style={tw`flex-row justify-between items-center absolute top-3 left-2`}
            >
              <Text
                style={tw`uppercase bg-[#f1f1f1] rounded p-1 text-gray-600`}
              >
                Apartments
              </Text>
            </View>
            <TouchableOpacity
              style={tw`flex-row justify-between items-center absolute top-3 right-3`}
            >
              <Icon
                name="cards-heart-outline"
                type="material-community"
                size={25}
                color="#673ab7"
              />
            </TouchableOpacity>
            <View style={tw`p-2`}>
              <Text style={tw`text-lg my-1`}>Heaven Luxury Pro</Text>
              <View style={tw`flex-row justify-between`}>
                <View style={tw`flex-row items-center`}>
                  <Icon
                    name="map-marker"
                    type="material-community"
                    size={25}
                    color="#673ab7"
                  />
                  <Text>Pune, Maharashtra</Text>
                </View>
                <View style={tw`flex-row items-center`}>
                  <Icon
                    name="star"
                    type="material-community"
                    color="yellow"
                    size={25}
                  />
                  <Text>4.9</Text>
                </View>
              </View>
              <View style={tw`flex-row items-center`}>
                <Text style={tw`text-2xl`}>$250</Text>
                <Text style={tw`text-xs text-gray-500`}>/per night</Text>
              </View>
            </View>
          </View>
          <View style={tw`w-60 bg-white rounded-2xl shadow p-1 mr-3`}>
            <Image
              style={{
                height: 200,
                width: "100%",
                resizeMode: "cover",
                borderRadius: 15,
              }}
              source={{
                uri: "https://www.co-opbank.co.ke/wp-content/uploads/2021/11/good-home-resized.png",
              }}
            />
            <View
              style={tw`flex-row justify-between items-center absolute top-3 left-2`}
            >
              <Text
                style={tw`uppercase bg-[#f1f1f1] rounded p-1 text-gray-600`}
              >
                Apartments
              </Text>
            </View>
            <TouchableOpacity
              style={tw`flex-row justify-between items-center absolute top-3 right-3`}
            >
              <Icon
                name="cards-heart-outline"
                type="material-community"
                size={25}
                color="#673ab7"
              />
            </TouchableOpacity>
            <View style={tw`p-2`}>
              <Text style={tw`text-lg my-1`}>Heaven Luxury Pro</Text>
              <View style={tw`flex-row justify-between`}>
                <View style={tw`flex-row items-center`}>
                  <Icon
                    name="map-marker"
                    type="material-community"
                    size={25}
                    color="#673ab7"
                  />
                  <Text>Pune, Maharashtra</Text>
                </View>
                <View style={tw`flex-row items-center`}>
                  <Icon
                    name="star"
                    type="material-community"
                    color="yellow"
                    size={25}
                  />
                  <Text>4.9</Text>
                </View>
              </View>
              <View style={tw`flex-row items-center`}>
                <Text style={tw`text-2xl`}>$250</Text>
                <Text style={tw`text-xs text-gray-500`}>/per night</Text>
              </View>
            </View>
          </View>
        </View>
        
        {/* End of Apartments */}
      </View>
  )
}

export default BestOffers