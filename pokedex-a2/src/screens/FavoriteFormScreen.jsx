// src/screens/FavoriteFormScreen.jsx
import React, { useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';


const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  image: yup.string().url('Imagem inválida').required('Imagem é obrigatória'),
  date: yup
    .string()
    .matches(/^\d{2}\/\d{2}\/\d{4}$/, 'Data deve estar no formato DD/MM/AAAA')
    .required('Data é obrigatória'),
  note: yup
    .number()
    .typeError('Nota deve ser um número')
    .min(0, 'Nota mínima é 0')
    .max(10, 'Nota máxima é 10')
    .required('Nota é obrigatória'),
});

export default function FavoriteFormScreen({ route, navigation }) {
  const { pokemon, favoriteToEdit } = route.params || {};
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: favoriteToEdit?.name || pokemon?.name || '',
      image: favoriteToEdit?.image || pokemon?.image || '',
      date: favoriteToEdit?.date || '',
      note: favoriteToEdit?.note?.toString() || '',
    },
    resolver: yupResolver(schema),
  });

  const date = watch('date');
  useEffect(() => {
    const masked = date
      .replace(/\D/g, '')
      .slice(0, 8)
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1/$2');
    if (masked !== date) {
      setValue('date', masked);
    }
  }, [date]);

  const onSubmit = async (data) => {
    try {
      const existing = await AsyncStorage.getItem('favorites');
      const favorites = existing ? JSON.parse(existing) : [];

      const newFavorite = {
        id: favoriteToEdit?.id || uuid.v4(),
        name: data.name,
        image: data.image,
        date: data.date,
        note: parseFloat(data.note),
      };

      const updatedFavorites = favoriteToEdit
        ? favorites.map((f) => (f.id === favoriteToEdit.id ? newFavorite : f))
        : [...favorites, newFavorite];

      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      navigation.navigate('Favoritos');
    } catch (error) {
      console.error('Erro ao salvar favorito:', error);
      Alert.alert('Erro', 'Não foi possível salvar o favorito.');
    }
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Nome"
            value={value}
            onChangeText={onChange}
            error={!!errors.name}
            style={styles.input}
          />
        )}
      />
      <Controller
        control={control}
        name="image"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="URL da Imagem"
            value={value}
            onChangeText={onChange}
            error={!!errors.image}
            style={styles.input}
          />
        )}
      />
      <Controller
        control={control}
        name="date"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Data (DD/MM/AAAA)"
            value={value}
            onChangeText={onChange}
            error={!!errors.date}
            keyboardType="numeric"
            style={styles.input}
          />
        )}
      />
      <Controller
        control={control}
        name="note"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Nota (0 a 10)"
            value={value}
            onChangeText={onChange}
            error={!!errors.note}
            keyboardType="numeric"
            style={styles.input}
          />
        )}
      />
      <Button mode="contained" onPress={handleSubmit(onSubmit)} style={styles.button}>
        Salvar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
  },
});
