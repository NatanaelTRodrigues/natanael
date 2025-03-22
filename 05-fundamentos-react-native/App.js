import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import SegundoComponente from './componentes/SegundoComponente';
import TerceiroComponente from './componentes/TerceiroComponente';
import JavascriptComponente from './componentes/JavascriptComponente';
import Perfil from './componentes/Perfil';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <PrimeiroComponente/>

      <SegundoComponente/>

      <TerceiroComponente/>

      <JavascriptComponente/>
      
      <Perfil
       nome="natanael"
       idade={20}
       email= "seila@gmail.com"

      />
      <Perfil
       nome="natanael"
       idade={20}
       email= "seila@gmail.com"

      />
      <Perfil
       nome="natanael"
       idade={20}
       email= "seila@gmail.com"

      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
