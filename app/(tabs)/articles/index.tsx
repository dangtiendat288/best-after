import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { styles } from './styles';

// News API key
const NEWS_API_URL = `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.EXPO_PUBLIC_NEWS_API_KEY}&language=en`;

// Sample articles data
const sampleArticles = {
  "meta": {
      "found": 1268402,
      "returned": 10,
      "limit": 10,
      "page": 1
  },
  "data": [
      {
          "uuid": "30495f3f-bdd5-46d3-82d9-f8f0905fbc6f",
          "title": "Kelsey Anderson and Daisy Kent Gave Juliana Advice After The Bachelor",
          "description": "‘The Bachelor’ season 29 contestant Juliana Pasquarosa spoke with ‘The Bachelor’ season 28 winner Kelsey Anderson and runner-up Daisy Kent",
          "keywords": "",
          "snippet": "Juliana Pasquarosa leaned on some familiar Bachelor Nation faces — Kelsey Anderson and Daisy Kent — following her engagement to Bachelor Grant Ellis.\n\n“I ...",
          "url": "https://www.usmagazine.com/entertainment/news/kelsey-anderson-and-daisy-kent-gave-juliana-advice-after-the-bachelor/",
          "image_url": "https://www.usmagazine.com/wp-content/uploads/2025/03/juliana-pasquarosa-received-advice-from-kelsey-anderson-and-daisy-kent.jpg?crop=0px,18px,2000px,1050px&resize=1200,630&quality=70&strip=all",
          "language": "en",
          "published_at": "2025-03-25T17:00:13.000000Z",
          "source": "usmagazine.com",
          "categories": [
              "entertainment",
              "general"
          ],
          "relevance_score": null,
          "locale": "us"
      },
      {
          "uuid": "9349baa0-c3c2-4fc1-87ae-06b2e3676791",
          "title": "UK energy giant discloses details of Russian lawsuit",
          "description": "Moscow is seeking $1.6 billion in damages from Shell over the Sakhalin-2 LNG joint venture that the latter quit in 2022",
          "keywords": "",
          "snippet": "Moscow is seeking $1.6 billion in damages from Shell over the Sakhalin-2 LNG joint venture that the latter quit in 2022\n\nRussia is seeking over $1.6 billion in ...",
          "url": "https://www.rt.com/business/614757-shell-discloses-details-russia-lawsuit/",
          "image_url": "https://mf.b37mrtl.ru/files/2025.03/article/67e2d4db203027443e6fe3ce.jpg",
          "language": "en",
          "published_at": "2025-03-25T16:55:24.000000Z",
          "source": "rt.com",
          "categories": [
              "general",
              "politics"
          ],
          "relevance_score": null,
          "locale": "us"
      },
      {
          "uuid": "a4b92068-015c-469d-aa06-ef6b810153c2",
          "title": "Justin Hartley Says Sharing Tracker With Wife Sofia Pernas Is Better",
          "description": "Justin Hartley says he is thrilled to work on a series that allows for him to share the screen with wife Sofia Pernas",
          "keywords": "",
          "snippet": "For Justin Hartley, getting to work with wife Sofia Pernas on his hit CBS series Tracker just makes the experience that much better.\n\n“I enjoy being around he...",
          "url": "https://www.usmagazine.com/entertainment/news/justin-hartley-says-sharing-tracker-with-wife-sofia-pernas-is-better/",
          "image_url": "https://www.usmagazine.com/wp-content/uploads/2025/03/Justin-Hartley-Says-Getting-to-Share-Tracker-With-Wife-Sofia-Pernas-Makes-It-Even-Better.jpg?crop=150px,141px,1850px,970px&resize=1200,630&quality=86&strip=all",
          "language": "en",
          "published_at": "2025-03-25T16:55:18.000000Z",
          "source": "usmagazine.com",
          "categories": [
              "entertainment",
              "general"
          ],
          "relevance_score": null,
          "locale": "us"
      }, 
      {
          "uuid": "e362f8f9-d17b-447c-aebf-bd05f189b908",
          "title": "The Who's Pete Townshend Throws Shade at The Beatles",
          "description": "The Who's Pete Townshend explained major differences between his band and The Beatles, claiming that the Fab Four ‘made a joke’ out of serious interview que...",
          "keywords": "",
          "snippet": "The Who’s Pete Townshend offered a shady explanation of his differences with fellow 1960s rock titans The Beatles.\n\n“When you look at early interviews with ...",
          "url": "https://www.usmagazine.com/entertainment/news/the-whos-pete-townshend-throws-shade-at-the-beatles/",
          "image_url": "https://www.usmagazine.com/wp-content/uploads/2025/03/The-Whos-Pete-Townshend-Throws-Shade-at-The-Beatles-They-Made-a-Joke-at-Serious-Questions-1.jpg?crop=0px,0px,1632px,857px&resize=1200,630&quality=76&strip=all",
          "language": "en",
          "published_at": "2025-03-25T16:46:20.000000Z",
          "source": "usmagazine.com",
          "categories": [
              "entertainment",
              "general"
          ],
          "relevance_score": null,
          "locale": "us"
      },
      {
          "uuid": "ffc83fae-87ea-4d43-a8e3-b3681f88f948",
          "title": "Republican leaders eye extreme alternatives to impeaching federal judges",
          "description": "Congress' Republican leaders don't see the point in trying to impeach judges, but they have some dramatic alternatives in mind that are nearly as radical.",
          "keywords": "",
          "snippet": "As things stand, a relatively small group of House Republicans are pushing a series of impeachment resolutions targeting four sitting federal judges — and cou...",
          "url": "https://www.msnbc.com/rachel-maddow-show/maddowblog/republican-leaders-eye-extreme-alternatives-impeaching-federal-judges-rcna198004",
          "image_url": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2025-03/250325-mike-johnson-john-thune-mn-1215-e8d64b.jpg",
          "language": "en",
          "published_at": "2025-03-25T16:44:41.000000Z",
          "source": "msnbc.com",
          "categories": [
              "general",
              "politics"
          ],
          "relevance_score": null,
          "locale": "us"
      },
      {
          "uuid": "f9b6162d-e640-4abf-b678-54268811025c",
          "title": "Russia, Ukraine agree to \"ensure safe navigation,\" stop fighting in Black Sea, Trump admin announces",
          "description": "Russia and Ukraine have agreed to",
          "keywords": "Ukraine, Donald Trump, Russia, Black Sea, Vladimir Putin",
          "snippet": "U.S.-Russia talks in Saudi Arabia appear to end but no news on Ukraine ceasefire\n\nRussia and Ukraine have agreed to \"ensure safe navigation, eliminate the use o...",
          "url": "https://www.cbsnews.com/news/russia-ukraine-black-sea-agreement-trump-administration-says/",
          "image_url": "https://assets3.cbsnewsstatic.com/hub/i/r/2025/03/25/2a5489d7-f096-4d8b-b542-11e041100b17/thumbnail/1200x630/23d3c434fd9b6629ede3d6a90d0b619b/gettyimages-2205287077.jpg?v=9e5c48f1b04ac2a564e8a4c51250ac89",
          "language": "en",
          "published_at": "2025-03-25T16:41:12.000000Z",
          "source": "cbsnews.com",
          "categories": [
              "general",
              "politics"
          ],
          "relevance_score": null,
          "locale": "us"
      },      
      {
          "uuid": "6a257893-d0e9-44cb-956e-06f17f8aa981",
          "title": "US state media gets emergency cash injection",
          "description": "Radio Free Europe/Radio Liberty is set to receive money from its parent US government agency, the broadcaster has announced",
          "keywords": "",
          "snippet": "Radio Free Europe/Radio Liberty is set to receive $7.46 million from its parent US government agency, the broadcaster says\n\nCash-strapped US state broadcaster R...",
          "url": "https://www.rt.com/news/614747-us-state-media-funds/",
          "image_url": "https://mf.b37mrtl.ru/files/2025.03/article/67e2db8c85f5404d2f4c4737.jpg",
          "language": "en",
          "published_at": "2025-03-25T16:36:51.000000Z",
          "source": "rt.com",
          "categories": [
              "general",
              "politics"
          ],
          "relevance_score": null,
          "locale": "us"
      },
      {
          "uuid": "b7c28940-1584-4294-b28d-3642724000fc",
          "title": "Pam Bondi issues new warning to far-left Democrat over 'dangerous' rhetoric toward Elon Musk, Ted Cruz",
          "description": "United States Attorney General Pam Bondi said Rep. Jasmine Crockett must apologize immediately for 'encouraging violence' to 'increase her followers.'",
          "keywords": "",
          "snippet": "Attorney General Pam Bondi said Monday that Rep. Jasmine Crockett, D-Texas, is \"threatening lives\" with her rhetoric against DOGE head Elon Musk after left-wing...",
          "url": "https://www.foxnews.com/media/pam-bondi-issues-new-warning-far-left-democrat-over-dangerous-rhetoric-toward-elon-musk-ted-cruz",
          "image_url": "https://static.foxnews.com/foxnews.com/content/uploads/2025/03/crockett-musk-bondi.jpg",
          "language": "en",
          "published_at": "2025-03-25T16:33:34.000000Z",
          "source": "foxnews.com",
          "categories": [
              "general",
              "politics"
          ],
          "relevance_score": null,
          "locale": "us"
      }
  ]
}

export default function ArticlesScreen() {
  console.log(process.env.EXPO_PUBLIC_NEWS_API_KEY)
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState<string[]>(['All']);
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [usingSampleData, setUsingSampleData] = useState(false);

  // Process articles data and extract categories
  const processArticlesData = (articlesData: any) => {
    if (articlesData && articlesData.data && Array.isArray(articlesData.data)) {
      setArticles(articlesData.data);
      
      // Extract unique categories from the articles data
      const categorySet = new Set<string>();
      categorySet.add('All'); // Always include "All" category
      
      articlesData.data.forEach((article: any) => {
        if (article.categories && Array.isArray(article.categories)) {
          article.categories.forEach((category: string) => {
            // Capitalize first letter of each category
            const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
            categorySet.add(formattedCategory);
          });
        }
      });
      
      setCategories(Array.from(categorySet));
      return true;
    }
    return false;
  };
  
  // Function to fetch articles from the News API
  const fetchArticles = async () => {
    setLoading(true);
    setUsingSampleData(false);
    
    try {
      const response = await fetch(NEWS_API_URL);
      const data = await response.json();
      
      if (!processArticlesData(data)) {
        throw new Error('Invalid response format from API');
      }
    } catch (err) {
      console.error('Error fetching articles:', err);
      
      // Fall back to sample data
      setUsingSampleData(true);
      processArticlesData(sampleArticles);
      
      setError('Unable to fetch latest articles. Showing sample content.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);
  
  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => 
        article.categories && article.categories.some((category: string) => 
          category.toLowerCase() === selectedCategory.toLowerCase()
        )
      );
  
  const handleReadArticle = (article: any) => {
    // Open the article URL in the default browser
    if (article.url) {
      Linking.openURL(article.url);
    }
  };
  
  const renderArticleItem = ({ item }: { item: any }) => (
    <TouchableOpacity 
      style={styles.articleCard}
      onPress={() => handleReadArticle(item)}
    >
      <Image 
        source={{ uri: item.image_url }} 
        style={styles.articleImage} 
        defaultSource={require('../../../assets/images/placeholder.png')}
      />
      {item.categories && item.categories.length > 0 && (
        <View style={styles.categoryPill}>
          <Text style={styles.categoryText}>
            {item.categories[0].charAt(0).toUpperCase() + item.categories[0].slice(1)}
          </Text>
        </View>
      )}
      <View style={styles.articleContent}>
        <Text style={styles.articleTitle}>{item.title}</Text>
        <Text style={styles.articleExcerpt} numberOfLines={3}>{item.snippet || item.description}</Text>
        <View style={styles.articleMeta}>
          <Text style={styles.authorDate}>
            {item.source} • {new Date(item.published_at).toLocaleDateString()}
          </Text>
          <Text style={styles.readTime}>
            {Math.ceil((item.snippet || '').length / 500) || 2} min read
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Articles</Text>
      </View>
      <View style={{height: 50}}>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.categoriesContainer}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={[
              styles.categoryButton,
              selectedCategory === item ? styles.selectedCategory : null
            ]}
            onPress={() => setSelectedCategory(item)}
          >
            <Text style={[
              styles.categoryButtonText,
              selectedCategory === item ? styles.selectedCategoryText : null
            ]}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
      </View>
      
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#010101" />
          <Text style={styles.loadingText}>Loading articles...</Text>
        </View>
      ) : (
        <>
          {usingSampleData && error && (
            <View style={styles.sampleDataNotice}>
              <Text style={styles.sampleDataText}>{error}</Text>
              <TouchableOpacity 
                style={styles.retryButton}
                onPress={fetchArticles}
              >
                <Text style={styles.retryButtonText}>Retry</Text>
              </TouchableOpacity>
            </View>
          )}            
            <FlatList
              data={filteredArticles}
              renderItem={renderArticleItem}
              keyExtractor={(item) => item.uuid}
              contentContainerStyle={styles.articlesList}
              showsVerticalScrollIndicator={false}
              refreshing={loading}
              onRefresh={fetchArticles}
            />            
        </>
      )}
    </View>
  );
}