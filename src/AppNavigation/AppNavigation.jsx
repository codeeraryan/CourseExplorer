
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewDetail from './View';
import Details from '../Home/Details';
import MyTabs from '../Home/Bottom_layout';
const Stack = createNativeStackNavigator();
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
const AppNavigation = () => {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
    <Stack.Navigator  initialRouteName='View' screenOptions={{headerShown:false}} >
    <Stack.Screen name="View" component={MyTabs}  />
    <Stack.Screen name="Details" component={Details}  />
    </Stack.Navigator>

    </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default AppNavigation

