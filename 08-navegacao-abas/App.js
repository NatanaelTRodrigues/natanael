import React from 'react';
import { PaperProvider } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from './screens/HomeScreen'
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from './screens/ProfileScreen'
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>

          {/*HomeScreen*/}
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title:'Inicio',
            headerTitleAlign:'center',
            headerStyle:{
            backgroundColor:'red'}, 
            tabBarActiveBackgroundColor: 'red',
            tabBarActiveTintColor:'white',
            tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
         ),
     }}
/>


          {/*ProfileScreen*/}
<Tab.Screen name="Profile" 
component={ProfileScreen}
options={{
  tabBarIcon: ({ color, size }) => (
    <Ionicons name="car" size={size} color={color} />
 ),
}}

/>



          {/*SettingsScreen*/}
<Tab.Screen name="Settings" 
component={SettingsScreen} 
options={{
  tabBarIcon: ({ color, size }) => (
    <Ionicons name="settings" size={size} color={color} />
 ),
}}
/>


        </Tab.Navigator>

      </NavigationContainer>
    </PaperProvider>
  );
}


