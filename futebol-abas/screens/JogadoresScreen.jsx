import React, { useState } from 'react';
import { View, FlatList, Image, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

const jogadores = [
  {
    nome: "Gabriel Barbosa",
    numero: 9,
    imagem: "https://i.pinimg.com/474x/1d/9f/5d/1d9f5de58831c9913f925a7155bdc7da.jpg",
    descricao: "Gabigol é um dos maiores artilheiros da história do Flamengo e da Seleção Brasileira."
  },
  {
    nome: "Arrascaeta",
    numero: 14,
    imagem: "https://i.pinimg.com/474x/cf/ad/d9/cfadd92de5e581ac5505e3d325f8b9b2.jpg",
    descricao: "Arrascaeta é um meio-campista uruguaio de alta habilidade técnica e visão de jogo."
  },
  {
    nome: "Everton Ribeiro",
    numero: 7,
    imagem: "https://i.pinimg.com/236x/39/1a/27/391a275fb7e0b018f2900f0f9fc9331b.jpg",
    descricao: "Everton Ribeiro é um dos principais armadores do Flamengo, com passes precisos e dribles desconcertantes."
  },
  {
    nome: "David Luiz",
    numero: 23,
    imagem: "https://i.pinimg.com/474x/98/79/9b/98799b86107a87b79dc9b15cf778fa4a.jpg",
    descricao: "David Luiz é um zagueiro experiente, conhecido pela sua liderança e habilidades com a bola nos pés."
  },
  {
    nome: "Pedro",
    numero: 21,
    imagem: "https://i.pinimg.com/474x/79/e6/18/79e6185649fa3667b3ed3beef3e1ae94.jpg",
    descricao: "Pedro é um atacante de grande faro de gol, tendo sido decisivo para o Flamengo em vários campeonatos."
  },
];

const JogadoresScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [jogadorSelecionado, setJogadorSelecionado] = useState(null);

  const mostrarResumoJogador = (jogador) => {
    setJogadorSelecionado(jogador);
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
    setJogadorSelecionado(null);
  };

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: '#000' }}>
      <FlatList
        data={jogadores}
        keyExtractor={(item) => item.numero.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => mostrarResumoJogador(item)}>
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <Image source={{ uri: item.imagem }} style={styles.image} />
                <Text style={styles.text}>{item.nome}</Text>
                <Text style={styles.text}>Nº {item.numero}</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        )}
      />

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={fecharModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{jogadorSelecionado?.nome}</Text>
            <Text style={styles.modalText}>{jogadorSelecionado?.descricao}</Text>
            <TouchableOpacity onPress={fecharModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#e60012', 
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  text: {
    fontSize: 16,
    color: '#fff', 
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#e60012',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default JogadoresScreen;
