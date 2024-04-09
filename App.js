import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { ClerkProvider } from "@clerk/clerk-expo";
import Constants from "expo-constants"
import Login from './App/Screens/Login';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <ClerkProvider publishableKey={Constants.expoConfig.extra.clerkPublishableKey}>
    <SafeAreaView style={styles.container}>
      <Text>Hello world!</Text>
    </SafeAreaView>
  </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
