import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Linking,
} from "react-native";
import { Link } from "expo-router";

const Footer = () => {
  const socialLinks = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/207af147-26f3-43b8-a494-6a434d9d9c5d",
      url: "https://facebook.com",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bd03558f-375c-42d8-a67b-b17bd56723d6",
      url: "https://instagram.com",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.linksContainer}>
        <View style={styles.linkColumn}>
          <Text style={styles.linkHeader}>My Account</Text>
          <Link href="/signin" style={styles.link}>
            Sign in
          </Link>
          <Link href="/register" style={styles.link}>
            Register
          </Link>
          <Link href="/orders" style={styles.link}>
            Order status
          </Link>
        </View>

        <View style={styles.linkColumn}>
          <Text style={styles.linkHeader}>Help</Text>
          <Link href="/shipping" style={styles.link}>
            Shipping
          </Link>
          <Link href="/returns" style={styles.link}>
            Returns
          </Link>
          <Link href="/sizing" style={styles.link}>
            Sizing
          </Link>
        </View>
      </View>

      <View style={styles.linksContainer}>
        <View style={styles.linkColumn}>
          <Text style={styles.linkHeader}>About</Text>
          <Link href="/story" style={styles.link}>
            Our story
          </Link>
          <Link href="/media" style={styles.link}>
            Media
          </Link>
          <Link href="/sustainability" style={styles.link}>
            Sustainability
          </Link>
        </View>

        <View style={styles.linkColumn}>
          <Text style={styles.linkHeader}>Legal stuff</Text>
          <Link href="/terms" style={styles.link}>
            Terms of use
          </Link>
          <Link href="/sale-terms" style={styles.link}>
            Terms of sale
          </Link>
          <Link href="/privacy" style={styles.link}>
            Privacy policy
          </Link>
        </View>
      </View>

      <Text style={styles.socialHeader}>Follow Best After</Text>
      <View style={styles.socialContainer}>
        {socialLinks.map((social, index) => (
          <Pressable
            key={index}
            onPress={() => Linking.openURL(social.url)}
            style={styles.socialButton}
          >
            <Image source={{ uri: social.icon }} style={styles.socialIcon} />
          </Pressable>
        ))}
      </View>

      <View style={styles.copyright}>
        <Text style={styles.copyrightText}>
          Best After inc. All Rights Reserved
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 66,
    backgroundColor: "#FFFFFF",
  },
  linksContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  linkColumn: {
    flex: 1,
  },
  linkHeader: {
    fontFamily: "Poppins",
    fontSize: 24,
    fontWeight: "500",
    color: "#010101",
    marginBottom: 12,
  },
  link: {
    fontFamily: "Poppins",
    fontSize: 24,
    color: "#010101",
    marginBottom: 8,
  },
  socialHeader: {
    fontSize: 24,
    fontFamily: "Poppins",
    fontWeight: "500",
    color: "#010101",
    marginTop: 34,
    marginBottom: 28,
  },
  socialContainer: {
    flexDirection: "row",
    gap: 14,
  },
  socialButton: {
    width: 72,
    height: 72,
    borderRadius: 50,
  },
  socialIcon: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  copyright: {
    marginTop: 138,
    flexDirection: "row",
    alignItems: "center",
  },
  copyrightText: {
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: "500",
    color: "#010101",
  },
});

export default Footer;
