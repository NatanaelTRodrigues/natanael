import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Perfil(props) {

 console.log(props)
 

  return (
    <View style={styles.container}>
      <Text style={{fontsize: 40}}>Perfil</Text>
      <Text style={{fontsize: 40}}>Nome: {props.nome}</Text>
      <Text style={{fontsize: 40}}>iadade: {props.idade}</Text>
      <Text style={{fontsize: 40}}>Email: {props.email}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundcolor: 'red'
    }
})