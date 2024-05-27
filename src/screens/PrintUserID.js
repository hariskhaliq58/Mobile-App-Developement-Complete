import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PrintUserID({ route }) {
  const { userId } = route.params;

  return (
    <View style={styles.container}>
      <Text>User ID: {userId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
