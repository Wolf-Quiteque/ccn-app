import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const generateRandomImageUrl = () => {
  // Generate a random image from Picsum
  const randomImageId = Math.floor(Math.random() * 1000);
  return `https://picsum.photos/200/200?image=${randomImageId}`;
};

const generateRandomViews = () => {
  // Generate a random number of views (for demonstration)
  return Math.floor(Math.random() * 10000) + 1000;
};

const generateRandomTitle = () => {
  // Generate a random title (for demonstration)
  const titles = [
    'Nature Beauty',
    'Cityscape',
    'Travel Adventures',
    'Abstract Art'
  ];
  const randomIndex = Math.floor(Math.random() * titles.length);
  return titles[randomIndex];
};

const generateRandomData = () => {
  return Array(4)
    .fill(null)
    .map(() => ({
      imageUrl: generateRandomImageUrl(),
      title: generateRandomTitle(),
      views: generateRandomViews()
    }));
};

const CardRow = ({ title }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(generateRandomData());
  }, []);

  return (
    <View>
      <Text style={styles.rowTitle}>{title}</Text>
      <View style={styles.container}>
        {cards.map((card, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: card.imageUrl }} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{card.title}</Text>
            <View style={styles.viewsContainer}>
              <Ionicons name="md-eye" size={16} color="#333" />
              <Text style={styles.viewsText}>{card.views} views</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const Downloads = () => {
  return (
    <ScrollView>
      <CardRow title="Channels" />
      <CardRow title="Popular Channels" />
      <CardRow title="Recommended Channels" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rowTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
    color: '#fff'
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 10
  },
  card: {
    width: '48%',
    marginVertical: 10,
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
    overflow: 'hidden'
  },
  cardImage: {
    width: '100%',
    height: 100
  },
  cardTitle: {
    padding: 8,
    fontSize: 14,
    fontWeight: 'bold'
  },
  viewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
    paddingBottom: 8
  },
  viewsText: {
    fontSize: 12,
    color: '#333',
    marginLeft: 4
  }
});

export default Downloads;
