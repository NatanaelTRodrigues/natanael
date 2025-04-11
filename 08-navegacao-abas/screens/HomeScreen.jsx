import { StyleSheet, View } from 'react-native'
import { Text, Card , Title , Paragraph } from 'react-native-paper'
import React from 'react'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text variant='headlineLarge' style={{textAlign:'center'}}>Tela de Inicio</Text>
    <Card>
      <Card.Content>
        <Title>Um titulo</Title>
        <Paragraph>Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun 
        </Paragraph>
      </Card.Content>
      <Card.Cover style={styles.carros} source={{uri: 'https://i.pinimg.com/736x/79/1a/cb/791acb4b526e82bf30321f32c1c9bc1d.jpg'}}/>
    </Card>
    
    
    
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'fff',
    flex:1 ,
    alignItems: 'center',
    justifyContent: 'center'
  },
  carros:{
    width:250,
    justifyContent:'center'
  }

})