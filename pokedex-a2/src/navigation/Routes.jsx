import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import HomeStack from './HomeStack';
import FavoritesStack from './FavoritesStack';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#e91e63',
          tabBarStyle: { paddingBottom: 5, height: 60 },
        }}
      >
        <Tab.Screen
          name="Início"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Favoritos"
          component={FavoritesStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="favorite" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}