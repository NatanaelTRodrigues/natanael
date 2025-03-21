import React from "react";
import {View, Text, StyleSheet} from 'react-native'

export default function PrimeiroComponente(){

   return(
    <View>
       <Text style={styles.textoGrande}>Primeiro componente</Text> 
    </View>
   )

}

const styles = StyleSheet.create({
   textoGrande: {
     fontSize: 20,
     fontWeight: 600,
   }

})