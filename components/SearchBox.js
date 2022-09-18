import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import tw from 'twrnc'

const SearchBox = () => {
  return (
    <View style={tw`my-6 flex-row items-center`}>
        <View>
          <TextInput
            style={tw`bg-white p-3 rounded-3xl w-80`}
            placeholder="search home, apartments, offices..."
          />
          <TouchableOpacity style={tw`absolute right-2 top-2`}>
            <Icon
              name="magnify"
              type="material-community"
              size={35}
              color="#673ab7"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={tw`mx-2`}>
          <Icon
            name="filter"
            type="material-community"
            size={35}
            color="#673ab7"
          />
        </TouchableOpacity>
      </View>
  )
}

export default SearchBox