import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function AlunoLista() {
  return (
    <View>
      <Button
        mode = 'contained'
        onPress={() => navigation.navigate('AlunoForm')}>
           

        </Button>
      
        
    </View>
  )
}

const styles = StyleSheet.create({})