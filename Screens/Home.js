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
import BestOffers from "../components/BestOffers";
import Categories from "../components/Categories";
import SearchBox from "../components/SearchBox";

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
      <SearchBox />
      <Categories />
      <BestOffers />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
