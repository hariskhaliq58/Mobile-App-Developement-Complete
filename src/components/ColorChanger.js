import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,TextInput,FlatList} from 'react-native';

import { useState } from 'react';

export default function ColorChanger(props) {


  return (
    <View>
        <Text>{props.color}</Text>
        <Button
        title='Increase'
        onPress={()=>props.onIncrease()}
        />
        <Button
        title='Decrease'
        onPress={()=>props.onDecrease()}
        />

    </View>
  );
}

const styles = StyleSheet.create({


});