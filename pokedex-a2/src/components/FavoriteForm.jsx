import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { TextInputMask } from 'react-native-masked-text';

export default function FavoriteForm({ defaultValues = {}, onSubmit }) {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: defaultValues.name || '',
      nickname: defaultValues.nickname || '',
      type: defaultValues.type || '',
      dateCaught: defaultValues.dateCaught || '',
      notes: defaultValues.notes || '',
    }
  });

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="name"
        rules={{ required: 'O nome é obrigatório' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Nome do Pokémon"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={!!errors.name}
          />
        )}
      />
      <HelperText type="error" visible={!!errors.name}>
        {errors.name?.message}
      </HelperText>

      <Controller
        control={control}
        name="nickname"
        rules={{ required: 'O apelido é obrigatório' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Apelido"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={!!errors.nickname}
          />
        )}
      />
      <HelperText type="error" visible={!!errors.nickname}>
        {errors.nickname?.message}
      </HelperText>

      <Controller
        control={control}
        name="type"
        rules={{ required: 'O tipo é obrigatório' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Tipo"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={!!errors.type}
          />
        )}
      />
      <HelperText type="error" visible={!!errors.type}>
        {errors.type?.message}
      </HelperText>

      <Controller
        control={control}
        name="dateCaught"
        rules={{
          required: 'Data da captura é obrigatória',
          pattern: {
            value: /^\d{2}\/\d{2}\/\d{4}$/,
            message: 'Data deve estar no formato DD/MM/AAAA',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInputMask
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY',
            }}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            style={[styles.input, errors.dateCaught && styles.inputError]}
            placeholder="DD/MM/AAAA"
          />
        )}
      />
      <HelperText type="error" visible={!!errors.dateCaught}>
        {errors.dateCaught?.message}
      </HelperText>

      <Controller
        control={control}
        name="notes"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Notas"
            mode="outlined"
            multiline
            numberOfLines={3}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
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
    backgroundColor: 'white',
    marginBottom: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 4,
  },
  inputError: {
    borderColor: 'red',
  },
  button: {
    marginTop: 16,
  },
});
