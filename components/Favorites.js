import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/base'
import { useSelector } from 'react-redux'

const Favorites = () => {
    const favorites = useSelector(state => state.luxurious.favorites)
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        {favorites.map(fav => {
            return (
                <View key={fav.id} style={tw`my-2 flex-row bg-white rounded-xl p-2 shadow`}>
          <Image
            style={{
              height: 100,
              width: 100,
              resizeMode: "cover",
              borderRadius: 10
            }}
            source={{
              uri: fav.image,
            }}
          />
          <View style={tw`mx-3`}>
            <Text style={tw`text-lg`}> { fav.name } </Text>
            <View style={tw`flex-row justify-between`}>
                <View style={tw`flex-row items-center`}>
                  <Icon
                    name="map-marker"
                    type="material-community"
                    size={25}
                    color="#673ab7"
                  />
                  <Text>{ fav.location }</Text>
                </View>
                <View style={tw`flex-row items-center`}>
                  <Icon
                    name="star"
                    type="material-community"
                    color="yellow"
                    size={25}
                  />
                  <Text>{ fav.starRating }</Text>
                </View>
              </View>
              <View style={tw`flex-row items-center mx-1 my-2`}>
                <Text style={tw`text-lg`}> { fav.price }</Text>
                <Text style={tw`text-xs text-gray-500`}>/{ fav.duration}</Text>
              </View>
          </View>
        </View>
            )
        })}
      </ScrollView>
  )
}

export default Favorites