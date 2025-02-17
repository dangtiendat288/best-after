import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Linking,
} from "react-native";

interface DonateCardProps {
  name: string;
  image: string;
  url: string;
}

const DonateCard: React.FC<DonateCardProps> = ({ name, image, url }) => {
  const handlePress = async () => {
    const canOpen = await Linking.canOpenURL(url);
    if (canOpen) {
      await Linking.openURL(url);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Pressable onPress={handlePress} style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.linkText}>Click here</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  title: {
    fontSize: 24,
    fontFamily: "Poppins",
    fontWeight: "500",
    color: "#000000",
    marginBottom: 15,
  },
  imageContainer: {
    aspectRatio: 1.054,
    width: "100%",
    maxWidth: 330,
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 13,
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  linkText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
});

export default DonateCard;
