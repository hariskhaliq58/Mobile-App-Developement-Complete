import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { setDoc, doc, db } from "./firebase";

export default function ExtraInfoScreenInfoScreen({ route, navigation }) {
  const { email } = route.params;
  const [fullName, setFullName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [age, setAge] = useState("");

  async function saveAdditionalInfo() {
    try {
      await setDoc(doc(db, "users", email), {
        fullName,
        fatherName,
        age,
      });
      navigation.navigate("MainScreen");
    } catch (error) {
      console.log("Error saving extra info:", error.message);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Full Name"
          value={fullName}
          onChangeText={(text) => setFullName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Father's Name"
          value={fatherName}
          onChangeText={(text) => setFatherName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Age"
          value={age}
          onChangeText={(text) => setAge(text)}
          style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={saveAdditionalInfo}
          style={[styles.button, styles.saveButton]}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    width: "60%",
    alignItems: "center",
  },
  button: {
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "#0782F9",
  },
});