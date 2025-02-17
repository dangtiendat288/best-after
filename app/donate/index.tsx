import DonateCard from "@/components/DonateCard";
import Footer from "@/components/Footer";
import MailingListForm from "@/components/MailingListForm";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";


const DonateScreen = () => {
  const donationOrgs = [
    {
      name: "The lunchbox Fund",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b2098bc6e3a7d1fed179b3f32d5069ec97c16ddba1be1df7daab8141dd9958b8",
      url: "https://thelunchboxfund.org",
    },
    {
      name: "Gift of the givers",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/49020a9c-2dfe-401d-89f3-da27a9c41482",
      url: "https://giftofthegivers.org",
    },
    {
      name: "ladles of love",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/61a11d87b2c3edf679bfec5ff4b5da42d64a7a4835af098944390191eb642e9e",
      url: "https://ladlesoflove.org.za",
    },
  ];

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
      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/3db41280b443a5c2ea268a44f5162b8e9f0eca8b1314a61364b8c168b848ad4b",
        }}
        style={styles.mainImage}
      />

      <View style={styles.content}>
        <Text style={styles.title}>Donate</Text>
        <Text style={styles.subtitle}>
          pick from all the amazing organisations you could donate to
        </Text>

        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/76bb47a2-8820-40ab-bd82-37fe5cc049d0",
          }}
          style={styles.donateImage}
        />

        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/20445d58-51b8-495d-a4e0-6642600d66f9",
          }}
          style={styles.separatorImage}
        />

        {donationOrgs.map((org, index) => (
          <DonateCard
            key={index}
            name={org.name}
            image={org.image}
            url={org.url}
          />
        ))}

        <MailingListForm />
      </View>

      <Footer />
    </ScrollView>
    </>
  );
};

export default DonateScreen;
