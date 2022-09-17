import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Avatar, Icon } from "@rneui/themed";

const Home = () => {
  return (
    <SafeAreaView style={tw`flex-1 p-5`}>
      <View style={tw`flex-row justify-between`}>
        <View>
          <Text style={tw`text-lg text-gray-600`}>What are you</Text>
          <Text style={tw`text-4xl text-[#673ab7]`}>Looking for?</Text>
        </View>
        <Avatar
          size={44}
          source={{
            uri: "https://randomuser.me/api/portraits/men/36.jpg",
          }}
          rounded
        />
      </View>
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
      {/* Best Offers */}
      <View style={tw`my-4`}>
        <View style={tw`flex-row justify-between`}>
          <Text style={tw`text-gray-600 text-lg`}>Best Offers</Text>
          <Text style={tw`text-[#673ab7] text-lg underline`}>View All</Text>
        </View>
        <View style={tw`my-2`}>
          <View style={tw`w-60 bg-white rounded-xl`}>
            <Image
              style={{
                height: 200,
                width: "100%",
                resizeMode: "cover",
                borderRadius: 5,
              }}
              source={{
                uri: "https://www.co-opbank.co.ke/wp-content/uploads/2021/11/good-home-resized.png",
              }}
            />
            <View>
              <Text>Heaven Luxury Pro</Text>
              <View style={tw`flex-row items-center`}>
                <Icon
                  name="map-marker"
                  type="material-community"
                  size={35}
                  color="#673ab7"
                />
                <Text>Pune, Maharashtra</Text>
              </View>
              <View style={tw`flex-row`}>
                  <Text>$250</Text>
                  <Text>/per night</Text>
                </View>
            </View>
          </View>
        </View>
      </View>
      {/* End Of Best Offers */}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
