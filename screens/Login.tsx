import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Loading from "../components/Loading";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Color, Radius } from "../styles";
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
  },
  sheet: {
    backgroundColor: Color.white,
    borderTopRightRadius: Radius.large,
    flex: 1,
    padding: 20,
    paddingTop: 80,
    marginTop: -30,
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
    <SafeAreaView style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <View style={styles.sheet}>
          <Button
            variant="pink"
            size="large"
            onPress={async () => {
              setLoading(true);
              promptAsync();
            }}
          >
            <Text>Sign in with Google</Text>
          </Button>
        </View>
      )}
    </SafeAreaView>
  );
}
