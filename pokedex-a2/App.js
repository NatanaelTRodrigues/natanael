import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import Routes from './src/navigation/Routes';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <PaperProvider>
          <Routes />
        </PaperProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
