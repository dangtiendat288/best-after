import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

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
      <Pressable style={styles.button} onPress={handleSubmit}>
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
    marginTop: 23,
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
});

export default MailingListForm;
