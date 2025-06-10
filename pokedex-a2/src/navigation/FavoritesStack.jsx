import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FavoritesScreen from '../screens/FavoritesScreen';
import FavoriteFormScreen from '../screens/FavoriteFormScreen';

const Stack = createStackNavigator();

export default function FavoritesStack() {
  return (
    <Stack.Navigator
      initialRouteName="Favoritos"
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Favoritos"
        component={FavoritesScreen}
        options={{ title: 'Pokémons Favoritos' }}
      />
      <Stack.Screen
        name="FavoriteForm"
        component={FavoriteFormScreen}
        options={{ title: 'Detalhes do Favorito' }}
      />
    </Stack.Navigator>
  );
}
