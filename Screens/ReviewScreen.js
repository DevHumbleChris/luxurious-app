import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "@rneui/base";
import { useSelector } from "react-redux";

const ReviewScreen = ({ navigation, route: { params } }) => {
  const amenityIcon = useSelector(state => state.amenity.icons)
  const getAmenityName = (amenity) => {
    const splittedAmenity = amenity.split(' ')
    let name;
    splittedAmenity.map(item => {
      amenityIcon.forEach(icon => {
        if (item === icon.amenity) {
          name = icon.name
        } else {
          name ='home'
        }
      })
    })
    return name
  }
  const getAmenityType = (amenity) => {
    const splittedAmenity = amenity.split(' ')
    let type;
    splittedAmenity.map(item => {
      amenityIcon.forEach(icon => {
        if (item === icon.amenity) {
          type = icon.name
        } else {
          type = 'home'
        }
      })
    })
    return type
  }
  return (
    <View style={tw``}>
      <View style={tw`h-98`}>
        <View style={tw`flex-1`}>
          <Image
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
            }}
            source={{
              uri: params.image,
            }}
          />
        </View>
      </View>
      <View style={tw`p-3`}>
        <View style={tw`flex-row justify-between`}>
          <Text style={tw`uppercase bg-[#673ab7] text-white rounded p-1`}>
            {params.type}
          </Text>
          <View style={tw`flex-row items-center`}>
            <Icon
              name="star"
              type="material-community"
              color="#673ab7"
              size={25}
            />
            <Text>{params.starRating}</Text>
          </View>
        </View>
        <View style={tw`my-2`}>
          <Text style={tw`text-2xl`}>{params.name}</Text>
          <View style={tw`flex-row items-center -mx-1 my-2`}>
            <Icon
              name="map-marker"
              type="material-community"
              size={25}
              color="#673ab7"
            />
            <Text>{params.location}</Text>
          </View>
          <View>
            <Text style={tw`text-lg`}>Description</Text>
            <Text style={tw`text-gray-600 my-1`}>{params.description}</Text>
          </View>
          <View>
            <Text style={tw`text-lg`}>Amenities</Text>
            <View style={tw`flex-row flex-wrap`}>
              {params.amenities.map((amenity, i) => {
                return (
                  <View key={i} style={tw`my-2 items-center mr-3`}>
                    <Icon name={amenity.iconName} type={amenity.iconType} size={35} color='#673ab7' />
                    <Text>{amenity.title}</Text>
                  </View>
                )
              })}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReviewScreen;
