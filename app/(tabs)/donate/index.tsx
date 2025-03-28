import DonateCard from "@/components/DonateCard";
import MailingListForm from "@/components/MailingListForm";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "../../../styles/donate/styles";

const DonateScreen = () => {
  const donationOrgs = [
    {
      name: "The Lunchbox Fund",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b2098bc6e3a7d1fed179b3f32d5069ec97c16ddba1be1df7daab8141dd9958b8",
      url: "https://thelunchboxfund.org",
    },
    {
      name: "Gift of the givers",
      image:
        "https://i.imgur.com/6NCA4KR.png",
      url: "https://giftofthegivers.org",
    },
    {
      name: "Ladles of love",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/61a11d87b2c3edf679bfec5ff4b5da42d64a7a4835af098944390191eb642e9e",
      url: "https://ladlesoflove.org.za",
    },
  ];

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
          <Text style={styles.heroTitle}>Donate</Text>
          <Text style={styles.heroSubtitle}>
            Pick from all the amazing organisations you could donate to
          </Text>
        </View>

        <View style={styles.donateImageContainer}>
          <Image
            source={require("../../../assets/images/donateHeroImage.png")}
            style={styles.donateImage}
          />
        </View>

        <View style={styles.donateSection}>
        <Text style={styles.sectionTitle}>Hearts that hope</Text>
        <View style={styles.donateCard}>
                    <Image
                      source={
                        require("../../../assets/images/heartDonate.png")
                      }
                      style={styles.donateBackground}
                    />
                    <Ionicons name="arrow-forward" size={58} color="white" style={{ ...styles.icon, marginStart: 150 }} />
                    {/* <Text style={styles.donateTitle}>Favourites</Text> */}
                  </View>
        </View>

        <View style={styles.donationCardsSection}>
          <Text style={styles.sectionTitle}>Donation Organizations</Text>
          {donationOrgs.map((org, index) => (
            <DonateCard
              key={index}
              name={org.name}
              image={org.image}
              url={org.url}
            />
          ))}
        </View>

        <View style={styles.newsletter}>
          <Text style={styles.newsletterTitle}>Never miss a donation</Text>
          <Text style={styles.newsletterSubtitle}>
            Receive updates about donation opportunities
          </Text>
          <MailingListForm />
        </View>        
      </ScrollView>
    </>
  );
};

export default DonateScreen;