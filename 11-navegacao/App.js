import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

import StackRoutes from './src/routes/StackRoutes';
import TabRoutes from './src/routes/TabRoutes';
import DrawerRoutes from './src/routes/DrawerRoutes';

import NomeNumero from './componentes/NomeNumero';
import Pessoa from './componentes/Pessoa';
import GeradorNumeroAleatorio from './componentes/GeradorNumeroAleatorio';

export default function App() {
  return (
    <View>
     <StatusBar>

     <Pessoa/>
    <GeradorNumeroAleatorio/>
      <NomeNumero/>

     </StatusBar>
    </View>
  );
}