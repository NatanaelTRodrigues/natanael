import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Alert } from 'react-native';
import { Card, Title, IconButton, Paragraph } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused, useNavigation } from '@react-navigation/native';

export default function FavoritesScreen() {
  const [favorites, setFavorites] = useState([]);
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  useEffect(() => {
    loadFavorites();
  }, [isFocused]);

  const loadFavorites = async () => {
    const data = await AsyncStorage.getItem('favorites');
    if (data) {
      setFavorites(JSON.parse(data));
    }
  };

  const removeFavorite = (id) => {
    Alert.alert('Remover', 'Deseja remover este favorito?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Remover',
        onPress: async () => {
          const updated = favorites.filter((fav) => fav.id !== id);
          setFavorites(updated);
          await AsyncStorage.setItem('favorites', JSON.stringify(updated));
        },
      },
    ]);
  };

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Title title={item.name} left={() => (
        <IconButton icon="star" color="gold" />
      )} />
      <Card.Cover source={{ uri: item.image }} />
      <Card.Content>
        <Paragraph>Data: {item.date}</Paragraph>
        <Paragraph>Nota: {item.note}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <IconButton icon="pencil" onPress={() => navigation.navigate('Editar Favorito', { favorite: item })} />
        <IconButton icon="delete" onPress={() => removeFavorite(item.id)} />
      </Card.Actions>
    </Card>
  );

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  card: {
    marginBottom: 10,
  },
});
