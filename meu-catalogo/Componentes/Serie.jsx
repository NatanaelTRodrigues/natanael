import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Serie = ({ nome, ano, diretor, temporadas, capa }) => {
  return (
    <View style={styles.serieContainer}>
      <Image source={{ uri: capa }} style={styles.serieCapa} />
      <Text style={styles.serieNome}>{nome}</Text>
      <Text style={styles.serieDetalhes}>Ano: {ano}</Text>
      <Text style={styles.serieDetalhes}>Diretor: {diretor}</Text>
      <Text style={styles.serieDetalhes}>Temporadas: {temporadas}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  serieContainer: {
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  serieCapa: {
    width: '100%',
    height: 220,
    borderRadius: 12,
  },
  serieNome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#2f2f2f', // Cor de texto mais escura
  },
  serieDetalhes: {
    fontSize: 14,
    color: '#555',
  },
});

export default Serie;
