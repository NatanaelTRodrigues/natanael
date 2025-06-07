import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritesScreen from '../screens/FavoritesScreen';
import FavoriteFormScreen from '../screens/FavoriteFormScreen';

const Stack = createNativeStackNavigator();

export default function FavoritesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Lista de Favoritos" 
        component={FavoritesScreen}
        options={{ title: 'Favoritos' }}
      />
      <Stack.Screen
        name="FavoriteForm"
        component={FavoriteFormScreen}
        options={{ title: 'Cadastrar/Editar Favorito' }}
      />
    </Stack.Navigator>
  );
}
