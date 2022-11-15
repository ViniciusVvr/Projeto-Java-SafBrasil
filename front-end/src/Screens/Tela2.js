import React, { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, Text } from 'react-native';

import EstiloT2 from '../style/EstiloT2';

import { Icon, Input } from '@rneui/themed';

import axios from 'axios';

export default function tela1({ navigation }) {

  const [nome, setNome] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [email, setEmail] = useState(null);
  const [tel, setTel] = useState(null);
  const [nasc, setNasc] = useState(null);
  const [renda, setRenda] = useState(null);
  const [depend, setDepend] = useState(null);
  const [cep, setCep] = useState(null);
  const [errorCep, setErrorCep] = useState(null);
  const [errorDepend, setErrorDepend] = useState(null);
  const [errorRend, setErrorRend] = useState(null);
  const [errorNasc, setErrorNasc] = useState(null);
  const [errorTel, setErrorTel] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorCpf, setErrorCpf] = useState(null);
  const [errorNome, setErrorNome] = useState(null);

  const state = {
    nome: nome,
    cpf: cpf,
    email: email
  }

  const onRequest = async() => {
    try{
      const res = await axios.post('http://localhost:8080/usuario', { ...state });
      return res.data;
    }catch (error) {
      console.log('erro: ', error)
    }
  };


  function valid() {
    let error = false
    const validEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (nome == null) {
      setErrorNome("Preencha seu Nome")
      error = true
    }
    if (cpf == null  ) {
      setErrorCpf("Preencha CPF")
      error = true
    }
    if (!String(email).toLowerCase().match(validEmail)) {
      setErrorEmail("Oops, ouve um erro! Preencha seu E-mail corretamente ")
      error = true
    }
    if (tel == null) {
      setErrorTel("Preencha seu telefone")
      error = true
    }
    if (nasc == null) {
      setErrorNasc("Preencha sua data de nascimento")
      error = true
    }
    if (renda == null) {
      setErrorRend("Informe sua renda")
      error = true
    }
    if (cep == null) {
      setErrorCep("Preencha seu CPF")
      error = true
    }
    return !error
  }

  const salvou = () => {
    if (valid()) {
       navigation.navigate("Tela3", { paramKey: tel })
    }
  }

  return (
    <SafeAreaView style={EstiloT2.container}>
      <View style={EstiloT2.formulario} >

        <View  >
          <Input
            placeholder='Nome Completo*'
            inputStyle={{ marginTop: 15 }}
            keyboardType=""
            errorMessage={errorNome}
            value={nome}
            onChangeText={value => {
              setNome(value)
              setErrorNome(null)
            }}
            leftIcon={
              <Icon
                name='person-outline'
                color="black"
                type='ionicon'
                style={{ marginRight: 15, marginTop: 15 }} />
            } />
        </View>

        <View  >
          <Input
            placeholder='CPF*'
            inputStyle={{ marginTop: 15 }}
            keyboardType="numeric"
            errorMessage={errorCpf}
            onChangeText={value => {
              setCpf(value)
              setErrorCpf(null)
            }}
            value={cpf}
            leftIcon={
              <Icon
                name='keypad-outline'
                color="black"
                type='ionicon'
                style={{ marginRight: 15, marginTop: 15 }} />
            } />
        </View>

        <View >
          <Input
            placeholder='Email*'
            inputStyle={{ marginTop: 15 }}
            keyboardType="email-address"
            errorMessage={errorEmail}
            onChangeText={value => {
              setEmail(value)
              setErrorEmail(null)
            }}
            value={email}
            leftIcon={
              <Icon
                name='mail-outline'
                color="black"
                type='ionicon'
                style={{ marginRight: 15, marginTop: 15 }} />
            } />
        </View>

        <View  >
          <Input
            placeholder='Telefone*'
            inputStyle={{ marginTop: 15 }}
            keyboardType="numeric"
            errorMessage={errorTel}
            onChangeText={value => {
              setTel(value)
              setErrorTel(null)
            }}
            value={tel}
            leftIcon={
              <Icon
                name='phone-portrait-outline'
                color="black"
                type='ionicon'
                style={{ marginRight: 15, marginTop: 15 }} />
            } />
        </View>

        <View  >
          <Input
            placeholder='Data de Nascimento*'
            inputStyle={{ marginTop: 15 }}
            keyboardType="numeric"
            errorMessage={errorNasc}
            onChangeText={value => {
              setNasc(value)
              setErrorNasc(null)
            }}
            value={nasc}
            leftIcon={
              <Icon
                name='calendar-outline'
                color="black"
                type='ionicon'
                style={{ marginRight: 15, marginTop: 15 }} />
            } />
        </View>

        <View  >
          <Input
            placeholder='Renda Atual*'
            inputStyle={{ marginTop: 15 }}
            keyboardType="numeric"
            errorMessage={errorRend}
            onChangeText={value => {
              setRenda(value)
              setErrorRend(null)
            }}
            value={renda}
            leftIcon={
              <Icon
                name='wallet-outline'
                color="black"
                type='ionicon'
                style={{ marginRight: 15, marginTop: 15 }} />
            } />
        </View>

        <View  >
          <Input
            placeholder='Total de Dependentes*'
            inputStyle={{ marginTop: 15 }}
            keyboardType="numeric"
            errorMessage={errorDepend}
            onChangeText={setDepend}
            value={depend}
            leftIcon={
              <Icon
                name='people-circle-outline'
                color="black"
                type='ionicon'
                style={{ marginRight: 15, marginTop: 15 }} />
            } />
        </View>

        <View  >
          <Input
            placeholder='CEP*'
            inputStyle={{ marginTop: 15 }}
            keyboardType="numeric"
            errorMessage={errorCep}
            onChangeText={value => {
              setCep(value)
              setErrorCep(null)
            }}
            value={cep}
            leftIcon={
              <Icon
                name='map-outline'
                color="black"
                type='ionicon'
                style={{ marginRight: 15, marginTop: 15 }} />
            } />
        </View>



        {/* <TouchableOpacity style={EstiloT2.salvarBT} onPress={salvou} > */}
        <TouchableOpacity style={EstiloT2.salvarBT} onPress={onRequest} >
          <Text style={{ color: 'white' }} >Salvar</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}
