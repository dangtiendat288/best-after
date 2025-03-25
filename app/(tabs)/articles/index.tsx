import React, { useState } from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { styles } from './styles';
// Sample articles data
const articlesData = [
  {
    id: '1',
    title: 'The Hidden Cost of Food Waste',
    excerpt: 'Nearly one-third of all food produced globally goes to waste. Learn how this impacts our environment and economy.',
    author: 'Emma Johnson',
    date: 'March 15, 2025',
    readTime: '5 min read',
    image: 'https://i.imgur.com/9aZs8bv.png', // Replace with actual image
    category: 'Environment'
  },
  {
    id: '2',
    title: 'Simple Ways to Reduce Food Waste at Home',
    excerpt: 'Small changes in your kitchen can make a big difference. Discover practical tips to minimize waste.',
    author: 'Michael Chen',
    date: 'March 10, 2025',
    readTime: '4 min read',
    image: 'https://i.imgur.com/5Px5xd2.png', // Replace with actual image
    category: 'Tips & Tricks'
  },
  {
    id: '3',
    title: 'Food Waste and Climate Change: The Connection',
    excerpt: 'How wasted food contributes to greenhouse gas emissions and what we can do about it.',
    author: 'Dr. Sarah Williams',
    date: 'March 5, 2025',
    readTime: '7 min read',
    image: 'https://i.imgur.com/Lsxb7an.png', // Replace with actual image
    category: 'Climate'
  },
  {
    id: '4',
    title: 'Innovative Technologies Fighting Food Waste',
    excerpt: 'From smart fridges to AI-powered inventory systems, technology is helping solve the food waste crisis.',
    author: 'Alex Rivera',
    date: 'February 28, 2025',
    readTime: '6 min read',
    image: 'https://i.imgur.com/prSOnjt.png', // Replace with actual image
    category: 'Innovation'
  },
  {
    id: '5',
    title: 'Food Waste Regulations Around the World',
    excerpt: 'How different countries are tackling food waste through legislation and incentives.',
    author: 'Olivia Smith',
    date: 'February 20, 2025',
    readTime: '5 min read',
    image: 'https://i.imgur.com/GfkNpVG.png', // Replace with actual image
    category: 'Policy'
  }
];

// Filter categories
const categories = [
  'All',
  'Environment',
  'Tips & Tricks',
  'Climate',
  'Innovation',
  'Policy'
];

export default function ArticlesScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredArticles = selectedCategory === 'All' 
    ? articlesData 
    : articlesData.filter(article => article.category === selectedCategory);
  
  const handleReadArticle = (articleId: string) => {
    // For demonstration - would navigate to full article
    console.log(`Reading article: ${articleId}`);
    // router.push(`/articles/${articleId}`)
  };
  
  const renderArticleItem = ({ item }: { item: any }) => (
    <TouchableOpacity 
      style={styles.articleCard}
      onPress={() => handleReadArticle(item.id)}
    >
      <Image source={{ uri: item.image }} style={styles.articleImage} />
      <View style={styles.categoryPill}>
        <Text style={styles.categoryText}>{item.category}</Text>
      </View>
      <View style={styles.articleContent}>
        <Text style={styles.articleTitle}>{item.title}</Text>
        <Text style={styles.articleExcerpt}>{item.excerpt}</Text>
        <View style={styles.articleMeta}>
          <Text style={styles.authorDate}>{item.author} • {item.date}</Text>
          <Text style={styles.readTime}>{item.readTime}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Articles</Text>
      </View>
      
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
      
      <FlatList
        data={filteredArticles}
        renderItem={renderArticleItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.articlesList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}