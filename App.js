import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Constants from "expo-constants"
import Home from "./App/Screens/Home";
import Login from './App/Screens/Login';
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import TabNavigation from "./App/Navigations/TabNavigation";

export default function App() {
  return (
    <ClerkProvider publishableKey={Constants.expoConfig.extra.clerkPublishableKey}>
        <SignedIn>
          <NavigationContainer >
            <TabNavigation/>
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
