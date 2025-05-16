import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, Text , Button } from 'react-native-paper'


export default function Pessoa() {


    const [pessoa, setPessoa] = useState({})
    
    function revelar(){
      const novaPessoa = {
          nome: "Pessoa 1",
          idade: 20 ,
          imagem: ""
          
  
      }
      setPessoa(novaPessoa)
    };
    function revelar2 (){
      const novaPessoa = {
          nome: "Pessoa 2",
          idade: 21 ,
          imagem: ""
          
  
      }
      setPessoa(novaPessoa)
    }
    
  return (
    <View>
      <Card>
        <Card.Content>
          <Text variant='displaySmall'>Componente Pessoa</Text>
        <Text variant='displaySmall'>Nome: {pessoa.nome}</Text>
        <Text variant='displaySmall'>Idade: {pessoa.idade} </Text>
        <Card.Cover source={{ uri: pessoa.imagem}}/>

        </Card.Content>
        <Card.Actions>
          <Button onPress={revelar}>Revelar</Button>
        </Card.Actions>

      </Card>
    </View>
  )
}

