import MailingListForm from "@/components/MailingListForm";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { styles } from "./styles";

interface Package {
  image: string;
  title: string;
  price: string;
}

interface Meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

const renderItem = ({ item }: { item: Package }) => (
  <View style={styles.card}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.price}>{item.price}</Text>
  </View>
);

const renderMealItem = ({ item }: { item: Meal }) => (
  <View style={styles.card}>
    <Image source={{ uri: item.strMealThumb }} style={styles.image} />
    <Text style={styles.title}>{item.strMeal}</Text>
    <Text style={styles.price}>Special Package</Text>
  </View>
);

const data = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c33ba03542d0e7a91d8a238bbc96ecf0a318e4be412aad362b2410ec494c6266",
    title: "special package 1",
    price: "$3",
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8e921e211173dcb02f0d3ce602a825a33c73ce65659fb7e32120ceaf6150ce67",
    title: "special package 2",
    price: "$3",
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1c14621b6b7c9c8e6c7404c9309df0995b90fe1cf9888ebb5d984c1957fdd7c",
    title: "special package 3",
    price: "$3",
  },
];

export default function HomeScreen() {
  const [americanMeals, setAmericanMeals] = useState<Meal[]>([]);
  const [mexicanMeals, setMexicanMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAmericanMeals = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?a=American"
        );
        const data = await response.json();
        setAmericanMeals(data.meals || []);
      } catch (error) {
        console.error("Error fetching American meals:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchMexicanMeals = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?a=Mexican"
        );
        const data = await response.json();
        setMexicanMeals(data.meals || []);
      } catch (error) {
        console.error("Error fetching Mexican meals:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAmericanMeals();
    fetchMexicanMeals();
  }, []);

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
          <Text style={styles.heroTitle}>Great Savings</Text>
          <Text style={styles.heroSubtitle}>Introducing better ways to dine</Text>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.shopButton}>
            <Text style={styles.shopButtonText}>SHOP</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.donateSection}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <View style={styles.donateCard}>
            <Image
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/493def27d0912d401c53e91d1b93aeb177ab7ba2cbceaa5f4ef693b1748e4f61",
              }}
              style={styles.donateBackground}
            />
            <Text style={styles.donateTitle}>Favourites</Text>
          </View>
        </View>

        <View style={styles.specialPackages}>
          <Text style={styles.sectionTitle}>Special Packages</Text>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" style={{padding: 20}} />
          ) : (
            <FlatList
              data={americanMeals.slice(0, 6)}
              renderItem={renderMealItem}
              keyExtractor={(item) => item.idMeal}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.listContainer}
              ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            />
          )}
        </View>

        <View style={styles.topPicks}>
          <Text style={styles.sectionTitle}>Top picks</Text>
          <FlatList
            data={mexicanMeals}
            renderItem={renderMealItem}
            keyExtractor={(item) => item.idMeal}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
          />
        </View>
        <View style={styles.newsletter}>
          <MailingListForm/>        
        </View>
      </ScrollView>
    </>
  );
}