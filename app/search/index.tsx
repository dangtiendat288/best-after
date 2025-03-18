import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Sample data to search through
const sampleProducts = [
  {
    id: '1',
    name: 'Green tea noodles with salmon',
    price: '$2.99',
    image: 'https://i.imgur.com/prSOnjt.png',
    category: 'meals'
  },
  {
    id: '2',
    name: 'Silverbeet fatteh with yoghurt',
    price: '$4.50',
    image: 'https://i.imgur.com/5Px5xd2.png',
    category: 'meals'
  },
  {
    id: '3',
    name: 'Lemon Chicken',
    price: '$3.25',
    image: 'https://i.imgur.com/Lsxb7an.png',
    category: 'meals'
  },
  {
    id: '4',
    name: 'Special package 1',
    price: '$3.00',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c33ba03542d0e7a91d8a238bbc96ecf0a318e4be412aad362b2410ec494c6266',
    category: 'package'
  },
  {
    id: '5',
    name: 'Special package 2',
    price: '$3.00',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8e921e211173dcb02f0d3ce602a825a33c73ce65659fb7e32120ceaf6150ce67',
    category: 'package'
  }
];

export default function SearchScreen() {
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(sampleProducts);
  
  const handleSearch = (text: string) => {
    setSearchQuery(text);
    
    if (text.trim() === '') {
      setSearchResults(sampleProducts);
      return;
    }
    
    const filtered = sampleProducts.filter(item => 
      item.name.toLowerCase().includes(text.toLowerCase()) ||
      item.category.toLowerCase().includes(text.toLowerCase())
    );
    
    setSearchResults(filtered);
  };
  
  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.resultItem}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
  
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            value={searchQuery}
            onChangeText={handleSearch}
            autoFocus
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => handleSearch('')}>
              <Ionicons name="close-circle" size={20} color="#666" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.resultsList}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No results found</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    marginRight: 12,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    fontFamily: 'Poppins',
  },
  resultsList: {
    padding: 16,
  },
  resultItem: {
    flexDirection: 'row',
    marginBottom: 16,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 6,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Poppins',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#010101',
    fontFamily: 'Poppins',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'Poppins',
  }
});