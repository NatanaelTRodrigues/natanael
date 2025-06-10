import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Funções simples para aplicar máscara automática
const applyDateMask = (value) => {
  // Adiciona barras conforme o usuário digita: ex: 01022023 => 01/02/2023
  let v = value.replace(/\D/g, '').slice(0, 8);
  if (v.length >= 5) return `${v.slice(0, 2)}/${v.slice(2, 4)}/${v.slice(4, 8)}`;
  if (v.length >= 3) return `${v.slice(0, 2)}/${v.slice(2, 4)}`;
  if (v.length >= 1) return v;
  return '';
};

const applyNoteMask = (value) => {
  // Permite apenas números de 0 a 10 e aceita decimal (ex: 9.5)
  let v = value.replace(/[^0-9.]/g, '');
  if (v.length > 4) v = v.slice(0, 4);
  if (v > 10) v = '10';
  return v;
};

const schema = yup.object().shape({
  note: yup
    .number()
    .min(0, 'Nota mínima é 0')
    .max(10, 'Nota máxima é 10')
    .required('Nota é obrigatória'),
  date: yup
    .string()
    .matches(/^\d{2}\/\d{2}\/\d{4}$/, 'Data deve estar no formato DD/MM/AAAA')
    .required('Data é obrigatória'),
});

export default function FavoriteFormScreen({ route, navigation }) {
  const { pokemon, onSave } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: `Favoritar ${pokemon.name}` });
  }, [navigation, pokemon]);

  const saveFavorite = async (values) => {
    try {
      const existing = await AsyncStorage.getItem('favorites');
      const favorites = existing ? JSON.parse(existing) : [];

      // Checa se já existe e atualiza
      const index = favorites.findIndex((f) => f.id === pokemon.id);
      if (index >= 0) {
        favorites[index] = { ...favorites[index], ...values };
      } else {
        favorites.push({ ...pokemon, ...values });
      }

      await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
      Alert.alert('Sucesso', 'Pokémon salvo nos favoritos!');
      if (onSave) onSave(); // Para atualizar lista externa se tiver callback
      navigation.navigate('Favoritos');
    } catch (error) {
      Alert.alert('Erro', 'Falha ao salvar favorito.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: pokemon.image }} style={styles.image} />
      <Formik
        initialValues={{ date: '', note: '' }}
        validationSchema={schema}
        onSubmit={(values) => saveFavorite(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
        }) => (
          <>
            <TextInput
              label="Data (DD/MM/AAAA)"
              value={values.date}
              onChangeText={(text) => setFieldValue('date', applyDateMask(text))}
              onBlur={handleBlur('date')}
              keyboardType="numeric"
              maxLength={10}
              style={styles.input}
              error={touched.date && errors.date}
            />
            {touched.date && errors.date && (
              <Text style={styles.error}>{errors.date}</Text>
            )}

            <TextInput
              label="Nota (0 a 10)"
              value={values.note}
              onChangeText={(text) => setFieldValue('note', applyNoteMask(text))}
              onBlur={handleBlur('note')}
              keyboardType="numeric"
              maxLength={4}
              style={styles.input}
              error={touched.note && errors.note}
            />
            {touched.note && errors.note && (
              <Text style={styles.error}>{errors.note}</Text>
            )}

            <Button mode="contained" onPress={handleSubmit} style={styles.button}>
              Salvar Favorito
            </Button>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 24,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 20,
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
});
