import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function SearchScreen() {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleSearch}>
        <Feather name={showSearch ? "x" : "search"} size={24} color="black" />
      </TouchableOpacity>
      {showSearch && (
        <TextInput
          style={styles.input}
          placeholder="Search"
          autoFocus={true}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#c5b576',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    height: 40,
    backgroundColor: '#b5c576',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});
