// src/screens/DetailsScreen.jsx
import React from 'react';
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';
import { Card, Title, Paragraph, Chip } from 'react-native-paper';

export default function DetailsScreen({ route }) {
  const { pokemon } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card>
        <Card.Content style={styles.content}>
          <Title style={styles.title}>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Title>
          <Image
            source={{ uri: pokemon.image }}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.typesContainer}>
            {pokemon.types.map((type) => (
              <Chip key={type} style={styles.chip}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Chip>
            ))}
          </View>
          <Paragraph>ID: {pokemon.id}</Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 15,
  },
  typesContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  chip: {
    marginHorizontal: 5,
  },
});
