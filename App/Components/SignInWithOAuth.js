import * as WebBrowser from "expo-web-browser";

import { Button, Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

import Colors from "../../assets/Shared/Colors";
import React from "react";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <TouchableOpacity onPress={onPress} style={styles.loginView}>
      <Text style={{ fontSize: 17, color: Colors.white }}> Login with Google</Text>
    </TouchableOpacity>
  );
}
export default SignInWithOAuth;

const styles = StyleSheet.create({
  loginView: {
    backgroundColor: Colors.primary,
    padding: 16,
    alignItems: "center",
    marginTop: 20,
    borderRadius: 90,
    width: Dimensions.get("screen").width * 0.8,
  },
});