import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, TextInput, HelperText } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = '@favorites';

const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  image: yup.string().url('Deve ser uma URL válida').required('Imagem é obrigatória'),
  types: yup.string().required('Tipos são obrigatórios (separados por vírgula)'),
  id: yup.number().positive().integer().required('ID é obrigatório e deve ser número inteiro'),
});

export default function FavoriteFormScreen({ navigation, route }) {
  const { pokemonToEdit } = route.params || {};

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (pokemonToEdit) {
      setValue('id', pokemonToEdit.id.toString());
      setValue('name', pokemonToEdit.name);
      setValue('image', pokemonToEdit.image);
      setValue('types', pokemonToEdit.types.join(', '));
    }
  }, [pokemonToEdit]);

  const onSubmit = async (data) => {
    try {
      const jsonValue = await AsyncStorage.getItem(FAVORITES_KEY);
      const favorites = jsonValue ? JSON.parse(jsonValue) : [];

      // Se editar, substitui; senão adiciona
      const index = favorites.findIndex((p) => p.id === Number(data.id));
      if (index >= 0) {
        favorites[index] = {
          id: Number(data.id),
          name: data.name,
          image: data.image,
          types: data.types.split(',').map((t) => t.trim()),
        };
      } else {
        favorites.push({
          id: Number(data.id),
          name: data.name,
          image: data.image,
          types: data.types.split(',').map((t) => t.trim()),
        });
      }

      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
      navigation.goBack();
    } catch (e) {
      console.error('Erro ao salvar favorito', e);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Controller
        control={control}
        name="id"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="ID"
            keyboardType="numeric"
            value={value}
            onChangeText={onChange}
            error={!!errors.id}
          />
        )}
      />
      <HelperText type="error" visible={!!errors.id}>
        {errors.id?.message}
      </HelperText>

      <Controller
        control={control}
        name="name"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Nome"
            value={value}
            onChangeText={onChange}
            error={!!errors.name}
          />
        )}
      />
      <HelperText type="error" visible={!!errors.name}>
        {errors.name?.message}
      </HelperText>

      <Controller
        control={control}
        name="image"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="URL da Imagem"
            value={value}
            onChangeText={onChange}
            error={!!errors.image}
          />
        )}
      />
      <HelperText type="error" visible={!!errors.image}>
        {errors.image?.message}
      </HelperText>

      <Controller
        control={control}
        name="types"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Tipos (separados por vírgula)"
            value={value}
            onChangeText={onChange}
            error={!!errors.types}
          />
        )}
      />
      <HelperText type="error" visible={!!errors.types}>
        {errors.types?.message}
      </HelperText>

      <Button mode="contained" onPress={handleSubmit(onSubmit)} style={styles.button}>
        Salvar
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  button: {
    marginTop: 20,
  },
});
