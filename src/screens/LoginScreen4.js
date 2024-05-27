import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { my_auth } from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState(null);

  function handleSignUp() {
    createUserWithEmailAndPassword(my_auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserId(user.uid);
        console.log("User created successfully with ID:", user.uid);
        Alert.alert("Sign Up Successful", "User signed up successfully!");
        setEmail('');
        setPassword('');
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function handleSignIn() {
    signInWithEmailAndPassword(my_auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserId(user.uid);
        console.log("User signed in successfully with ID:", user.uid);
        navigation.navigate('PrintUserID', { userId: user.uid });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <View behavior='padding' style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, { marginBottom: 10 }]}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignIn}
          style={styles.button}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
