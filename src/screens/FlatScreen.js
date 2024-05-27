import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, FlatList} from 'react-native';
import {useState} from 'react';


export default function FlatScreen() {
    /*friends is an array , simple values can also be given but if we want 
    to use it intelligently, we will mention its header, header means that how that
     value will be used  name is the header, and Muhammad is the value, name:" Muhammad", age:21 this is the
      value on the first index of the array
      flat list cannot be shown on its on, to show this array we will use flat list.
      any object that is collection will come after data.
      renderItem is a prop of flatlist. its an arrow function{()=>{}}. the data that is given to the flat list will be  
      rendered. 
       {item.name} and {item.age} this will render the items from the list onto the screen.
       here item is the built in function it will be same always
       we can give values in color like rgb(0,0,1) or #00ff00
       */
const friends = [
    { name:"Muhammad", age:21},
    { name:"Umer", age:22},
    { name:"Ali", age:23},
    { name:" Ahmad", age:24}

];
  return (
    <FlatList
    data={friends}
    renderItem={({item})=>{
        return(
        <Text>
            {item.name} and {item.age}
        </Text>
        );
    }}
    />

  );
}

const styles = StyleSheet.create({
    textStyle:
    {
        margin:20,
        fontSize:20,
        color:'#00FF00'

    }

});