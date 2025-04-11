import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons';
import EscudoScreen from './screens/EscudoScreen';
import JogadoresScreen from './screens/JogadoresScreen';
import TitulosScreen from './screens/TitulosScreen';
import { Appbar } from 'react-native-paper';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Escudo') {
              iconName = 'shield';
            } else if (route.name === 'Jogadores') {
              iconName = 'person';
            } else if (route.name === 'Títulos') {
              iconName = 'trophy';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'red', 
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: 'white' }, 
        })}
      >
        <Tab.Screen
          name="Escudo"
          component={EscudoScreen}
          options={{
            header: () => (
              <Appbar.Header style={{ backgroundColor: 'white' }}>
                <Appbar.Content title="Escudo" titleStyle={{ color: '#e60012' }} />
              </Appbar.Header>
            ),
          }}
        />
        <Tab.Screen
          name="Jogadores"
          component={JogadoresScreen}
          options={{
            header: () => (
              <Appbar.Header style={{ backgroundColor: 'white' }}>
                <Appbar.Content title="Jogadores" titleStyle={{ color: '#e60012' }} />
              </Appbar.Header>
            ),
          }}
        />
        <Tab.Screen
          name="Títulos"
          component={TitulosScreen}
          options={{
            header: () => (
              <Appbar.Header style={{ backgroundColor: 'white' }}>
                <Appbar.Content title="Títulos" titleStyle={{ color: '#e60012' }} />
              </Appbar.Header>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
