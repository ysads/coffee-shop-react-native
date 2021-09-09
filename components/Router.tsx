import React from "react";
import Login from "../screens/Login";
import ProductDetails from "../screens/ProductDetails";
import ProductList from "../screens/ProductList";
import Weather from "../screens/Weather";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

type RouteParams = {
  Login: undefined;
  ProductList: undefined;
  ProductDetails: undefined;
  Weather: undefined;
};

export type ScreenProps<T extends keyof RouteParams> = NativeStackScreenProps<
  RouteParams,
  T
>;

const Stack = createNativeStackNavigator<RouteParams>();

export default function Router() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Weather" component={Weather} />
    </Stack.Navigator>
  );
}
