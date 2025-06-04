// src/screens/HomeScreen.jsx
import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Card, Title, ActivityIndicator, IconButton } from 'react-native-paper';
import axios from 'axios';
import { useFavorites } from '../hooks/useFavorites';

export default function HomeScreen({ navigation }) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    fetchPokemons();
  }, []);

  async function fetchPokemons() {
    try {
      setLoading(true);
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
      const results = response.data.results;

      const pokemonsWithDetails = await Promise.all(
        results.map(async (pokemon) => {
          const pokeDetails = await axios.get(pokemon.url);
          return {
            id: pokeDetails.data.id,
            name: pokeDetails.data.name,
            image: pokeDetails.data.sprites.front_default,
            types: pokeDetails.data.types.map((t) => t.type.name),
          };
        })
      );

      setPokemons(pokemonsWithDetails);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  if (loading) {
    return <ActivityIndicator style={{ marginTop: 50 }} size="large" />;
  }

  return (
    <FlatList
      data={pokemons}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 10 }}
      renderItem={({ item }) => {
        const favorited = isFavorite(item.id);
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', { pokemon: item })}
          >
            <Card style={{ marginBottom: 10 }}>
              <Card.Cover source={{ uri: item.image }} />
              <Card.Title
                title={item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                right={(props) => (
                  <IconButton
                    {...props}
                    icon={favorited ? 'star' : 'star-outline'}
                    color={favorited ? '#f1c40f' : undefined}
                    onPress={() =>
                      favorited ? removeFavorite(item.id) : addFavorite(item)
                    }
                  />
                )}
              />
            </Card>
          </TouchableOpacity>
        );
      }}
    />
  );
}
