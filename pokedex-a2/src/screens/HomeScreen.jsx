import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Title, ActivityIndicator } from 'react-native-paper';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
      const results = response.data.results;

      
      const detailed = await Promise.all(
        results.map(async (p) => {
          const res = await axios.get(p.url);
          return {
            id: res.data.id,
            name: res.data.name,
            image: res.data.sprites.front_default,
            types: res.data.types.map((t) => t.type.name),
          };
        })
      );

      setPokemons(detailed);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao carregar pokémons:', error);
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Detalhes', { pokemon: item })}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: item.image }} />
        <Card.Content>
          <Title style={styles.title}>{item.name}</Title>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator animating={true} size="large" />
      </View>
    );
  }

  return (
    <FlatList
      data={pokemons}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  title: {
    textTransform: 'capitalize',
    marginTop: 8,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
  list: {
    paddingBottom: 16,
  },
});
