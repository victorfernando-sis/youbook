import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import DiscoveryScreen from './src/screens/DiscoveryScreen';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import SearchScreen from './src/screens/SearchScreen';
import MyLibraryScreen from './src/screens/MyLibraryScreen';
import AccountScreen from './src/screens/AccountScreen';
import PlayScreen from './src/screens/PlayScreen';
import { HeaderButtons, HeaderTitle } from './src/components/HeaderButtons';
import { Provider as YotubeApiProvider } from './src/context/YoutubeApiContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function mainScreens() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName
          if (route.name === 'Discovery') {
            iconName = focused ? 'home' : 'home-outline'
          } else {
            iconName = focused ? 'library' : 'library-outline'
          }
          return <Ionicons name={iconName} size={size} color={color} />
        }
      })}>
      <Tab.Screen name="Discovery" component={DiscoveryScreen} />
      <Tab.Screen name="MyLibrary" component={MyLibraryScreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name="Discovery" component={mainScreens}
          options={({ navigation }) => ({
            title: null,
            headerRight: () => <HeaderButtons {...navigation} />,
            headerLeft: props => <HeaderTitle {...props} />
          })}
        />
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Play" component={PlayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <YotubeApiProvider>
      <App />
     </YotubeApiProvider>
  )
}
