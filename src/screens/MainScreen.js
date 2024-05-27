import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect } from "react";
import { StackActions } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";
import { my_auth } from "./firebase";

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text> {my_auth.currentUser.email}</Text>
      <Text> {my_auth.currentUser.uid}</Text>

      <TouchableOpacity
        onPress={async () => {
          await my_auth.signOut();
          navigation.dispatch(StackActions.replace("FirstScreen"));
        }}
        style={[styles.button, styles.signInButton]}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
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

  buttonContainer: {
    width: "60%",
    alignItems: "center",
  },
  button: {
    width: "70%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
    marginTop: 20,
  },
  signInButton: {
    backgroundColor: "#555",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});