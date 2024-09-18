import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const MEALS = [
  { id: '1', categoryId: '1', title: 'Spaghetti', imageUrl: 'https://images.unsplash.com/photo-1529042410759-befb1204b468' },
  { id: '2', categoryId: '1', title: 'Pizza', imageUrl: 'https://mediawinwin.vn/upload/images/sanpham/chup-anh-san-pham-do-an.jpg' },
  // Thêm các món ăn khác
];

const MealsScreen = ({ route }) => {
  const { categoryId, categoryTitle } = route.params;

  const displayedMeals = MEALS.filter(meal => meal.categoryId === categoryId);

  const renderMealItem = (itemData) => {
    return (
      <TouchableOpacity style={styles.mealItem}>
        <View>
          <Image source={{ uri: itemData.item.imageUrl }} style={styles.mealImage} />
          <Text style={styles.mealTitle}>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={displayedMeals}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
    elevation: 3,
  },
  mealImage: {
    width: '100%',
    height: '80%',
  },
  mealTitle: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 5,
  },
});

export default MealsScreen;
