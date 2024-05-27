import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, TouchableOpacity} from 'react-native';
/*this library is used for importing icons*/
import {Feather} from '@expo/vector-icons';

import {useState} from 'react';

export default function SearchBar() {


  return (
    <View style={styles.background}>
      <TouchableOpacity
      onPress={()=>{
        <TextInput placeholder='Search'/>
      }}>


     <Feather name="search" style={styles.iconStyle}/>
     </TouchableOpacity>
     

    </View>
  );
}

const styles = StyleSheet.create({
  background:{
    backgroundColor:"#CCCCCC",
    flexDirection:"row",
    borderRadius: 15
  },
  iconStyle:{
    fontSize:35,
    marginHorizontal:20,
    alignSelf:"center"
  }


});