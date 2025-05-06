// screens/ReceitaScreen.jsx
import React from 'react';
import { ScrollView, Image } from 'react-native';
import { Text, Title, Paragraph, List, Button } from 'react-native-paper';

export default function ReceitaScreen({ route, navigation }) {
  const { receita } = route.params;

  return (
    <ScrollView style={{ padding: 16 }}>
      <Image source={{ uri: receita.imagem }} style={{ width: '100%', height: 200, borderRadius: 10 }} />
      <Title style={{ marginTop: 16 }}>{receita.nome}</Title>
      <Paragraph>Tempo de preparo: {receita.tempoPreparo}</Paragraph>
      <Paragraph>Porções: {receita.porcoes}</Paragraph>

      <Title style={{ marginTop: 16 }}>Ingredientes</Title>
      {receita.ingredientes.map((item, index) => (
        <List.Item key={index} title={item} />
      ))}

      <Title style={{ marginTop: 16 }}>Modo de Preparo</Title>
      {receita.modoPreparo.map((passo, index) => (
        <List.Item key={index} title={passo} />
      ))}

      <Button
        icon="arrow-left"
        mode="outlined"
        onPress={() => navigation.goBack()}
        style={{ marginTop: 30 }}
      >
        Voltar
      </Button>
    </ScrollView>
  );
}
