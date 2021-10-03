import React from "react";
import Login from "../screens/Login";
import ProductDetails from "../screens/ProductDetails";
import ProductList from "../screens/ProductList";
import WeatherDetails from "../screens/WeatherDetails";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { Product } from "../types";

type RouteParams = {
  Login: undefined;
  ProductList: undefined;
  ProductDetails: { product: Product };
  WeatherDetails: { product: Product };
};

export type ScreenProps<T extends keyof RouteParams> = NativeStackScreenProps<
  RouteParams,
  T
>;

const Stack = createNativeStackNavigator<RouteParams>();

export default function Router() {
  return (
    <Stack.Navigator
      initialRouteName="ProductList"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="WeatherDetails" component={WeatherDetails} />
    </Stack.Navigator>
  );
}
