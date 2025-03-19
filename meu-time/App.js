import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';

export default function App() {
  
    // logica do meu componente
    // const nome = "Neymar"
  
    function alerta() {
       alert("Gol do Flamengo!!!")
  
    }

  return (
    // Scrollview permite que o conteudo va ate depois da barra de rolagem
    // precisa de uma view para funcionar
    
    <ScrollView>
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}

    <Text style={{fontSize:35, fontStyle:'italic'}}>Flamengo</Text> 
    
    
    
    
{/* <Text style={styles.textGrande}>Natas</Text> */}

      <Image 
        source={{
          uri: "https://i.pinimg.com/236x/40/17/01/4017015e84eae192a351ae22e0b66b42.jpg"
        }}
        style={{
          height: 200,
          width: 250,
        }}
        />
<Text></Text>
        <Text style={styles.color1} >O Flamengo é um dos clubes mais tradicionais do futebol brasileiro, fundado em 1895. Conhecido por sua imensa torcida, o time tem uma história repleta de conquistas, incluindo múltiplos títulos do Campeonato Brasileiro e da Copa Libertadores.</Text>
<Text></Text>
      <Image 
        source={{
          uri: "https://i.pinimg.com/474x/e3/f8/ab/e3f8ab3f4fa9333daa9f5eaf5a1b27a3.jpg"
        }}
        style={{
          height: 200,
          width: 250,
        }}
        />
<Text></Text>
        <Text style={styles.color2}>Com uma das maiores torcidas do Brasil e do mundo, o Flamengo é um dos clubes mais populares do futebol global, conquistando muitos títulos nacionais e internacionais, como a Copa do Mundo de Clubes.</Text>
<Text></Text>
      <Image 
        source={{
          uri: "https://i.pinimg.com/474x/97/53/22/9753220ec8f88693f30736d8172293a1.jpg"
        }}
        style={{
          height: 200,
          width: 250,
        }}
      />
<Text></Text>
<Text style={styles.color3}>O Flamengo tem uma relação histórica com o Estádio do Maracanã, onde realiza muitos de seus jogos. A casa do clube é considerada um dos templos sagrados do futebol mundial.</Text>
<Text></Text>
      <Image 
        source={{
          uri: "https://i.pinimg.com/236x/d9/a1/66/d9a1663f799f1c1234ebffa9c677b9ea.jpg"
        }}
        style={{
          height: 200,
          width: 250,
        }}
      />
<Text></Text>
<Text  style={styles.color4}> O Flamengo revelou e foi o lar de grandes ídolos do futebol, como Zico, que é considerado o maior jogador da história do clube, além de outros craques como Júnior, Romário e Gabriel Barbosa (Gabigol).</Text>
<Text></Text>
      <Image 
        source={{
          uri: "https://i.pinimg.com/236x/27/d4/94/27d4948b74667f7869631f15900e620f.jpg"
        }}
        style={{
          height: 200,
          width: 250,
        }}
      />
      <Text></Text>
      <Text  style={styles.color5}>Nos últimos anos, o Flamengo tem se destacado como uma potência do futebol brasileiro e sul-americano, com vitórias notáveis na Copa Libertadores e no Campeonato Brasileiro, sob a liderança de técnicos como Jorge Jesus e Renato Gaúcho.</Text>
      <Text></Text>
      <Button title='Gol' onPress={alerta}></Button>
    </View>
    </ScrollView> );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  color1: {
  backgroundColor: 'yellow'
  },
  color2: {
  backgroundColor: 'pink'
  },
  color3: {
  backgroundColor: 'blue'
  },
  color4: {
  backgroundColor: 'brown'
  },
  color5: {
  backgroundColor: 'green'
  }
});
