import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import yelp from '../api/yelp.js';

const SearchScreen2 = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    const searchApi = async () => {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term,
                location: 'New York'
            }
        });
        setResults(response.data.businesses);
    };
    const filterByRating = (rating)=>{
        return results.filter(
        result=>{
            return result.rating === rating;
        }
        );
}
    return (
        <View>
            <View style={styles.background}>
                <Feather style={styles.iconStyle} name="search" />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Search"
                    value={term}
                    onChangeText={setTerm}
                    onSubmitEditing={searchApi}
                />
            </View>
            <Text>We have found {results.length} restaurants</Text>
            <FlatList
            horizontal
                data={filterByRating(5)}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <Image style={styles.image} source={{ uri: item.image_url }} />
                            <Text>{item.name}</Text>
                            <Text>{item.rating}</Text>
                        </View>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 10,
        flexDirection: 'row',
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
        borderWidth: 0,
        borderColor: 'gray',
    },
    container: {
        marginVertical: 10,
        marginHorizontal: 15,
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
    },
});

export default SearchScreen2;