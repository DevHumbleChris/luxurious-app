import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";
import Slide from "./Slide";

const onboardingData = [
  {
    id: 1,
    title: "Apartments",
    description:
      "Discover 👀 the best Apartments 🏤 around your location🗺, at an affordable prices.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    title: "Homes",
    description:
      "Feel 😚 the comfort 😎 that you deserve, home is where the heart❤ is.",
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    title: "Offices",
    description:
      "Discover the best Apartments around your location, at an affordable prices.",
    image:
      "https://images.unsplash.com/photo-1570126688035-1e6adbd61053?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG9mZmljZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
];

const screen = Dimensions.get("window");

const Onboarding = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const updateCurrentSlide = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x
    const currentIndex = Math.round(contentOffsetX / screen.width)
    setCurrentSlideIndex(currentIndex)
  }
  return (
    <View style={tw`flex-1 bg-[#673ab7]`}>
      <FlatList
        data={onboardingData}
        onMomentumScrollEnd={(e) => updateCurrentSlide(e)}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{
          height: screen.height * 0.95,
        }}
        renderItem={({ item }) => <Slide item={item} />}
      />
      <View style={tw`flex-row justify-between items-center mx-6`}>
        <View style={tw`flex-row justify-center my-12`}>
          {/* <View style={tw`bg-white  rounded-full mr-1`}></View> */}
          {onboardingData.map((_, index) => (
            <View
              key={index}
              style={tw`bg-white ${
                currentSlideIndex === index ? "h-2 w-7" : "h-2 w-2"
              } rounded-full mr-1`}
            ></View>
          ))}
        </View>
        <TouchableOpacity style={tw`bg-transparent border-2 border-white p-3 rounded-xl`}>
          <Text style={tw`text-white`}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 200,
    height: 300,
  },
});
export default Onboarding;
