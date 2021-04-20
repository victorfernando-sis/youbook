import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DiscoveryScreen from './src/screens/DiscoveryScreen';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import SearchScreen from './src/screens/SearchScreen';
import MyLibraryScreen from './src/screens/MyLibraryScreen';
import AccountScreen from './src/screens/AccountScreen';
import PlayScreen from './src/screens/PlayScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function mainScreens() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Discovery" component={DiscoveryScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="MyLibrary" component={MyLibraryScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Discovery">
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="Discovery" component={mainScreens} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Play" component={PlayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
