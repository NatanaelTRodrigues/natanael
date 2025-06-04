// App.js
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import Routes from './src/navigation/Routes';

export default function App() {
  return (
    <PaperProvider>
      <Routes />
    </PaperProvider>
  );
}
