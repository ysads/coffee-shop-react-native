import React from "react";
import AppLoading from "expo-app-loading";
import Router from "./components/Router";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

export default function App() {
  let [fontsLoaded] = useFonts({
    GaramondBold: require("./assets/fonts/CormorantGaramond-Bold.ttf"),
    GaramondBoldItalic: require("./assets/fonts/CormorantGaramond-BoldItalic.ttf"),
    SourceSans: require("./assets/fonts/SourceSansPro.ttf"),
    SourceSansItalic: require("./assets/fonts/SourceSansPro-Italic.ttf"),
    SourceSansBold: require("./assets/fonts/SourceSansPro-Bold.ttf"),
  });

  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
