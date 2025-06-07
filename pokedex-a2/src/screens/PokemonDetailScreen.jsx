import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PokemonDetailScreen({ route, navigation }) {
  const { pokemon } = route.params || {};
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    checkIfFavorited();
  }, []);

  const checkIfFavorited = async () => {
    try {
      const json = await AsyncStorage.getItem('@favorites');
      const favorites = json ? JSON.parse(json) : [];
      setIsFavorited(favorites.some(p => p.id === pokemon.id));
    } catch (e) {
      console.error('Erro ao verificar favoritos:', e);
    }
  };

  const handleFavorite = async () => {
    try {
      const json = await AsyncStorage.getItem('@favorites');
      let favorites = json ? JSON.parse(json) : [];

      if (!favorites.some(p => p.id === pokemon.id)) {
        favorites.push(pokemon);
        await AsyncStorage.setItem('@favorites', JSON.stringify(favorites));
        Alert.alert('Sucesso', 'Pokémon favoritado!');
        setIsFavorited(true);
        navigation.navigate('Favorites'); // Navega para tela de favoritos
      } else {
        Alert.alert('Aviso', 'Pokémon já está nos favoritos.');
      }
    } catch (e) {
      Alert.alert('Erro', 'Não foi possível favoritar.');
      console.error(e);
    }
  };

  if (!pokemon) {
    return (
      <View style={styles.container}>
        <Text>Pokémon não encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: pokemon.image }} style={styles.image} />
      <Text style={styles.name}>{pokemon.name.toUpperCase()}</Text>
      <Text>Tipos: {pokemon.types.join(', ')}</Text>

      <View style={{ marginTop: 20 }}>
        <Button
          title={isFavorited ? 'Favoritado' : 'Favoritar'}
          onPress={handleFavorite}
          disabled={isFavorited}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  image: {
    width: 150,
    height: 150,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
