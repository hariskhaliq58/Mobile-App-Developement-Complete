import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import ImageDetail from "../components/ImageDetails"

export default function ImageScreen() {
  return (
    <View>
    <Text>Images</Text>
      <ImageDetail imageSource={require('../../assets/picture1.jpeg')} title='mountain'/>
      <ImageDetail imageSource={require('../../assets/picture 2.jpeg')} title="beach"/>
      <ImageDetail imageSource={require('../../assets/picture 3.jpeg')} title="forest"/>
    </View>
  );
}

const styles = StyleSheet.create({




});