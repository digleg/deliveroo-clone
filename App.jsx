import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
// import "react-native-url-polyfill/auto";
import "react-native-url-polyfill/auto";
import { Provider } from "react-redux";
import { TailwindProvider } from "tailwindcss-react-native";
import BasketScreen from "./components/BasketScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import HomeScreen from "./screens/HomeScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import { store } from "./store";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen
              name="Basket"
              component={BasketScreen}
              options={{ presentation: "modal", headerShown: false }}
            />
            <Stack.Screen
              name="PreparingOrderScreen"
              component={PreparingOrderScreen}
              options={{ presentation: "fullScreenModal", headerShown: false }}
            />
            <Stack.Screen
              name="Delivery"
              component={DeliveryScreen}
              options={{ presentation: "fullScreenModal", headerShown: false }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
    </Provider>
  );
}
