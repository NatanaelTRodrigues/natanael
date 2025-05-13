import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Title, Paragraph } from 'react-native-paper';

const EscudoScreen = () => {
  const time = {
    nome: 'Flamengo',
    escudo: 'https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg',
    fundacao: '15 de novembro de 1895',
    estadio: 'Maracanã',
    mascote: 'Urubu',
    cores: ['Vermelho', 'Preto'],
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: time.escudo }} style={styles.escudo} />
      <Title>{time.nome}</Title>
      <Paragraph>Fundado em: {time.fundacao}</Paragraph>
      <Paragraph>Estádio: {time.estadio}</Paragraph>
      <Paragraph>Mascote: {time.mascote}</Paragraph>
      <Paragraph>Cores: {time.cores.join(', ')}</Paragraph>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  escudo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});

export default EscudoScreen;
