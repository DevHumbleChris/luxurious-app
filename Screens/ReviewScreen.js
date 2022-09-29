import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import { Avatar, Icon } from "@rneui/base";
import { useSelector } from "react-redux";

const ReviewScreen = ({ navigation, route: { params } }) => {
  console.log(params.amenities)
  return (
    <View style={tw`flex-1`}>
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
      <ScrollView
        style={tw`p-3 mt-4`}
        showsVerticalScrollIndicator={false}
      >
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
            <Text style={tw`text-lg mt-3`}>Description</Text>
            <Text style={tw`text-gray-600 my-1`}>{params.description}</Text>
          </View>
          <View>
            <Text style={tw`text-lg mt-3`}>Amenities</Text>
            <View style={tw`flex-row flex-wrap`}>
              {params.amenities.map((amenity, i) => {
                return (
                  <View key={i} style={tw`my-2 items-center mr-3`}>
                    <Icon
                      name={amenity.iconName}
                      type={amenity.iconType}
                      size={35}
                      color="#673ab7"
                    />
                    <Text>{amenity.title}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
        <View style={tw`flex-row items-center justify-evenly bg-white p-4 rounded-xl mt-4 mb-8`}>
          <Avatar
            size={44}
            source={{
              uri: "https://randomuser.me/api/portraits/men/36.jpg",
            }}
            rounded
          />
          <View style={tw`ml-6 mr-5`}>
            <Text style={tw`text-lg`}>John Doe</Text>
            <Text style={tw`text-gray-500`}>Householder</Text>
          </View>
          <View style={tw`flex-row mx-3`}>
            <TouchableOpacity style={tw`mr-5`}>
              <Icon name='phone-classic' type="material-community" color='#673ab7' size={35}/>
            </TouchableOpacity>
            <TouchableOpacity style={tw`mr-5`}>
              <Icon name='sms' type="font-awesome-5" color='#673ab7' size={35}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name='envelope' type="font-awesome-5" color='#673ab7' size={35}/>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View
        style={tw`mt-auto p-4 bg-white items-center rounded-xl flex-row justify-between`}
      >
        <View>
          <Text style={tw`text-gray-400 text-sm`}>Price</Text>
          <View style={tw`flex-row items-center`}>
            <Text style={tw`text-lg`}>{params.price} </Text>
            <Text style={tw`text-gray-600`}>/{params.duration} </Text>
          </View>
        </View>
        <TouchableOpacity style={tw`bg-[#673ab7] px-9 py-3 rounded-xl`}>
          <Text style={tw`text-white`}>Book now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReviewScreen;
