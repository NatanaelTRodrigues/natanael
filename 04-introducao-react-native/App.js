// imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
// função que define o componente
// Retorna o que vai ser renderizado na tela (template feito com jsx)
export default function App() {
  // logica do meu componente
  const nome = "natas"

  function alerta() {
     alert("Eu tenteiiii!!!")
    }
  
  // retorno com o jsx
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image 
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwnLQgeEHi6XXJkoQYgwopPrCk1vZifoIi1w&s"
        }}
        style={{
          height: 300,
          width: 350
        }}
      />
      <Text>Natas</Text>
      <Text>Bem vindo {nome}</Text>
      <Text>{2 + 2}</Text>
      <Button title='Clicar' onPress={alerta}></Button>
    </View>
  );
}
// estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
