import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import AppNavigation from"./src/AppNavigation/AppNavigation"
import tailwind from 'twrnc';
import { EnrollProvider } from './src/Context/EnrollContext';

export default function App() {
  return (
    <View style={tailwind`flex-1`} >
     <EnrollProvider>
     <AppNavigation/>
     </EnrollProvider>
    <StatusBar style="auto" />
    </View>
  );
}

