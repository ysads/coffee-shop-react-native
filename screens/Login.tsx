import React, { useEffect } from "react";
import Button from "../components/Button";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { View, Text } from "react-native";
import { ScreenProps } from "../components/Router";
import { fetchGoogleUser } from "../api";
import { GoogleUser } from "../types";

type Props = ScreenProps<"Login">;

WebBrowser.maybeCompleteAuthSession();

export default function Login({ navigation }: Props) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "205094974478-79i7vksk0hra06b4dfmi7vqm482h2cc3.apps.googleusercontent.com",
    webClientId:
      "205094974478-kn6gr5ukmk30ck3c92u10uotocpq0ril.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      (async () => {
        const res: GoogleUser = await fetchGoogleUser(
          authentication?.accessToken,
        );
        console.log(res);
      })();
      navigation.navigate("ProductList");
    }
  }, [response]);

  return (
    <View>
      <Button onPress={() => promptAsync()}>
        <Text>Sign in with Google</Text>
      </Button>
    </View>
  );
}
