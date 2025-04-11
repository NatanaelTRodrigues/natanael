import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';

const EscudoScreen = () => {
  const time = {
    nome: "Flamengo",
    escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>{time.nome}</Text>
          <Image source={{ uri: time.escudo }} style={styles.escudo} />
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#000', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#e60012', 
  },
  escudo: {
    width: 200,
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
  },
  card: {
    width: '90%',
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#000', 
  },
});

export default EscudoScreen;
