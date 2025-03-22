import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function JavascriptComponente() {

  const nome = "natanael"  
  const idade = 20
 
  function checkMaiorIdade(){
    if(idade >= 18){
        return "Maior idade"
    } else {
        return "Menotr idade"
    }
  }

function alerta() {
 alert("Clicou no botão")
} 


  return (
    <View>
      <Text>JavascriptComponente</Text>

      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Idade + 40: {idade + 40}</Text>
      <Text>É maior idade? {checkMaiorIdade()}</Text>
      <Text>Check 18+: {idade >= 18 ? "18+" : "18-"}</Text>
      <Text></Text>
      <Button title='Clicar' onPress={alerta}></Button>

    </View>
  )
}

const styles = StyleSheet.create({})