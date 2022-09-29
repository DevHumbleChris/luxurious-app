import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Icon } from "@rneui/base";
import NoFavorites from "../components/NoFavorites";
import { useSelector } from "react-redux";
import Favorites from "../components/Favorites";

const Saved = () => {
  const favorites = useSelector((state) => state.luxurious.favorites);
  return (
    <SafeAreaView style={tw`flex-1 p-5`}>
      <Text style={tw`mx-auto text-xl text-gray-600 mb-3`}>Favorites</Text>
      {favorites ? <Favorites /> : <NoFavorites />}
    </SafeAreaView>
  );
};

export default Saved;

const styles = StyleSheet.create({});
