import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Avatar, Icon } from "@rneui/themed";
import BestOffers from "../components/BestOffers";
import Categories from "../components/Categories";
import SearchBox from "../components/SearchBox";
import NearestYou from "../components/NearestYou";

const Home = ({ navigation }) => {
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <BestOffers navigation={navigation} />
        <NearestYou />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
