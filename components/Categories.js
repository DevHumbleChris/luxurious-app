import { View, Text, Image, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import React from 'react'

const Categories = () => {
  return (
    <View>
        <Text style={tw`text-lg text-gray-600`}>Categories</Text>
        <View style={tw`my-2 flex-row justify-between`}>
          <TouchableOpacity
            style={tw`flex-row items-center border-2 border-dashed border-[#673ab7] rounded-xl p-1`}
          >
            <Image
              style={{
                height: 40,
                width: 40,
                resizeMode: "contain",
                borderRadius: 10,
              }}
              source={{
                uri: "https://www.phillyaptrentals.com/wp-content/uploads/2020/12/apartment-building-what-makes-good-apartment-building-scaled.jpg",
              }}
            />
            <Text style={tw`mx-2`}>Apartments</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`flex-row items-center`}>
            <Image
              style={{
                height: 40,
                width: 40,
                resizeMode: "contain",
                borderRadius: 10,
              }}
              source={{
                uri: "https://images.squarespace-cdn.com/content/v1/5e0e16044ce9a12790e1596e/1591889572404-XAQT6P9PG96R9ITX7BZR/Custom+Traditional+New+Home+in+Edina27.jpg",
              }}
            />
            <Text style={tw`mx-2`}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`flex-row items-center`}>
            <Image
              style={{
                height: 40,
                width: 40,
                resizeMode: "contain",
                borderRadius: 10,
              }}
              source={{
                uri: "https://imageproxy-v2.services.lokalebasen.dk/370x270/lb-images-eu/ke/1183056/1134600-waiyaki-way-1.jpg?v=m1655728818",
              }}
            />
            <Text style={tw`mx-2`}>Offices</Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}

export default Categories