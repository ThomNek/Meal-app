import React from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const CATEGORIES = [
  { id: '1', title: 'Italian', imageUrl: 'https://beptueu.vn/hinhanh/tintuc/top-15-hinh-anh-mon-an-ngon-viet-nam-khien-ban-khong-the-roi-mat-1.jpg' },
  { id: '2', title: 'Quick & Easy', imageUrl: 'https://images.unsplash.com/photo-1543353071-873f17a7a088' },
  { id: '3', title: 'Quick & Easy', imageUrl: 'https://images.unsplash.com/photo-1543353071-873f17a7a088' },
  { id: '4', title: 'Quick & Easy', imageUrl: 'https://images.unsplash.com/photo-1543353071-873f17a7a088' },
  // Thêm các danh mục khác
];

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          navigation.navigate('Meals', {
            categoryId: itemData.item.id,
            categoryTitle: itemData.item.title,
          });
        }}
      >
        <View style={styles.container}>
          <ImageBackground source={{ uri: itemData.item.imageUrl }} style={styles.bgImage}>
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={2}>
                {itemData.item.title}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
});

export default CategoriesScreen;
