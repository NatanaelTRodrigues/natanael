import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function JavascriptComponente() {
 
    const nome = 'natanael'
    const idade = 20  

    function checarMaiorIdade(){
        if(idade >= 18) {
           return "Maior de idade"
        } else{
            return "Menor de idade"
        }
    }
    function alerta(){
        alert("Clicou no botão!!")
    }

  return (
    <View style={styles.container}>
      <Text>JavascriptComponente</Text>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Idade + 40: {idade + 40}</Text>
      <Text>18+{checarMaiorIdade()}</Text>
      <Button title='Clicar' onPress={alerta}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'yellow'
    }
})