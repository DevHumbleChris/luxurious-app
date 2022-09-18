import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "@rneui/themed";

const NearestYou = () => {
  return (
    <View>
      <View style={tw`flex-row justify-between`}>
        <Text style={tw`text-lg text-gray-600`}>Nearest you</Text>
        <Text style={tw`text-lg underline text-[#673ab7]`}>View All</Text>
      </View>
      <View style={tw`my-2`}>
        <View style={tw`my-2 flex-row bg-white rounded-xl p-2 shadow`}>
          <Image
            style={{
              height: 100,
              width: 100,
              resizeMode: "cover",
              borderRadius: 10
            }}
            source={{
              uri: "https://www.co-opbank.co.ke/wp-content/uploads/2021/11/good-home-resized.png",
            }}
          />
          <View style={tw`mx-3`}>
            <Text style={tw`text-lg`}> River Luxury </Text>
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
              <View style={tw`flex-row items-center mx-1 my-2`}>
                <Text style={tw`text-2xl`}>$250</Text>
                <Text style={tw`text-xs text-gray-500`}>/per night</Text>
              </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NearestYou;
