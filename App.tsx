import React from "react";
import AppLoading from "expo-app-loading";
import Router from "./components/Router";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  let [fontsLoaded] = useFonts({
    SourceSans: require("./assets/fonts/SourceSansPro.ttf"),
    SourceSansItalic: require("./assets/fonts/SourceSansPro-Italic.ttf"),
    SourceSansBold: require("./assets/fonts/SourceSansPro-Bold.ttf"),
    Merriweather: require("./assets/fonts/Merriweather.ttf"),
    MerriweatherBold: require("./assets/fonts/Merriweather-Bold.ttf"),
    MerriweatherBlack: require("./assets/fonts/Merriweather-Black.ttf"),
  });

  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
}
