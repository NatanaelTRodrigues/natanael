import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Pessoa(pros) {
     const {dados} = props
    console.log(dados)

  return (
    <View style={styles.container}>
        
      <Text style={styles.texto}>Jogador</Text>
      <Text>Nome: {dados.nome}</Text>
      <Text>Idade: {dados.idade}</Text>

      <image 
      source={{uri: dados.image}}
      style={{
        height:200,
        width:200
      }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'yellow',
        borderWidth:10,
        padding:10
    },
    texto: {
        fontSize:10,
        fontWeight:600
    }
})