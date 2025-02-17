import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { styles } from "./styles";

export default function HomeScreen() {
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
        <Text style={styles.heroTitle}>Great Savings</Text>
        <Text style={styles.heroSubtitle}>Introducing better ways to dine</Text>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.shopButton}>
          <Text style={styles.shopButtonText}>SHOP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.donateSection}>
        <Text style={styles.sectionTitle}>Donate</Text>
        <View style={styles.donateCard}>
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/493def27d0912d401c53e91d1b93aeb177ab7ba2cbceaa5f4ef693b1748e4f61",
            }}
            style={styles.donateBackground}
          />
          <Text style={styles.donateText}>Click here</Text>
          <Text style={styles.donateTitle}>Favourites</Text>
        </View>
      </View>

      <View style={styles.browseSection}>
        <Text style={styles.browseText}>Click here</Text>
        <Text style={styles.browseTitle}>Browse</Text>
      </View>

      <View style={styles.specialPackages}>
        <Text style={styles.sectionTitle}>Special Packages</Text>
        <View style={styles.packageGrid}>
          <View style={styles.packageCard}>
            <Image
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c33ba03542d0e7a91d8a238bbc96ecf0a318e4be412aad362b2410ec494c6266",
              }}
              style={styles.packageImage}
            />
            <Text style={styles.packageTitle}>special package</Text>
            <Text style={styles.packagePrice}>$3</Text>
          </View>
        </View>
      </View>

      <View style={styles.topPicks}>
        <Text style={styles.sectionTitle}>Top picks</Text>
        <View style={styles.picksGrid}>
          <View style={styles.pickCard}>
            <Image
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/8e921e211173dcb02f0d3ce602a825a33c73ce65659fb7e32120ceaf6150ce67",
              }}
              style={styles.pickImage}
            />
            <Text style={styles.pickTitle}>Broccoli pesto pasta</Text>
            <Text style={styles.pickSubtitle}>view recipe</Text>
          </View>
          <View style={styles.pickCard}>
            <Image
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1c14621b6b7c9c8e6c7404c9309df0995b90fe1cf9888ebb5d984c1957fdd7c",
              }}
              style={styles.pickImage}
            />
            <Text style={styles.pickTitle}>pot chicken taco</Text>
            <Text style={styles.pickSubtitle}>view recipe</Text>
          </View>
        </View>
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

      <View style={styles.footer}>
        <View style={styles.footerColumns}>
          <View style={styles.footerColumn}>
            <Text style={styles.footerTitle}>My Account</Text>
            <Text style={styles.footerLink}>Sign in</Text>
            <Text style={styles.footerLink}>Register</Text>
            <Text style={styles.footerLink}>Order status</Text>

            <Text style={styles.footerTitle}>About</Text>
            <Text style={styles.footerLink}>Our story</Text>
            <Text style={styles.footerLink}>Media</Text>
            <Text style={styles.footerLink}>Sustainability</Text>

            <Text style={styles.footerTitle}>Follow Best After</Text>
          </View>

          <View style={styles.footerColumn}>
            <Text style={styles.footerTitle}>Help</Text>
            <Text style={styles.footerLink}>Shipping</Text>
            <Text style={styles.footerLink}>Returns</Text>
            <Text style={styles.footerLink}>Sizing</Text>

            <Text style={styles.footerTitle}>Legal stuff</Text>
            <Text style={styles.footerLink}>Terms of use</Text>
            <Text style={styles.footerLink}>Terms of sale</Text>
            <Text style={styles.footerLink}>Privacy policy</Text>
          </View>
        </View>

        <View style={styles.socialIcons}>
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f90203a5-f358-4a75-b51a-f4669f887986",
            }}
            style={styles.socialIcon}
          />
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/81403685-edaf-4485-8b1f-77b692e45bb4",
            }}
            style={styles.socialIcon}
          />
        </View>

        <View style={styles.copyright}>
          <Text style={styles.copyrightText}>
            Best After inc. All Rights Reserved
          </Text>
        </View>
      </View>
    </ScrollView>
    </>
  );
}

