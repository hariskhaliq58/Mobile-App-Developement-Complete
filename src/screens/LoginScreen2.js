import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { db } from './firebase.js';
import { collection, setDoc, doc, getDocs, query, where } from "firebase/firestore";

export default function LoginScreen() {
    const [rollNumber, setRollNumber] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    async function create() {
        const rollNumberExists = await checkIfExists('rollNumber', rollNumber);
        const emailExists = await checkIfExists('email', email);

        if (rollNumberExists) {
            alert('Roll number already exists!');
            return;
        }

        if (emailExists) {
            alert('Email already exists!');
            return;
        }

        try {
            await setDoc(doc(collection(db, "users")), {
                rollNumber: rollNumber,
                name: name,
                email: email,
            });
            console.log("Data saved successfully");
            setRollNumber('');
            setName('');
            setEmail('');
        } catch (error) {
            console.error("Error saving data: ", error);
        }
    }

    async function checkIfExists(field, value) {
        const q = query(collection(db, 'users'), where(field, '==', value));
        const querySnapshot = await getDocs(q);
        return !querySnapshot.empty;
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Roll Number"
                    value={rollNumber}
                    onChangeText={text => setRollNumber(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Name"
                    value={name}
                    onChangeText={text => setName(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={create}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

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