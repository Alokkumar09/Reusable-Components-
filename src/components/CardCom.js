import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, FlatList } from 'react-native';

const CardCom = () => {
  // Array of card data
  const cardData = [
    { id: '1', title: 'Special Offer 1', description: 'Get the best deal on our basic plan. Limited time only!', price: '$49.99', oldPrice: '$79.99' },
    { id: '2', title: 'Special Offer 2', description: 'Best value for the premium plan! Offer ends soon!', price: '$99.99', oldPrice: '$129.99' },
    { id: '3', title: 'Special Offer 3', description: 'Limited time discount on the pro plan.', price: '$149.99', oldPrice: '$199.99' },
    { id: '4', title: 'Special Offer 4', description: 'Get the ultimate plan with this exclusive deal!', price: '$199.99', oldPrice: '$249.99' }
  ];

  // State for animated scale effect
  const [scale] = useState(new Animated.Value(1));

  // Function for when card is pressed (scales down)
  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95,  // Slightly scale down the card
      friction: 4,     // Control spring tension
      useNativeDriver: true, // For better performance
    }).start();
  };

  // Function for when press is released (scales back to normal)
  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,  // Reset scale to normal
      friction: 4,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* FlatList to render multiple price cards */}
      <FlatList
        data={cardData}  // Array of data for the cards
        keyExtractor={(item) => item.id}  // Unique key for each item
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cardContainer}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Animated.View style={[styles.card, { transform: [{ scale }] }]}>
              {/* Card Title */}
              <Text style={styles.cardTitle}>{item.title}</Text>

              {/* Card Description */}
              <Text style={styles.cardDescription}>
                {item.description}
              </Text>

              {/* Card Price */}
              <View style={styles.priceContainer}>
                <Text style={styles.price}>{item.price}</Text>
                <Text style={styles.oldPrice}>{item.oldPrice}</Text>
              </View>

              {/* Buy Now Button */}
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Buy Now</Text>
              </TouchableOpacity>
            </Animated.View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7', // Light background color
    padding: 10,
  },
  cardContainer: {
    width: '100%',
    marginBottom: 20,  // Space between cards
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  cardDescription: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 15,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2a9d8f', // Green color for price
    marginRight: 10,
  },
  oldPrice: {
    fontSize: 20,
    textDecorationLine: 'line-through',  // Strikethrough for the original price
    color: '#999',
  },
  button: {
    backgroundColor: '#2a9d8f',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CardCom;
