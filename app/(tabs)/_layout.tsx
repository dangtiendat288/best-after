import { Ionicons } from "@expo/vector-icons";
import { router, Tabs } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RootLayout() {
    const handleSearchPress = () => {
        router.push('/search');
      };
    const handleCartPress = () => {
        router.push('/cart');
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
                <TouchableOpacity onPress={handleCartPress}>
                    <Ionicons name="cart" size={24} color="black" style={styles.icon} />
                </TouchableOpacity>
              </View>
              ),        
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="donate"
        options={{
          title: "Donate",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="gift" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />        
      <Tabs.Screen
        name="articles"
        options={{
          title: "Articles",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
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