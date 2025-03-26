import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
// import PrimeiroComponente from './componentes/PrimeiroComponente';
// import JavascriptComponente from './componentes/JavascriptComponente';
// import Perfil from './componentes/Perfil';
import Pessoa from './componentes/Pessoa';

export default function App(props) {

  const listaJogadores = {
    nome:"Neymar",
    idade:33,
    imagen: ''
  }

  return (
  //   <ScrollView>
  
  //   <View style={styles.container}>
  // {/* 
  //     <Text></Text>
  //     <Text></Text>
  //     <Text></Text>
  //     <Text></Text>
  //     <Perfil
  //     nome="natanael"
  //     idade={20}
  //     email="natanael@gmail.com"
  //     telefone="91000000000"
  //     />
  //     <Perfil
  //     nome="natanael"
  //     idade={20}
  //     email="natanael@gmail.com"
  //     telefone="91000000000"
  //     />
  //     <Perfil
  //     nome="natanael"
  //     idade={20}
  //     email="natanael@gmail.com"
  //     telefone="91000000000"
  //     />
  //     <Perfil
  //     nome="natanael"
  //     idade={20}
  //     email="natanael@gmail.com"
  //     telefone="91000000000"
  //     />
  //     <Perfil
  //     nome="natanael"
  //     idade={20}
  //     email="natanael@gmail.com"
  //     telefone="91000000000"
  //     />
      
    
  //         <StatusBar style="auto" />
    
  //         <PrimeiroComponente />
    
  //         <JavascriptComponente/>
          
  //     <Text></Text>    
  //     <Text></Text>    
  //     <Text></Text>    
  //     <Text></Text>     */}
  
  //   </View>
  // </ScrollView>
<ScrollView>

  <View>
   
   {
    listaJogadores.map(
      (jogador) => {
        return (
          <Pessoa
          dados={jogador}
          
          />
        )
      }
    )
   }
   
  </View> 
</ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
