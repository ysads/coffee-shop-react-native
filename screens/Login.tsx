import React from "react";
import Button from "../components/Button";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { View, Text } from "react-native";
import { ScreenProps } from "../components/Router";

type Props = ScreenProps<"Login">;

WebBrowser.maybeCompleteAuthSession();

export default function Login({ navigation }: Props) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "205094974478-79i7vksk0hra06b4dfmi7vqm482h2cc3.apps.googleusercontent.com",
    webClientId:
      "205094974478-kn6gr5ukmk30ck3c92u10uotocpq0ril.apps.googleusercontent.com",
  });

  const googleApiUrl =
    "https://www.googleapis.com/oauth2/v3/userinfo?access_token=";

  React.useEffect(() => {
    const fetchGoogleApi = async (token: string | undefined) => {
      const res = await fetch(`${googleApiUrl}${token}`);
      const userInfo = await res.json();
      const { given_name, family_name, picture, email } = userInfo;
      console.log(given_name);
      console.log(family_name);
      console.log(picture);
      console.log(email);
    };

    if (response?.type === "success") {
      const { authentication } = response;
      fetchGoogleApi(authentication?.accessToken);
      navigation.navigate("ProductList");
    } else {
      console.log("Sign in failed.");
    }
  }, [response]);

  return (
    <View>
      <Button onPress={promptAsync}>
        <Text>Sign in with Google</Text>
      </Button>
    </View>
  );
}
