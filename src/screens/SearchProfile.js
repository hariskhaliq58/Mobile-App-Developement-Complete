import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import { db } from './firebase.js';
import { collection, query, where, getDocs } from "firebase/firestore";

export default function SearchScreen() {
    const [searchName, setSearchName] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const searchUsers = async () => {
        try {
            const q = query(collection(db, 'users'), where('name', '==', searchName));
            const querySnapshot = await getDocs(q);
            const users = [];
            querySnapshot.forEach(doc => {
                users.push(doc.data());
            });
            setSearchResults(users);
        } catch (error) {
            console.error("Error searching users: ", error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Enter name to search"
                value={searchName}
                onChangeText={text => setSearchName(text)}
                style={styles.input}
            />
            <TouchableOpacity
                onPress={searchUsers}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
            <FlatList
                data={searchResults}
                renderItem={({ item }) => (
                    <View style={styles.userItem}>
                        <Text>{item.name}</Text>
                        <Text>{item.email}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    input: {
        backgroundColor: 'white',
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginBottom: 10,
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
    userItem: {
        backgroundColor: '#f0f0f0',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
});
