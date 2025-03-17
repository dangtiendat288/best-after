import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { styles } from "./styles";

// Define interface for favorite food items
interface FavoriteItem {
  id: string;
  image: string;
  name: string;
  price: string;
}

// Sample data for favorite food items
const favoriteItems: FavoriteItem[] = [
  {
    id: '1',
    image: "https://i.imgur.com/prSOnjt.png",
    name: "Green tea noodles with sweet chili salmon",
    price: "$2.99"
  },
  {
    id: '2',
    image: "https://i.imgur.com/5Px5xd2.png",
    name: "Silverbeet fatteh with yoghurt and chickpeas",
    price: "$4.50"
  },
  {
    id: '3',
    image: "https://i.imgur.com/Lsxb7an.png",
    name: "Lemon Chicken",
    price: "$3.25"
  },
  {
    id: '4',
    image: "https://i.imgur.com/gayqAS2.png",
    name: "Sesame butter radishes with lemon",
    price: "$5.99"
  }  
];

// Render individual item
const renderItem = ({ item }: { item: FavoriteItem }) => (
  <TouchableOpacity style={styles.favoriteCard}>
    <Image source={{ uri: item.image }} style={styles.favoriteImage} />
    <View style={styles.favoriteDetails}>
      <Text style={styles.favoriteName}>{item.name}</Text>
      <Text style={styles.favoritePrice}>{item.price}</Text>
    </View>
  </TouchableOpacity>
);

export default function Favorites() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Best After</Text>          
        <View style={styles.iconContainer}>
          <Ionicons name="search" size={24} color="black" style={styles.icon} />        
          <Ionicons name="cart" size={24} color="black" style={styles.icon} />
        </View>
      </View>    
      <ScrollView style={styles.container}>    
        <View style={styles.heroSection}>
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/baedf52067b6105cb92258c100c0e049c895837906c9aed955bcefd31ad831e7",
            }}
            style={styles.heroImage}
          />
          <Text style={styles.heroTitle}>Favourites</Text>
          <Text style={styles.heroSubtitle}>Pick from all the amazing user favourites</Text>
        </View>
        
        <View style={styles.favoritesSection}>          
          <FlatList
            data={favoriteItems}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.favoritesList}
            scrollEnabled={false} // Disable scroll within FlatList since it's inside a ScrollView
          />
        </View>
        
        <View style={styles.newsletter}>
          <Text style={styles.newsletterTitle}>Never miss a deal</Text>
          <Text style={styles.newsletterSubtitle}>
            Receive updates about new promotions
          </Text>
          <TouchableOpacity style={styles.joinButton}>
            <Text style={styles.joinButtonText}>Join Mailing List</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}