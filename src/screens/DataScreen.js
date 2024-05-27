import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { setDoc, doc, db, collection, getDocs } from './firebase'; // Import Firestore functions

const API_KEY = '';

const DataScreen = () => {
  const [todos, setTodos] = useState([]);
  const [updatedTodos, setUpdatedTodos] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  // Fetch todos from JSONPlaceholder API
  const fetchTodos = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      setTodos(data);
      setIsFetched(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Fetch cities with temperatures between 10-35 degrees Celsius
  const fetchCitiesWithTemperature = async () => {
    const cityNames = [
      'London', 'New York', 'Tokyo', 'Sydney', 'Paris', 'Berlin', 'Moscow', 'Beijing', 'Delhi', 'Dubai',
      // Add more cities as needed
    ];
    const citiesInRange = [];

    for (const city of cityNames) {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();

        if (data.main && data.main.temp >= 10 && data.main.temp <= 35) {
          citiesInRange.push(city);
        }
      } catch (error) {
        console.error(`Error fetching weather data for ${city}:`, error);
      }
    }

    return citiesInRange;
  };

  // Replace titles of todos with city names that have temperatures between 10-35 degrees Celsius
  const replaceTitlesWithCities = async () => {
    const citiesInRange = await fetchCitiesWithTemperature();
    const updated = todos.map((todo, index) => ({
      ...todo,
      title: citiesInRange[index % citiesInRange.length] || todo.title,
    }));

    setUpdatedTodos(updated);
  };

  // Save updated todos to Firestore
  const saveToFirestore = async () => {
    try {
      for (const todo of updatedTodos) {
        await setDoc(doc(db, 'todos', todo.id.toString()), todo);
      }
      console.log('Data saved to Firestore');
    } catch (error) {
      console.error('Error saving data to Firestore:', error);
    }
  };

  // Fetch todos from Firestore
  const fetchFromFirestore = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'todos'));
      const todosFromFirestore = [];
      querySnapshot.forEach((doc) => {
        todosFromFirestore.push({ id: doc.id, title: doc.data().title });
      });
      setTodos(todosFromFirestore);
      console.log('Data retrieved from Firestore');
    } catch (error) {
      console.error('Error fetching data from Firestore:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, styles.purpleButton]} onPress={fetchTodos}>
        <Text style={styles.buttonText}>Fetch Todos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.purpleButton]} onPress={replaceTitlesWithCities}>
        <Text style={styles.buttonText}>Replace Titles</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.purpleButton]} onPress={saveToFirestore}>
        <Text style={styles.buttonText}>Save to Firestore</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.purpleButton]} onPress={fetchFromFirestore}>
        <Text style={styles.buttonText}>Fetch from Firestore</Text>
      </TouchableOpacity>
      <FlatList
        data={updatedTodos.length > 0 ? updatedTodos : todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={isFetched ? styles.todoContainerFetched : styles.todoContainer}>
            <Text style={styles.todoText}>{item.title}</Text>
          </View>
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
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  button: {
    width: '80%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  purpleButton: {
    backgroundColor: '#800080', // Purple color
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  todoContainer: {
    width: '100%',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
  },
  todoContainerFetched: {
    width: '100%',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#e0f7fa',
  },
  todoText: {
    fontSize: 16,
  },
});

export default DataScreen;
