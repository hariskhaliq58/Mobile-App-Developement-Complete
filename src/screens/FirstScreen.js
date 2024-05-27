import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { StackActions } from "@react-navigation/native";
import { my_auth } from "./firebase";

export default function FirstScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      my_auth.onAuthStateChanged((user) => {
        const routeName = user != null ? "MainScreen" : "LoginScreen";
        navigation.dispatch(StackActions.replace(routeName));
      });
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text> Welcome to FirstScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});