import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritesChartScreen from '../screens/FavoritesChartScreen';

const Stack = createNativeStackNavigator();

export default function FavoritesChartStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavoritesChart"
        component={FavoritesChartScreen}
        options={{ title: 'Gráfico de Favoritos' }}
      />
    </Stack.Navigator>
  );
}
