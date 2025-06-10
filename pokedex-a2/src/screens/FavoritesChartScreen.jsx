import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Button } from 'react-native';
import { Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function FavoriteChartScreen() {
  const [favorites, setFavorites] = useState([]);
  const [labels, setLabels] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const data = await AsyncStorage.getItem('@favorites');
      const parsed = data ? JSON.parse(data) : [];

      // Filtrar e validar notas e nomes
      const filtered = parsed
        .filter(p => p.note && !isNaN(Number(p.note)) && p.name)
        .slice(0, 10); // Limitar a 10 Pokémon

      setFavorites(filtered);
      setLabels(filtered.map(p => p.name.charAt(0).toUpperCase() + p.name.slice(1)));
      setNotes(filtered.map(p => parseFloat(p.note)));
    } catch (error) {
      console.error('Erro ao carregar favoritos:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text variant="titleLarge" style={styles.title}>Notas dos Pokémon Favoritos</Text>
      <Button title="Atualizar gráfico" onPress={loadFavorites} />
      {notes.length > 0 ? (
        <BarChart
          data={{
            labels: labels,
            datasets: [{ data: notes }]
          }}
          width={screenWidth - 20}
          height={300}
          yAxisSuffix=""
          yAxisInterval={1}
          fromZero
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#eee',
            backgroundGradientTo: '#ccc',
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={styles.chart}
        />
      ) : (
        <Text style={styles.noData}>Nenhum dado válido para exibir no gráfico.</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  title: {
    marginBottom: 16,
  },
  chart: {
    marginVertical: 16,
    borderRadius: 16,
  },
  noData: {
    marginTop: 24,
    fontSize: 16,
    color: 'gray',
  },
});
