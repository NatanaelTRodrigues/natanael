
import { StyleSheet, View } from 'react-native'
import {Card, Avatar, Text } from 'react-native-paper'
import React, { useEffect } from 'react'
import { FlatList } from 'react-native-gesture-handler'


export default function HomeScreen() {
     
    const [usuarios, setUsuarios] = useState ([])

    useEffect(()=> {
        alert('Componente Montado')
  
  
  axios.get('https://doummyjson.com/users')
  .then(resposta => {
       console.log(resposta.data.users)
       setUsuarios(resposta.data.users)
  })
  .catch(erro => {
    console.log(erro)
  }) 
}, [] )


    
  return (


    <View style={styles.container}>
       <FlatList 
        data={usuarios}
        renderItem={({ item }) =>(
            <Card>
              <Card.Title
                 title ={item.firstName + " " + item.lastName}
                 subtitle ={item-email}
                 left={(props) => <Avatar.Image {...props} source={{uri: item.Image }}/>}
              />

              
            </Card>
        )}
        />
 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});