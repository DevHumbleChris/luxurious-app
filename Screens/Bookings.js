import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from 'twrnc'
import { Icon } from "@rneui/themed";
import NoBookings from "../components/NoBookings";

const Bookings = () => {
  return (
    <SafeAreaView style={tw`flex-1 p-5`}>
      <View style={tw`flex-row items-center`}>
        <TouchableOpacity style={tw`bg-white rounded-full`}>
          <Icon name="chevron-left" type="material-community" color="#673ab7" size={35} />
        </TouchableOpacity>
        <Text style={tw`mx-auto text-lg text-gray-600`}>Bookings</Text>
      </View>
      <NoBookings />
    </SafeAreaView>
  );
};

export default Bookings;

const styles = StyleSheet.create({});
