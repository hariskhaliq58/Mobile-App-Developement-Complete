import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function InformationForm() {
  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [informationList, setInformationList] = useState([]);

  const handleAddInformation = () => {
    const newInformation = { name, fatherName, rollNumber };
    if (!informationList.some(info => info.name === name && info.fatherName === fatherName && info.rollNumber === rollNumber)) {
      setInformationList([...informationList, newInformation]);
    }
    setName('');
    setFatherName('');
    setRollNumber('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        value={fatherName}
        onChangeText={text => setFatherName(text)}
        placeholder="Father Name"
      />
      <TextInput
        style={styles.input}
        value={rollNumber}
        onChangeText={text => setRollNumber(text)}
        placeholder="Roll Number"
        keyboardType="numeric"
      />
      <Button
        title="Add Into List"
        onPress={handleAddInformation}
      />
      {informationList.map((info, index) => (
        <Text key={index} style={[styles.informationText, { marginTop: 10 }]}>
          {`Name: ${info.name}, Father's Name: ${info.fatherName}, Roll Number: ${info.rollNumber}`}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 60,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
  informationText: {
    marginTop: 10,
  },
});
