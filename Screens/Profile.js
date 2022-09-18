import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BioData from "../components/BioData";
import tw from 'twrnc'

const Profile = () => {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <BioData />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
