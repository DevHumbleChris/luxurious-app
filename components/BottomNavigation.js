import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/themed'

export default function BottomNavigation() {
  return (
    <View style={tw`mt-auto bottom-3 mx-3 p-2 bg-white mb-2 rounded-xl flex-row justify-evenly`}>
      <TouchableOpacity>
        <Icon name="home" type="material-community" size={35} color="#673ab7" />
        <Text style={tw`text-gray-600`}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="cards-heart-outline" type="material-community" size={35} color="#673ab7" />
        <Text style={tw`text-gray-600`}>Saved</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="book" type="material-community" size={35} color="#673ab7" />
        <Text style={tw`text-gray-600`}>Bookings</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="account" type="material-community" size={35} color="#673ab7" />
        <Text style={tw`text-gray-600`}>Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})