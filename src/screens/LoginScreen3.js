import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { db } from './firebase.js';
import { collection, doc, setDoc } from "firebase/firestore";
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function registerUser() {
        const userRef = doc(collection(db, "users"));
        setDoc(userRef, {
            email: email,
            password: password,
        }).then(() => {
            console.log("User registered successfully");
            navigation.navigate('LoginScreen', { userId: userRef.id });
        }).catch((error) => {
            console.error("Error registering user: ", error);
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
                    style={styles.input}
                    secureTextEntry={true}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={registerUser}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Register</Text>
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
