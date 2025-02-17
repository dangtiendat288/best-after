import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Main", headerShown: false }}
      />
      <Stack.Screen
        name="home/index"
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen
        name="donate/index"
        options={{ title: "Donate", headerShown: false }}
      />
      <Stack.Screen
        name="favorites/index"
        options={{ title: "Favorites", headerShown: false }}
      />
    </Stack>
  );
}
