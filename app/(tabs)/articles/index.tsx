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
    image: 'https://images.unsplash.com/photo-1605521496801-36219c0c58e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'Environment'
  },
  {
    id: '2',
    title: 'Simple Ways to Reduce Food Waste at Home',
    excerpt: 'Small changes in your kitchen can make a big difference. Discover practical tips to minimize waste.',
    author: 'Michael Chen',
    date: 'March 10, 2025',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1584473457409-ce95a89cdb3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'Tips & Tricks'
  },
  {
    id: '3',
    title: 'Food Waste and Climate Change: The Connection',
    excerpt: 'How wasted food contributes to greenhouse gas emissions and what we can do about it.',
    author: 'Dr. Sarah Williams',
    date: 'March 5, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'Climate'
  },
  {
    id: '4',
    title: 'Innovative Technologies Fighting Food Waste',
    excerpt: 'From smart fridges to AI-powered inventory systems, technology is helping solve the food waste crisis.',
    author: 'Alex Rivera',
    date: 'February 28, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'Innovation'
  },
  {
    id: '5',
    title: 'Food Waste Regulations Around the World',
    excerpt: 'How different countries are tackling food waste through legislation and incentives.',
    author: 'Olivia Smith',
    date: 'February 20, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'Policy'
  },
  {
    id: '6',
    title: 'Composting 101: Turn Food Waste into Garden Gold',
    excerpt: 'A beginner\'s guide to starting your own compost system and enriching your garden soil naturally.',
    author: 'Robert Green',
    date: 'February 15, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1591057668731-8faec281200b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'Tips & Tricks'
  },
  {
    id: '7',
    title: 'The Psychology Behind Food Waste',
    excerpt: 'Understanding the behavioral patterns and cognitive biases that lead us to waste food.',
    author: 'Dr. Maya Patel',
    date: 'February 8, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'Environment'
  },
  {
    id: '8',
    title: 'Food Waste in Restaurants: An Industry Challenge',
    excerpt: 'How the hospitality industry is tackling its food waste problem through innovative solutions.',
    author: 'Chef Daniel Torres',
    date: 'February 1, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'Innovation'
  },
  {
    id: '9',
    title: 'Food Rescue: Connecting Surplus to Need',
    excerpt: 'Organizations bridging the gap between excess food and hungry people, creating sustainable food systems.',
    author: 'Lisa Wong',
    date: 'January 25, 2025',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'Innovation'
  },
  {
    id: '10',
    title: 'The Carbon Footprint of Food Waste',
    excerpt: 'How reducing food waste can be one of the most effective climate actions individuals can take.',
    author: 'James Peterson',
    date: 'January 18, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'Climate'
  },
  {
    id: '11',
    title: 'Teaching Kids About Food Waste Prevention',
    excerpt: 'Educational strategies to help the next generation develop sustainable food habits from an early age.',
    author: 'Sofia Rodriguez',
    date: 'January 10, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'Tips & Tricks'
  },
  {
    id: '12',
    title: 'Zero-Waste Kitchens: Commercial Success Stories',
    excerpt: 'Restaurants and food businesses that have eliminated waste while improving their bottom line.',
    author: 'Thomas Wright',
    date: 'January 5, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'Innovation'
  },
  {
    id: '13',
    title: 'Zero-Waste Kitchens: Commercial Success Stories',
    excerpt: 'Restaurants and food businesses that have eliminated waste while improving their bottom line.',
    author: 'Thomas Wright',
    date: 'January 5, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1581954724853-ea9753f4e5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
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