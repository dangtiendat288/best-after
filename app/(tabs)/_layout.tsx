import { Ionicons } from "@expo/vector-icons";
import { router, Tabs } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RootLayout() {
    const handleSearchPress = () => {
        router.push('/search');
      };
    return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#8E8E8E",
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerTitle: () => null,
        headerLeft: () => (
              <View style={styles.headerLeftContainer}>
                <Text style={styles.headerTitle}>Best After</Text>
              </View>
              ),
              headerRight: () => (
              <View style={styles.iconContainer}>
                <TouchableOpacity onPress={handleSearchPress}>
                  <Ionicons name="search" size={24} color="black" style={styles.icon} />
                </TouchableOpacity>
                <Ionicons name="cart" size={24} color="black" style={styles.icon} />
              </View>
              ),        
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="donate/index"
        options={{
          title: "Donate",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="gift" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          href: null, // This removes the tab from the navigation
        }}
      />      
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 80,
    paddingBottom: 10,
    paddingTop: 10,
  },
  header: {
    height: 100,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  headerContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  headerTitle: {
    fontFamily: "Prociono",
    fontSize: 28,
    color: "#010101",
  },
  iconContainer: {
    flexDirection: "row",
    gap: 15,
    marginRight: 20,
  },
  icon: {
    padding: 5,
  },
  headerLeftContainer: {
    marginLeft: 20,
  },
});