// src/hooks/useFavorites.js
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = '@favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(FAVORITES_KEY);
      if (jsonValue != null) {
        setFavorites(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.error('Erro ao carregar favoritos', e);
    }
  };

  const saveFavorites = async (newFavorites) => {
    try {
      const jsonValue = JSON.stringify(newFavorites);
      await AsyncStorage.setItem(FAVORITES_KEY, jsonValue);
      setFavorites(newFavorites);
    } catch (e) {
      console.error('Erro ao salvar favoritos', e);
    }
  };

  const addFavorite = (pokemon) => {
    if (!favorites.some((fav) => fav.id === pokemon.id)) {
      const newFavs = [...favorites, pokemon];
      saveFavorites(newFavs);
    }
  };

  const removeFavorite = (pokemonId) => {
    const newFavs = favorites.filter((fav) => fav.id !== pokemonId);
    saveFavorites(newFavs);
  };

  const isFavorite = (pokemonId) => {
    return favorites.some((fav) => fav.id === pokemonId);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
}
