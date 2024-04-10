import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Constants from "expo-constants"
import Home from "./App/Screens/Home";
import Login from './App/Screens/Login';
import SignInWithOAuth from "./App/Components/SignInWithOAuth";
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <ClerkProvider publishableKey={Constants.expoConfig.extra.clerkPublishableKey}>
    <SafeAreaView style={styles.container}>
    <SignedIn>
          <Home />
        </SignedIn>
        <SignedOut>
        <Login />
        </SignedOut>
    </SafeAreaView>
  </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
