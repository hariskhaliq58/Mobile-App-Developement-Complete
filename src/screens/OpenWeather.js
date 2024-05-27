import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions } from 'react-native';

const API_KEY = '1fa2134ca6c365a0f5aa2c1df52cc02f';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSearch = () => {
    fetchWeatherData();
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput
          style={styles.input}
          value={city}
          onChangeText={setCity}
          placeholder="Enter city name"
        />
        <Button title="Search" onPress={handleSearch} />
      </View>

      {weatherData && (
        <View style={styles.weatherContainer}>
          <Text style={styles.city}>{weatherData.name}</Text>
          <Text style={styles.temperature}>Temperature: {weatherData.main.temp}°C</Text>
          <Text style={styles.feelsLike}>Feels Like: {weatherData.main.feels_like}°C</Text>
          <Text style={styles.humidity}>Humidity: {weatherData.main.humidity}%</Text>
        </View>
      )}

      {!weatherData && (
        <Text style={styles.message}>Enter a city name and click Search to get weather data</Text>
      )}
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  innerContainer: {
    width: screenWidth * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input: {
    height: 40,
    width: screenWidth * 0.6,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  weatherContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  city: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  temperature: {
    fontSize: 20,
    marginBottom: 5,
  },
  feelsLike: {
    fontSize: 20,
    marginBottom: 5,
  },
  humidity: {
    fontSize: 20,
  },
  message: {
    fontSize: 16,
    marginTop: 20,
  },
});

export default App;
