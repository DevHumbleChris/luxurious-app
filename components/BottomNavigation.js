import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNav } from "../store/slices/bottomNav";

export default function BottomNavigation({ navigation }) {
  const navOptions = useSelector((state) => state.bottomNav.navs);
  const favorites = useSelector((state) => state.luxurious.favorites);
  const dispatch = useDispatch();
  const setActiveBottomNav = (nav) => {
    dispatch(setActiveNav(nav));
    navigation.navigate(nav.screen);
  };
  return (
    <View
      style={tw`mt-auto bottom-3 mx-3 p-2 bg-white mb-2 rounded-xl flex-row justify-evenly`}
    >
      {navOptions.map((nav, i) => (
        <View key={i}>
          <TouchableOpacity key={i} onPress={() => setActiveBottomNav(nav)}>
            <Icon
              name={nav.iconName}
              type="material-community"
              size={nav.isActive ? 35 : 45}
              color={nav.isActive ? nav.activeColor : nav.inActiveColor}
            />
            {nav.isActive && <Text style={tw`text-gray-600`}>{nav.name}</Text>}
          </TouchableOpacity>
          {favorites.length > 0 && nav.name === "Favorites" && (
            <Text
              style={tw`absolute right-0 bg-red-600 text-white rounded-full px-2 -right-1 text-sm -top-2`}
            >
              { favorites.length}
            </Text>
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
