import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
export default function RootLayout() {
  
  return (
    <Stack
    screenOptions={{      
    }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="search/index" options={{ headerShown: false }} />
    </Stack>
  );
}

const styles = StyleSheet.create({})