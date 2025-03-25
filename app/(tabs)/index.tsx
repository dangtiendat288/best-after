import MailingListForm from "@/components/MailingListForm";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
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

interface MealDetail extends Meal {
  strInstructions: string;
  strCategory: string;
  strArea: string;
  strYoutube: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strMeasure1?: string;
  strMeasure2?: string;
  strMeasure3?: string;
  strMeasure4?: string;
  strMeasure5?: string;
  // Could add more ingredients and measures as needed
}

const renderItem = ({ item }: { item: Package }) => (
  <View style={styles.card}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.price}>{item.price}</Text>
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
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState<MealDetail | null>(null);
  const [loadingMealDetails, setLoadingMealDetails] = useState(false);

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

  const fetchMealDetails = async (mealId: string) => {
    try {
      setLoadingMealDetails(true);
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
      const data = await response.json();
      if (data.meals && data.meals.length > 0) {
        setSelectedMeal(data.meals[0]);
        setModalVisible(true);
      }
    } catch (error) {
      console.error("Error fetching meal details:", error);
    } finally {
      setLoadingMealDetails(false);
    }
  };

  const renderMealItem = ({ item }: { item: Meal }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => fetchMealDetails(item.idMeal)}
    >
      <Image source={{ uri: item.strMealThumb }} style={styles.image} />
      <Text style={styles.title}>{item.strMeal}</Text>
      <Text style={styles.price}>Special Package</Text>
    </TouchableOpacity>
  );

  // Helper function to get ingredients and measures as pairs
  const getIngredientList = () => {
    if (!selectedMeal) return [];
    
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = selectedMeal[`strIngredient${i}` as keyof MealDetail];
      const measure = selectedMeal[`strMeasure${i}` as keyof MealDetail];
      
      if (ingredient && ingredient.trim() !== '') {
        ingredients.push({
          ingredient,
          measure: measure || ''
        });
      }
    }
    return ingredients;
  };

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

      {/* Meal Details Modal */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 58}}>
          <ScrollView contentContainerStyle={{padding: 20}}>
            {loadingMealDetails ? (
              <ActivityIndicator size="large" color="#0000ff" style={{marginTop: 50}} />
            ) : selectedMeal ? (
              <>
                <TouchableOpacity 
                  onPress={() => setModalVisible(false)}
                  style={{
                    alignSelf: 'flex-end', 
                    padding: 10, 
                    marginBottom: 10
                  }}
                >
                  <Text style={{fontSize: 18, fontWeight: 'bold'}}>Close</Text>
                </TouchableOpacity>
                
                <Image 
                  source={{uri: selectedMeal.strMealThumb}} 
                  style={{
                    width: '100%', 
                    height: 250, 
                    borderRadius: 10,
                    marginBottom: 20
                  }}
                />
                
                <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 10}}>
                  {selectedMeal.strMeal}
                </Text>
                
                <View style={{flexDirection: 'row', marginBottom: 15}}>
                  <Text style={{fontWeight: 'bold', marginRight: 5}}>Category:</Text>
                  <Text>{selectedMeal.strCategory}</Text>
                </View>
                
                <View style={{flexDirection: 'row', marginBottom: 15}}>
                  <Text style={{fontWeight: 'bold', marginRight: 5}}>Cuisine:</Text>
                  <Text>{selectedMeal.strArea}</Text>
                </View>
                
                <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginTop: 10}}>
                  Ingredients
                </Text>
                
                {getIngredientList().map((item, index) => (
                  <View key={index} style={{flexDirection: 'row', marginBottom: 5}}>
                    <Text style={{fontWeight: 'bold', marginRight: 5}}>•</Text>
                    <Text style={{flex: 1}}>{item.measure} {item.ingredient}</Text>
                  </View>
                ))}
                
                <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginTop: 20}}>
                  Instructions
                </Text>
                
                <Text style={{lineHeight: 22, marginBottom: 30}}>
                  {selectedMeal.strInstructions}
                </Text>
                
                {selectedMeal.strYoutube && (
                  <View style={{marginBottom: 20}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
                      Watch Video Tutorial
                    </Text>
                    <TouchableOpacity 
                      style={{
                        backgroundColor: '#ff0000',
                        padding: 12,
                        borderRadius: 5,
                        alignItems: 'center'
                      }}
                    >
                      <Text style={{color: 'white', fontWeight: 'bold'}}>
                        Open YouTube Video
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </>
            ) : (
              <Text style={{textAlign: 'center', marginTop: 50}}>
                No meal details available
              </Text>
            )}
          </ScrollView>
        </View>
      </Modal>
    </>
  );
}