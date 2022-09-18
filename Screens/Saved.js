import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Icon } from "@rneui/base";
import NoFavorites from "../components/NoFavorites";

const Saved = () => {
  return (
    <SafeAreaView style={tw`flex-1 p-5`}>
      <View style={tw`flex-row items-center`}>
        <TouchableOpacity style={tw`bg-white rounded-full`}>
          <Icon name="chevron-left" type="material-community" color="#673ab7" size={35} />
        </TouchableOpacity>
        <Text style={tw`mx-auto text-lg text-gray-600`}>Favorites</Text>
      </View>
      <NoFavorites />
    </SafeAreaView>
  );
};

export default Saved;

const styles = StyleSheet.create({});
