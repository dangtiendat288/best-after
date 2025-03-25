import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';
// Sample user data
const userData = {
  name: 'Jessica Thompson',
  email: 'jessica@example.com',
  phone: '(123) 456-7890',
  address: '123 Main Street, San Francisco, CA 94105',
  avatar: 'https://i.imgur.com/GfkNpVG.png'
};

const profileOptions = [
  {
    id: 'orders',
    title: 'Orders',
    icon: 'receipt-outline',
    subtitle: 'View your order history'
  },
  {
    id: 'addresses',
    title: 'Addresses',
    icon: 'location-outline',
    subtitle: 'Manage your addresses'
  },
  {
    id: 'payment',
    title: 'Payment Methods',
    icon: 'card-outline',
    subtitle: 'Manage your payment options'
  },
  {
    id: 'notifications',
    title: 'Notifications',
    icon: 'notifications-outline',
    subtitle: 'Configure notification settings'
  },
  {
    id: 'help',
    title: 'Help',
    icon: 'help-circle-outline',
    subtitle: 'Get assistance and support'
  },
  {
    id: 'aboutus',
    title: 'About Us',
    icon: 'information-circle-outline',
    subtitle: 'Learn about our mission and story'
  }
];

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();

  const handleOptionPress = (optionId: string) => {
    // For demonstration purposes
    console.log(`Selected option: ${optionId}`);
    // router.push(`/profile/${optionId}`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <View style={styles.profileSection}>
        <Image 
          source={{ uri: userData.avatar }} 
          style={styles.avatar}
        />
        <Text style={styles.userName}>{userData.name}</Text>
        <Text style={styles.userEmail}>{userData.email}</Text>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.optionsContainer}>
        {profileOptions.map(option => (
          <TouchableOpacity 
            key={option.id}
            style={styles.optionItem}
            onPress={() => handleOptionPress(option.id)}
          >
            <View style={styles.optionIconContainer}>
              <Ionicons name={option.icon as any} size={24} color="#010101" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>{option.title}</Text>
              <Text style={styles.optionSubtitle}>{option.subtitle}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#8E8E8E" />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={20} color="#FF3B30" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>

      <View style={styles.versionContainer}>
        <Text style={styles.versionText}>Version 1.0.0</Text>
      </View>
    </ScrollView>
  );
}