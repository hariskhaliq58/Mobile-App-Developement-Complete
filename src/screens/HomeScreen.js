import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen({ navigation }) {
     return (
          <ScrollView style={{ overflow: "scroll" }}>
               <View>
                    <TouchableOpacity style={styles.viewStyle}
                         onPress={() => navigation.navigate('Image')}>
                         <Text style={styles.textStyle}> Go to Image Screen </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewStyle}
                         onPress={() => navigation.navigate('Counter')}>
                         <Text style={styles.textStyle}> Counter </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewStyle}
                         onPress={() => navigation.navigate('Text')}>
                         <Text style={styles.textStyle}> Text </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.viewStyle}
                         onPress={() => navigation.navigate('Flat')}>
                         <Text style={styles.textStyle}> Go to flat screen </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.viewStyle}
                         onPress={() => navigation.navigate('Color')}>
                         <Text style={styles.textStyle}> Go to Color screen </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.viewStyle}
                         onPress={() => navigation.navigate('Square')}>
                         <Text style={styles.textStyle}> Go to Square screen </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewStyle}
                         onPress={() => navigation.navigate('Search')}>
                         <Text style={styles.textStyle}> Go to Search screen </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewStyle}
                         onPress={() => navigation.navigate('Search2')}>
                         <Text style={styles.textStyle}> Go to Search screen 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewStyle}
                         onPress={() => navigation.navigate('OpenWeather')}>
                         <Text style={styles.textStyle}> Open Weather </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewStyle}
                         onPress={() => navigation.navigate('Quiz1')}>
                         <Text style={styles.textStyle}> Quiz1 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewStyle}
                         onPress={() => navigation.navigate('LoginScreen')}>
                         <Text style={styles.textStyle}> Login Screen </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewStyle}
                         onPress={() => navigation.navigate('LoginScreen2')}>
                         <Text style={styles.textStyle}> Login Screen 2 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewStyle}
                         onPress={() => navigation.navigate('LoginScreen3')}>
                         <Text style={styles.textStyle}> Login Screen 3 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewStyle}
                         onPress={() => navigation.navigate('RegistrationScreen')}>
                         <Text style={styles.textStyle}> Registration Screen </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewStyle}
                         onPress={() => navigation.navigate('SearchProfile')}>
                         <Text style={styles.textStyle}> Search Profile </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewStyle}
                         onPress={() => navigation.navigate('LoginScreen4')}>
                         <Text style={styles.textStyle}> Login Screen 4 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewStyle}
                         onPress={() => navigation.navigate('PrintUserID')}>
                         <Text style={styles.textStyle}> Print USER ID </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.viewStyle}
                         onPress={() => navigation.navigate('MainScreen')}>
                         <Text style={styles.textStyle}> Main Screen </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewStyle}
                         onPress={() => navigation.navigate('FirstScreen')}>
                         <Text style={styles.textStyle}> First Screen </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewStyle}
                         onPress={() => navigation.navigate('SignUp')}>
                         <Text style={styles.textStyle}> Sign Up Screen </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewStyle}
                         onPress={() => navigation.navigate('Information')}>
                         <Text style={styles.textStyle}> Information </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewStyle}
                         onPress={() => navigation.navigate('Quiz3')}>
                         <Text style={styles.textStyle}> Quiz 3 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewStyle}
                         onPress={() => navigation.navigate('DataScreen')}>
                         <Text style={styles.textStyle}> DataScreen </Text>
                    </TouchableOpacity>
                     
               </View>
          </ScrollView>
     );
}

const styles = StyleSheet.create(
     {
          viewStyle: {
               backgroundColor: '#B4B4B8',
               borderRadius: 20,
               marginBottom: 10,
               padding: 15,

          },

          textStyle: {
               fontSize: 16,
               color: 'black',
               fontWeight: 'bold',
               alignSelf: 'center'


          }

     });