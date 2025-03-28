import MailingListForm from "@/components/MailingListForm";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { styles } from "../../../styles/favorites/styles";

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
      <ScrollView style={styles.container}>    
        <View style={styles.heroSection}>
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/3db41280b443a5c2ea268a44f5162b8e9f0eca8b1314a61364b8c168b848ad4b",
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
          <MailingListForm />
        </View>

      </ScrollView>
    </>
  );
}