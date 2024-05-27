import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [colors, setColors] = useState([0, 0, 0]);

  const setColor = (color, change) => {
    setColors(prevColors => {
      return prevColors.map((prevColor, index) => {
        if (index === color) {
          return validateColor(prevColor + change);
        }
        return prevColor;
      });
    });
  };

  const validateColor = (color) => {
    if (color > 255) {
      return 255;
    } else if (color < 0) {
      return 0;
    }
    return color;
  };

  return (
    <View>
      <View style={[styles.colorSquare, { backgroundColor: `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})` }]} />
      <Button title="More Red" onPress={() => setColor(0, COLOR_INCREMENT)} />
      <Button title="More Green" onPress={() => setColor(1, COLOR_INCREMENT)} />
      <Button title="More Blue" onPress={() => setColor(2, COLOR_INCREMENT)} />
    </View>
  );
};

const styles = StyleSheet.create({
  colorSquare: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default SquareScreen;
