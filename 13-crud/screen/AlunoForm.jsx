import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import {Button, Text, TextInput} from 'react-native-paper'





export default function AlunoForm() {

  const [nome, setNome] = useState("")
  const [dataNascimento, setdataNascimento] = useState("")
  const [cpf, setCpf] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")

  function salvar(){
    let aluno = {
      nome,
      cpf,
      email,
      telefone,
      dataNascimento
    }
    alert(JSON.stringify(aluno))
  }
 
  
  return (
    <View>
      <Text variant='titleLarge'>Informe os dados: </Text>

      <TextInpuT
        style={'style.input'}
        mode = 'outline'
        label='Nome'
        placeholder='informe o nome'
        value={nome}
        onChangeText={setNome}
        

      />
      <TextInpuT
        style={'style.input'}
        mode = 'outline'
        label='CPF'
        placeholder='informe o Cpf'
        value={cpf}
        onChangeText={setCpf}
        keyboardType='decimal-pad'

      />
      <TextInpuT
        style={'style.input'}
        mode = 'outline'
        label='E-mail '
        placeholder='informe o E-mail'
        value={email}
        onChangeText={setEmail}

      />
      <TextInpuT
        style={'style.input'}
        mode = 'outline'
        label='Telefone'
        placeholder='informe o Telefone'
        value={telefone}
        onChangeText={setTelefone}
        keyboardType='decimal-pad'

      />
      <TextInpuT
        style={'style.input'}
        mode = 'outline'
        label='Data de Nascimento'
        placeholder='informe a Data de Nascimento'
        value={dataNascimento}
        onChangeText={setdataNascimento}
        keyboardType='numeric'

      />
      <Button
         style={styles.input}
         mode=' contained'
         onPress={salvar}
         
      />

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1 ,
    alignItems: 'center',
    marginTop: 10
  },
  input:{
    width:'90%',
    marginTop: 10
  }
})