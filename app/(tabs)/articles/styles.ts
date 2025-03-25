import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');
const cardWidth = width * 0.7;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Prociono',
    color: '#010101',
  },
  categoriesContainer: {
    padding: 16,
    alignItems: 'center',
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    height: 30,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedCategory: {
    backgroundColor: '#010101',
  },
  categoryButtonText: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#666',
  },
  selectedCategoryText: {
    color: '#fff',
    fontWeight: '500',
  },
  articlesList: {
    padding: 16,
    paddingTop: 0,           
  },
  articleCard: {
    marginBottom: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  articleImage: {
    width: '100%',
    height: 180,
  },
  categoryPill: {
    position: 'absolute',
    top: 16,
    left: 16,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  categoryText: {
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '500',
    color: '#010101',
  },
  articleContent: {
    padding: 16,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Poppins',
    marginBottom: 8,
    color: '#010101',
  },
  articleExcerpt: {
    fontSize: 14,
    fontFamily: 'Poppins',
    color: '#666',
    marginBottom: 12,
    lineHeight: 20,
  },
  articleMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  authorDate: {
    fontSize: 12,
    color: '#888',
    fontFamily: 'Poppins',
  },
  readTime: {
    fontSize: 12,
    color: '#888',
    fontFamily: 'Poppins',
  }
});