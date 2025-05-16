import React, { useState } from 'react';
import { View, FlatList, ImageBackground, StyleSheet } from 'react-native';
import { Button, Text, Card } from 'react-native-paper';

const imagemFundo = {
  uri: 'data:image/jpeg;base64,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',
};

function gerarJogo() {
  const numeros = new Set();
  while (numeros.size < 6) {
    numeros.add(Math.floor(Math.random() * 60) + 1);
  }
  return Array.from(numeros).sort((a, b) => a - b);
}

export default function MegaSenaScreen() {
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  const gerar = () => {
    const novoJogo = gerarJogo();
    setJogosMegaSena([novoJogo, ...jogosMegaSena]);
  };

  const limpar = () => {
    setJogosMegaSena([]);
  };

  return (
    <ImageBackground source={imagemFundo} style={styles.background}>
      <View style={styles.container}>
        <Button mode="contained" onPress={gerar} style={styles.botao}>
          Gerar Jogo da Mega Sena
        </Button>
        <Button mode="contained" onPress={limpar} style={styles.botao}>
  Limpar Jogos
</Button>


        <FlatList
          data={jogosMegaSena}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <Card.Content>
                <Text style={styles.texto}>{item.join(' - ')}</Text>
              </Card.Content>
            </Card>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  botao: {
    marginBottom: 10,
  },
  botaoLimpar: {
    marginBottom: 20,
    borderColor: 'white',
  },
  card: {
    marginVertical: 8,
    backgroundColor: '#2ecc71',
  },
  texto: {
    color: 'white',
    fontWeight: 'bold',
  },
});
