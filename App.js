
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import TextScreen from './src/screens/TextScreen';
import FlatScreen from './src/screens/FlatScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import SearchScreen from './src/screens/SearchScreen';
import SearchScreen2 from './src/screens/SearchScreen2';
import OpenWeather from './src/screens/OpenWeather';
import Quiz1 from './src/screens/quiz1';
import LoginScreen from './src/screens/LoginScreen';
import LoginScreen2 from './src/screens/LoginScreen2';
import LoginScreen3 from './src/screens/LoginScreen3';
import RegistrationScreen from './src/screens/RegistrationScreen';
import SearchProfile from './src/screens/SearchProfile';
import LoginScreen4 from './src/screens/LoginScreen4';
import PrintUserID from './src/screens/PrintUserID';
import MainScreen from './src/screens/MainScreen';
import FirstScreen from './src/screens/FirstScreen';
import SignUp from './src/screens/SignUp';
import Information from './src/screens/Information';
import Quiz3 from './src/screens/Quiz3';
import DataScreen from './src/screens/DataScreen';
 


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* app.js will run only this line. it will not go to further lines */}
        <Stack.Screen name='Home Screen' component={HomeScreen} />
        <Stack.Screen name='Image' component={ImageScreen} />
        <Stack.Screen name='Counter' component={CounterScreen} />
        <Stack.Screen name='Text' component={TextScreen} />
        <Stack.Screen name='Flat' component={FlatScreen} />
        <Stack.Screen name='Color' component={ColorScreen} />
        <Stack.Screen name='Square' component={SquareScreen} />
        <Stack.Screen name='Search' component={SearchScreen} />
        <Stack.Screen name='Search2' component={SearchScreen2} />
        <Stack.Screen name='OpenWeather' component={OpenWeather} />
        <Stack.Screen name='Quiz1' component={Quiz1} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='LoginScreen2' component={LoginScreen2} />
        <Stack.Screen name='LoginScreen3' component={LoginScreen3} />
        <Stack.Screen name='RegistrationScreen' component={RegistrationScreen} />
        <Stack.Screen name='SearchProfile' component={SearchProfile} />
        <Stack.Screen name='LoginScreen4' component={LoginScreen4} />
        <Stack.Screen name='PrintUserID' component={PrintUserID} />
        <Stack.Screen name='MainScreen' component={MainScreen} />
        <Stack.Screen name='FirstScreen' component={FirstScreen} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Information' component={Information} />
        <Stack.Screen name='Quiz3' component={Quiz3} />
        <Stack.Screen name='DataScreen' component={DataScreen} />
        

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
