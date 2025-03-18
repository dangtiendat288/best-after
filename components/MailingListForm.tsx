import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const MailingListForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // Handle form submission
    console.log("Email submitted:", email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Never miss a deal</Text>
      <Text style={styles.subtitle}>Receive updates about new promotions</Text>
      <Pressable style={styles.joinButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Join Mailing List</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontFamily: "Montserrat",
    fontWeight: "800",
    lineHeight: 40,
    textAlign: "center",
    color: "#000000",
  },
  subtitle: {
    fontSize: 24,
    fontFamily: "Poppins",
    fontWeight: "500",
    lineHeight: 28,
    textAlign: "center",
    color: "#000000",
    margin: 23,
  },
  button: {
    borderWidth: 2,
    borderColor: "#000000",
    paddingHorizontal: 35,
    paddingVertical: 26,
    marginTop: 24,
    width: "100%",
    maxWidth: 269,
  },
  buttonText: {
    fontSize: 24,
    fontFamily: "Poppins",
    fontWeight: "500",
    textAlign: "center",
    color: "#000000",
  },
  joinButton: {
    width: "100%",
    maxWidth: 269,
    borderWidth: 1,
    borderColor: "#000000",
    padding: 26,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#f8f8f8",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
});

export default MailingListForm;
