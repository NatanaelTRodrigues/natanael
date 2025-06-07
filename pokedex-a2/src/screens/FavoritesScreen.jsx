import React, { useEffect, useState } from 'react';
import { View, FlatList, Alert, StyleSheet } from 'react-native';
import { Card, Title, Button, IconButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

export default function FavoritesScreen({ navigation }) {
  const [favorites, setFavorites] = useState([]);
  const isFocused = useIsFocused(); // Atualiza ao voltar para a tela

  useEffect(() => {
    loadFavorites();
  }, [isFocused]);

  const loadFavorites = async () => {
    try {
      const json = await AsyncStorage.getItem('favorites');
      const data = json ? JSON.parse(json) : [];
      setFavorites(data);
    } catch (error) {
      console.error('Erro ao carregar favoritos:', error);
    }
  };

  const removeFavorite = (id) => {
    Alert.alert('Remover', 'Deseja remover este favorito?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Remover',
        style: 'destructive',
        onPress: async () => {
          try {
            const updated = favorites.filter((f) => f.id !== id);
            await AsyncStorage.setItem('favorites', JSON.stringify(updated));
            setFavorites(updated);
          } catch (error) {
            console.error('Erro ao remover favorito:', error);
          }
        },
      },
    ]);
  };

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: item.image }} />
      <Card.Content>
        <Title style={styles.title}>{item.name}</Title>
      </Card.Content>
      <Card.Actions style={styles.actions}>
        <Button onPress={() => navigation.navigate('FavoriteForm', { favoriteToEdit: item })}>
          Editar
        </Button>
        <IconButton icon="delete" onPress={() => removeFavorite(item.id)} />
      </Card.Actions>
    </Card>
  );

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
      ListEmptyComponent={
        <View style={styles.empty}>
          <Title>Nenhum favorito salvo.</Title>
        </View>
      }
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
  list: {
    paddingBottom: 16,
  },
  actions: {
    justifyContent: 'space-between',
  },
  empty: {
    marginTop: 50,
    alignItems: 'center',
  },
});
