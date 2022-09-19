import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import tw from 'twrnc'
import { useSelector } from 'react-redux'

const BestOffers = () => {
  const { apartments } = useSelector(state => state.luxurious)
  return (
    <View style={tw`my-4`}>
        <View style={tw`flex-row justify-between`}>
          <Text style={tw`text-gray-600 text-lg`}>Best Offers</Text>
          <Text style={tw`text-[#673ab7] text-lg underline`}>View All</Text>
        </View>
        {/* Apartments */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`my-2 flex-row`}>
          {apartments.map((item, i) => (
            <View key={i} style={tw`w-60 bg-white rounded-2xl shadow p-1 mr-3 my-2`}>
              <Image
                style={{
                  height: 200,
                  width: "100%",
                  resizeMode: "cover",
                  borderRadius: 15,
                }}
                source={{
                  uri: item.image,
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
                <Text style={tw`text-lg my-1`}>{item.name}</Text>
                <View style={tw`flex-row justify-between`}>
                  <View style={tw`flex-row items-center`}>
                    <Icon
                      name="map-marker"
                      type="material-community"
                      size={25}
                      color="#673ab7"
                    />
                    <Text>{item.location}</Text>
                  </View>
                  <View style={tw`flex-row items-center`}>
                    <Icon
                      name="star"
                      type="material-community"
                      color="yellow"
                      size={25}
                    />
                    <Text>{item.starRating}</Text>
                  </View>
                </View>
                <View style={tw`flex-row items-center`}>
                  <Text style={tw`text-xl`}>{item.price}</Text>
                  <Text style={tw`text-xs text-gray-500`}>/{item.duration}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
        
        {/* End of Apartments */}
      </View>
  )
}

export default BestOffers