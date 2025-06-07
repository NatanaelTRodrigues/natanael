import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = '@favorites';

// Função para obter todos os favoritos
export async function getFavorites() {
  try {
    const jsonValue = await AsyncStorage.getItem(FAVORITES_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Erro ao buscar favoritos:', e);
    return [];
  }
}

// Função para salvar a lista completa de favoritos
export async function saveFavorites(favorites) {
  try {
    const jsonValue = JSON.stringify(favorites);
    await AsyncStorage.setItem(FAVORITES_KEY, jsonValue);
  } catch (e) {
    console.error('Erro ao salvar favoritos:', e);
  }
}

// Função para adicionar um favorito
export async function addFavorite(favorite) {
  try {
    const favorites = await getFavorites();
    favorites.push(favorite);
    await saveFavorites(favorites);
  } catch (e) {
    console.error('Erro ao adicionar favorito:', e);
  }
}

// Função para atualizar um favorito (por índice ou id)
export async function updateFavorite(updatedFavorite) {
  try {
    const favorites = await getFavorites();
    const index = favorites.findIndex(fav => fav.id === updatedFavorite.id);
    if (index !== -1) {
      favorites[index] = updatedFavorite;
      await saveFavorites(favorites);
    }
  } catch (e) {
    console.error('Erro ao atualizar favorito:', e);
  }
}

// Função para remover um favorito (por id)
export async function removeFavorite(id) {
  try {
    let favorites = await getFavorites();
    favorites = favorites.filter(fav => fav.id !== id);
    await saveFavorites(favorites);
  } catch (e) {
    console.error('Erro ao remover favorito:', e);
  }
}
