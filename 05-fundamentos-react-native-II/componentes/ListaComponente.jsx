import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListaComponente() {
     const lista = ["Uva", "Maçã", "Banana", "laranja" ]


  return (
    <View style={styles.container}>

        {lista.map((fruta) => <Text style={styles.texto}>{fruta}</Text>)}
      
        {lista.map(
            (fruta) => {
                return(
                    <View style={styles.cointainerAmarelo}>
                        <Text style={styles.texto}>{fruta}</Text>
                    </View>    
                )
            }
        )}
        {
            
        } 

    </View>
  )
}

const styles = StyleSheet.create({})