import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()
export default function AlunoStack() {
  return (
    <StackRoutes.Navigator>
        <Stack.Screen name ='HomeScreen'
         comp={HomeScreen}
         options={{
            title: "Lista de Usuários",
            headerTitleAlign:'center'
         }}
         
         />
        <Stack.Screen name ='HomeScreen'
         comp={UsuarioScreen}
         options={{
            title: "Usuários",
            headerTitleAlign:'center'
         }}
         
         />
        

    </StackRoutes.Navigator>
  )
}

const styles = StyleSheet.create({})