// imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
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
    // Scrollview permite que o conteudo va ate depois da barra de rolagem
    // precisa de uma view para funcionar
    
    <ScrollView>
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}

    <Text style={{fontSize:35, fontStyle:'italio'}}>Eu tentei</Text> 

<Text style={styles.textGrande}>Natas</Text>
<Text>Bem vindo {nome}</Text>

      <Image 
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwnLQgeEHi6XXJkoQYgwopPrCk1vZifoIi1w&s"
        }}
        style={{
          height: 200,
          width: 250,
        }}
      />
<Text></Text>

      <Image 
        source={{
          uri: "https://i.pinimg.com/736x/a8/e9/55/a8e955eb228587347a800c197a5c920a.jpg"
        }}
        style={{
          height: 200,
          width: 250,
        }}
      />
<Text></Text>

      <Image 
        source={{
          uri: "https://i.pinimg.com/736x/a8/e9/55/a8e955eb228587347a800c197a5c920a.jpg"
        }}
        style={{
          height: 200,
          width: 250,
        }}
      />
<Text></Text>

      <Image 
        source={{
          uri: "https://i.pinimg.com/736x/a8/e9/55/a8e955eb228587347a800c197a5c920a.jpg"
        }}
        style={{
          height: 200,
          width: 250,
        }}
      />
<Text></Text>

      <Image 
        source={{
          uri: "https://i.pinimg.com/736x/a8/e9/55/a8e955eb228587347a800c197a5c920a.jpg"
        }}
        style={{
          height: 200,
          width: 250,
        }}
      />
      <Text>{2 + 2}</Text>
      <Button title='Clicar' onPress={alerta}></Button>
    </View>
    </ScrollView> );
}
// estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textGrande: {
    fontSize: 20,
    fontWeight: 900
  }
});
