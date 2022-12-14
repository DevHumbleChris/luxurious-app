import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import MainScreen from "./Screens/MainScreen";
import { store } from "./store";
import { Provider } from "react-redux";
import OnboardingScreen from "./Screens/OnboardingScreen";
import ReviewScreen from "./Screens/ReviewScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MainScreen"
              component={MainScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="ReviewScreen" component={ReviewScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
