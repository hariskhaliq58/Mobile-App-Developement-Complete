import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  my_auth,
  createUserWithEmailAndPassword,
  setDoc,
  doc,
  db,
} from "./firebase";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [age, setAge] = useState("");

  async function signUp() {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        my_auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", email), {
        fullName,
        fatherName,
        age,
      });

      console.log("User signed up:", user.uid);
    } catch (error) {
      console.log("Sign up error:", error.message);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry={true}
        />
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
          onPress={signUp}
          style={[styles.button, styles.signUpButton]}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
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
  signUpButton: {
    backgroundColor: "#0782F9",
  },
});