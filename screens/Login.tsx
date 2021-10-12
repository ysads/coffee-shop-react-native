import React, { useEffect, useState } from "react";
import { Color, Font, FontSize } from "../styles";
import Button from "../components/Button";
import Loading from "../components/Loading";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { ScreenProps } from "../components/Router";
import { fetchGoogleUser } from "../api";
import { GoogleUser } from "../types";
import { signin } from "../actions";
import { useDispatch } from "react-redux";

type Props = ScreenProps<"Login">;

WebBrowser.maybeCompleteAuthSession();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  name: {
    textAlign: "center",
    color: Color.white,
    fontSize: FontSize.title1,
    fontFamily: Font.sourceSans.bold,
    marginTop: "auto",
    marginBottom: 50,
  },
  button: {
    justifyContent: "center",
  },
  image: {
    flex: 1,
    padding: 30,
    paddingBottom: 75,
  },
  text: {
    color: Color.white,
    fontSize: FontSize.title3,
    fontFamily: Font.sourceSans.bold,
  },
});

export default function Login({ navigation }: Props) {
  const [loading, setLoading] = useState(false);
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "205094974478-79i7vksk0hra06b4dfmi7vqm482h2cc3.apps.googleusercontent.com",
    webClientId:
      "205094974478-kn6gr5ukmk30ck3c92u10uotocpq0ril.apps.googleusercontent.com",
  });
  const dispatch = useDispatch();

  const image = {
    uri: "https://image.freepik.com/free-photo/top-view-roasted-coffee-beans-scattered-brown-paper-texture-background-with-copy-space_141793-7136.jpg",
  };

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      (async () => {
        const res: GoogleUser = await fetchGoogleUser(
          authentication?.accessToken,
        );
        const googleUser = {
          email: res.email,
          name: res.name,
          picture: res.picture,
        };
        dispatch(signin(googleUser));
      })();
      navigation.navigate("ProductList");
    }
  }, [response]);

  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.container}>
            <Text style={styles.name}>coffee shop</Text>
            <Button
              style={styles.button}
              variant="pink"
              size="large"
              onPress={async () => {
                setLoading(true);
                promptAsync();
              }}
            >
              <Text style={styles.text}>Sign in with Google</Text>
            </Button>
          </View>
        </ImageBackground>
      )}
    </View>
  );
}
