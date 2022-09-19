import { View, Text, Image, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedCategory } from '../store/slices/CategorySlice'

const Categories = () => {
  const categories = useSelector(state => state.filterOptions.categories)
  const selectedCategory = useSelector(state => state.filterOptions.selectedCategory)
  const dispatch = useDispatch()

  const setCategorySelected = (category) => {
    dispatch(setSelectedCategory(category))
  }
  return (
    <View>
        <Text style={tw`text-lg text-gray-600`}>Categories</Text>
        <View style={tw`my-2 flex-row justify-between`}>
          {categories.map(category => (

          <TouchableOpacity
            style={tw`flex-row items-center ${selectedCategory === category.name ? 'border-2 border-dashed border-[#673ab7]': ''} rounded-xl p-1`}
            key={category.name}
            onPress={() => setCategorySelected(category)}
          >
            <Image
              style={{
                height: 40,
                width: 40,
                resizeMode: "contain",
                borderRadius: 10,
              }}
              source={{
                uri: category.image,
              }}
            />
            <Text style={tw`mx-2`}> { category.name }</Text>
          </TouchableOpacity>
          ))}
        </View>
      </View>
  )
}

export default Categories