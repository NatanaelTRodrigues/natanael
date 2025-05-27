
import React from 'react'
import {createStackNavigator} from 'react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import UsuarioScreen from '../screens/UsuarioScreen'
import { Title } from 'react-native-paper'

const stack = createStackNavigator()

export default function StackRoutes() {
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
