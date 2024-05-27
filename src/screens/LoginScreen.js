import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { my_auth, signInWithEmailAndPassword } from "./firebase";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signIn() {
    signInWithEmailAndPassword(my_auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed in:", user.uid);
        navigation.navigate("DataScreen", { email: user.email });
      })
      .catch((error) => {
        console.log("Sign in error:", error.message);
      });
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
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={signIn}
          style={[styles.button, styles.signInButton]}
        >
          <Text style={styles.buttonText}>Sign In</Text>
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
  signInButton: {
    backgroundColor: "#0782F9",
  },
});