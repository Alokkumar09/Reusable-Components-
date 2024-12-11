import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const FlatListCom = () => {
  // Sample list of items
  const data = [
    { id: '1', title: 'Apple' },
    { id: '2', title: 'Banana' },
    { id: '3', title: 'Orange' },
    { id: '4', title: 'Mango' },
    { id: '5', title: 'Pineapple' },
    { id: '6', title: 'Strawberry' },
    { id: '7', title: 'Apple' },
    { id: '8', title: 'Banana' },
    { id: '9', title: 'Orange' },
    { id: '10', title: 'Mango' },
    { id: '11', title: 'Pineapple' },
    { id: '12', title: 'Strawberry' },
  ];

  // State to track selected item
  const [selectedId, setSelectedId] = useState(null);

  // Render item function
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#ddd' : '#fff'; // Change background color on selection

    return (
      <TouchableOpacity
        style={[styles.item, { backgroundColor }]}
        onPress={() => setSelectedId(item.id)} // Set the selected item
      >
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Fruit List</Text>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 18,
    color: '#333',
  },
});

export default FlatListCom;
