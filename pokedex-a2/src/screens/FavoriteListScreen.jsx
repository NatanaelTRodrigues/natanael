// src/screens/FavoriteListScreen.jsx
import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Alert, RefreshControl } from 'react-native';
import { Card, Title, Button, IconButton, Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused, useNavigation } from '@react-navigation/native';

export default function FavoriteListScreen() {
  const [favorites, setFavorites] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  useEffect(() => {
    if (isFocused) {
      loadFavorites();
    }
  }, [isFocused]);

  const loadFavorites = async () => {
    try {
      const data = await AsyncStorage.getItem('favorites');
      setFavorites(data ? JSON.parse(data) : []);
    } catch (error) {
      console.error('Erro ao carregar favoritos:', error);
    }
  };

  const removeFavorite = (id) => {
    Alert.alert('Remover favorito', 'Tem certeza que deseja remover este Pokémon?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Remover',
        style: 'destructive',
        onPress: async () => {
          const newFavorites = favorites.filter((fav) => fav.id !== id);
          await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
          setFavorites(newFavorites);
        },
      },
    ]);
  };

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: item.image }} />
      <Card.Content>
        <Title style={styles.title}>{item.name}</Title>
        <Text>Data: {item.date}</Text>
        <Text>Nota: {item.note}</Text>
      </Card.Content>
      <View style={styles.actions}>
        <IconButton
          icon="pencil"
          onPress={() => navigation.navigate('Formulário', { pokemon: item })}
        />
        <IconButton icon="delete" onPress={() => removeFavorite(item.id)} />
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={loadFavorites} style={styles.refreshButton}>
        Atualizar Lista
      </Button>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={loadFavorites} />
        }
        ListEmptyComponent={<Text style={styles.empty}>Nenhum favorito salvo.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
  card: {
    marginBottom: 10,
  },
  title: {
    textTransform: 'capitalize',
    marginBottom: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10,
    paddingBottom: 10,
  },
  refreshButton: {
    margin: 10,
  },
  empty: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});
