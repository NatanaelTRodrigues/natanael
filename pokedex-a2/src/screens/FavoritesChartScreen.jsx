import React, { useEffect, useState } from 'react';
import { View, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { Title, Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BarChart } from 'react-native-chart-kit';

export default function FavoritesChartScreen() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    loadChartData();
  }, []);

  const loadChartData = async () => {
    try {
      const json = await AsyncStorage.getItem('favorites');
      const favorites = json ? JSON.parse(json) : [];

      // Filtrar apenas favoritos com notas válidas
      const validFavorites = favorites.filter(
        (f) => typeof f.note === 'number' && !isNaN(f.note)
      );

      if (validFavorites.length === 0) {
        setChartData(null);
        return;
      }

      const labels = validFavorites.map((f) => f.name);
      const data = validFavorites.map((f) => f.note);

      setChartData({
        labels,
        datasets: [{ data }],
      });
    } catch (error) {
      console.error('Erro ao carregar dados do gráfico:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.title}>Notas dos Pokémon Favoritos</Title>

      {chartData ? (
        <BarChart
          data={chartData}
          width={Dimensions.get('window').width - 32}
          height={220}
          fromZero
          chartConfig={{
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={styles.chart}
        />
      ) : (
        <Text style={styles.empty}>Nenhuma nota válida para exibir no gráfico.</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  title: {
    marginBottom: 16,
  },
  chart: {
    borderRadius: 8,
  },
  empty: {
    marginTop: 50,
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
