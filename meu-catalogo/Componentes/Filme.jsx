import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Filme = ({ nome, ano, diretor, tipo, capa }) => {
  return (
    <View style={styles.filmeContainer}>
      <Image source={{ uri: capa }} style={styles.filmeCapa} />
      <Text style={styles.filmeNome}>{nome}</Text>
      <Text style={styles.filmeDetalhes}>Ano: {ano}</Text>
      <Text style={styles.filmeDetalhes}>Diretor: {diretor}</Text>
      <Text style={styles.filmeDetalhes}>Gênero: {tipo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  filmeContainer: {
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 12,
    backgroundColor: 'cyan',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  filmeCapa: {
    width: '100%',
    height: 220,
    borderRadius: 12,
  },
  filmeNome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#2f2f2f', // Cor de texto mais escura
  },
  filmeDetalhes: {
    fontSize: 14,
    color: '#555',
  },
});

export default Filme;
