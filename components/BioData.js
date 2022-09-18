import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { Avatar, Icon } from "@rneui/themed";

const BioData = () => {
  return (
    <View style={tw`p-5`}>
      <View style={tw`mx-auto mt-3`}>
        <Avatar
          size={180}
          source={{
            uri: "https://randomuser.me/api/portraits/men/36.jpg",
          }}
          rounded
        />
      <TouchableOpacity
        style={tw`absolute bg-white rounded-full p-2 top-32 right-3 shadow-xl`}
      >
        <Icon name="pen" type="material-community" color="#673ab7" size={35} />
      </TouchableOpacity>
      </View>
      <View style={tw`mx-auto mt-5`}>
        <Text style={tw`text-2xl text-gray-700 font-extrabold`}>Christopher Odhiambo</Text>
        <Text style={tw`text-center text-xl my-1 text-[#673ab7] font-bold`}>@AmChrisKE</Text>
      </View>
      <View style={tw`mx-auto bg-white p-2 rounded-xl shadow-xl mt-5 mb-3`}>
        <Text style={tw`text-lg text-gray-700 font-bold`}>Bio</Text>
        <Text style={tw`text-gray-500`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates culpa perferendis quidem, odio excepturi natus est, neque veritatis voluptate, sapiente asperiores! Quo.</Text>
      </View>
      <View style={tw`flex-row bg-white items-center justify-between p-3 rounded-xl shadow-xl mt-4 mb-3`}>
        <View style={tw`flex-row items-center`}>
        <Icon name="view-dashboard" type="material-community" size={35} color="#673ab7" />
        <Text style={tw`mx-3 text-lg text-gray-600`}>Dashboard</Text>
        </View>
        <Icon name="chevron-right" type="material-community" size={35} color="#673ab7" />
      </View>
      <View style={tw`flex-row bg-white items-center justify-between p-3 rounded-xl shadow-xl mt-1 mb-3`}>
        <View style={tw`flex-row items-center`}>
        <Icon name="cog-outline" type="material-community" size={35} color="#673ab7" />
        <Text style={tw`mx-3 text-lg text-gray-600`}>Settings</Text>
        </View>
        <Icon name="chevron-right" type="material-community" size={35} color="#673ab7" />
      </View>
      <View style={tw`flex-row bg-white items-center justify-between p-3 rounded-xl shadow-xl mt-1 mb-3`}>
        <View style={tw`flex-row items-center`}>
        <Icon name="logout" type="material-community" size={35} color="red" />
        <Text style={tw`mx-3 text-lg text-[#ff0000]`}>Logout</Text>
        </View>
        <Icon name="chevron-right" type="material-community" size={35} color="#ff0000" />
      </View>
      <Text style={tw`text-center my-6 text-lg text-gray-500`}>Version 1.0v</Text>
    </View>
  );
};

export default BioData;
