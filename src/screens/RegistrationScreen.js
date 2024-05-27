import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { db } from './firebase.js';
import { collection, doc, setDoc } from "firebase/firestore";
import { useNavigation } from '@react-navigation/native';

export default function RegistrationScreen({ route }) {
    const { userId } = route.params;
    const [rollNumber, setRollNumber] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const navigation = useNavigation();

    function completeProfile() {
        const profileData = {
            rollNumber: rollNumber,
            age: age,
            gender: gender,
        };

        const profileRef = doc(collection(db, "profiles"), userId);
        setDoc(profileRef, profileData)
            .then(() => {
                console.log("Profile created successfully");
                setRollNumber('');
                setAge('');
                setGender('');
            })
            .catch(error => {
                console.error("Error creating profile: ", error);
            });
    }

    return (
        <View behavior='padding' style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Roll Number"
                    value={rollNumber}
                    onChangeText={text => setRollNumber(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Age"
                    value={age}
                    onChangeText={text => setAge(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Gender"
                    value={gender}
                    onChangeText={text => setGender(text)}
                    style={styles.input}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={completeProfile}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Complete Profile</Text>
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
