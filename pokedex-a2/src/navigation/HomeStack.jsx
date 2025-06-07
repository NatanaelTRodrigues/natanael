import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PokemonDetailScreen from '../screens/PokemonDetailScreen'; // ajuste o nome do arquivo se necessário

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Pokédex' }} 
      />
      <Stack.Screen
        name="Detalhes"
        component={PokemonDetailScreen}
        options={({ route }) => {
          const pokemonName = route.params?.pokemon?.name || 'Detalhes';
          return { title: pokemonName.toUpperCase() };
        }}
      />
    </Stack.Navigator>
  );
}
