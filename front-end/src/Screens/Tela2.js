import React, { useState } from 'react';
import { View, TouchableOpacity, Text, ImageBackground, TextInput } from 'react-native';

import { TextInputMask } from 'react-native-masked-text'

import EstiloT2 from '../style/EstiloT2';

import { Icon } from '@rneui/themed';

import axios from 'axios';

// import valid from '../Components/Validacao'

const image = "../../assets/images/bg-front-end.png"

export default function Tela2({ navigation }) {

  const [nome, setNome] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [email, setEmail] = useState(null);
  const [tel, setTel] = useState(null);
  const [nasc, setNasc] = useState(null);
  const [renda, setRenda] = useState(null);
  const [depend, setDepend] = useState(null);
  const [cep, setCep] = useState(null);
  const [errorCep, setErrorCep] = useState(null);
  const [errorRend, setErrorRend] = useState(null);
  const [errorNasc, setErrorNasc] = useState(null);
  const [errorTel, setErrorTel] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorCpf, setErrorCpf] = useState(null);
  const [errorNome, setErrorNome] = useState(null);

  let cpfField = null

  const state = {
    nome: nome,
    cpf: cpf,
    email: email,
    telefone: tel,
    dataNascimento: nasc,
    renda: renda,
    dependentes: depend,
    cep: cep
  }

  const onRequest = async () => {
    try {
      var res = await axios.post('https://api.expo.dev/', { ...state });
      return res.data;
    } catch (error) {
      console.log('erro: ', error)
    }
  };

  function valid() {
    const sobreNome = String(nome).substring(String(nome).indexOf(" ") + 1)
    const sobreNomeTeste = String(nome).indexOf(" ") >= 0
    let error = false
    const validEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (nome === null) {
      setErrorNome("Informe seu nome")
      error = true
    } else if (sobreNome.length <= 1 || sobreNomeTeste == false) {
      setErrorNome("Preencha seu nome completo!")
      error = true
    }
    if (!cpfField.isValid()) {
      setErrorCpf("Preencha um CPF válido!")
      error = true
    }
    if (!String(email).toLowerCase().trim().match(validEmail)) {
      setErrorEmail("Oops, ouve um erro! Preencha seu E-mail corretamente ")
      error = true
    }
    if (tel == null) {
      setErrorTel("Preencha seu telefone")
      error = true
    } else if (String(tel).length < 15) {
      setErrorTel("Preenha seu um número de telefone válido!")
      error = true
    }
    if (nasc == null) {
      setErrorNasc("Preencha sua data de nascimento!")
      error = true
    } else if (String(nasc).length <= 9) {
      setErrorNasc("Preencha uma data de nascimento válida!")
      error = true
    }
    if (renda == null) {
      setErrorRend("Informe sua renda")
      error = true
    }
    if (cep == null) {
      setErrorCep("Preencha seu cep")
      error = true
    } else if (String(cep).length <= 8) {
      setErrorCep("Preenca seu cep Corretamente!")
      error = true
    }
    return !error
  }

  const salvou = () => {
    if (valid()) {
      navigation.navigate("Tela3", { paramKey: tel })
      onRequest
    }
  }

  return (
    <ImageBackground
      source={require(image)}
      resizeMode="cover"
      style={EstiloT2.container}>

      <View style={EstiloT2.formulario} >

        <View style={EstiloT2.viewTitle} >
          <Text style={EstiloT2.txtTitle} >Cadastro</Text>
        </View>

        <View style={EstiloT2.viewTxtInput} >
          <Icon
            name='person-outline'
            color="white"
            type='ionicon'
            style={{ marginRight: 10, marginTop: 10, marginLeft: 10 }} />
          <TextInput
            placeholder='Nome Completo*'
            placeholderTextColor={'#d6d6d6'}
            value={nome}
            style={EstiloT2.txtInput}
            keyboardType=""
            onChangeText={value => {
              setNome(value)
              setErrorNome(null)
            }}
          />
        </View>
          <Text style={EstiloT2.menssagemErro} >{errorNome}</Text>

        <View style={EstiloT2.viewTxtInput} >
          <Icon
            name='keypad-outline'
            color="white"
            type='ionicon'
            style={{ marginRight: 10, marginTop: 10, marginLeft: 10 }} />
          <TextInputMask
            type={'cpf'}
            placeholder='CPF*'
            placeholderTextColor={'#d6d6d6'}
            value={cpf}
            onChangeText={value => {
              setCpf(value)
              setErrorCpf(null)
            }}
            keyboardType="numeric"
            inputStyle={{ marginTop: 15 }}
            style={EstiloT2.txtInput}
            ref={(ref) => cpfField = ref}
          />
        </View>
        <Text style={EstiloT2.menssagemErro} >{errorCpf}</Text>

        <View style={EstiloT2.viewTxtInput} >
          <Icon
            name='mail-outline'
            color="white"
            type='ionicon'
            style={{ marginRight: 10, marginTop: 10, marginLeft: 10 }} />
          <TextInput
            placeholder='Email*'
            placeholderTextColor={'#d6d6d6'}
            value={email}
            style={EstiloT2.txtInput}
            keyboardType="email-address"
            onChangeText={value => {
              setEmail(value)
              setErrorEmail(null)
            }}
          />
        </View>
          <Text style={EstiloT2.menssagemErro} >{errorEmail}</Text>

        <View style={EstiloT2.viewTxtInput} >
          <Icon
            name='phone-portrait-outline'
            color="white"
            type='ionicon'
            style={{ marginRight: 10, marginTop: 10, marginLeft: 10 }} />
          <TextInputMask
            type={'cel-phone'}
            placeholder='Telefone*'
            placeholderTextColor={'#d6d6d6'}
            value={tel}
            onChangeText={value => {
              setTel(value)
              setErrorTel(null)
            }}
            keyboardType="numeric"
            inputStyle={{ marginTop: 15 }}
            style={EstiloT2.txtInput}
          />
        </View>
        <Text style={EstiloT2.menssagemErro} >{errorTel}</Text>

        <View style={EstiloT2.viewTxtInput} >
          <Icon
            name='calendar-outline'
            color="white"
            type='ionicon'
            style={{ marginRight: 10, marginTop: 10, marginLeft: 10 }} />
          <TextInputMask
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY'
            }}
            placeholder='Data de nascismento*'
            placeholderTextColor={'#d6d6d6'}
            value={nasc}
            onChangeText={value => {
              setNasc(value)
              setErrorNasc(null)
            }}
            keyboardType="numeric"
            inputStyle={{ marginTop: 15 }}
            style={EstiloT2.txtInput}
          />
        </View>
        <Text style={EstiloT2.menssagemErro} >{errorNasc}</Text>

        <View style={EstiloT2.viewTxtInput} >
          <Icon
            name='wallet-outline'
            color="white"
            type='ionicon'
            style={{ marginRight: 10, marginTop: 10, marginLeft: 10 }} />
          <TextInputMask
          type='money'
            placeholder='Renda Atual*'
            placeholderTextColor={'#d6d6d6'}
            value={renda}
            style={EstiloT2.txtInput}
            keyboardType="numeric"
            onChangeText={value => {
              setRenda(value)
              setErrorRend(null)
            }}
          />
        </View>
        <Text style={EstiloT2.menssagemErro} >{errorRend}</Text>

        <View style={EstiloT2.viewTxtInput} >
          <Icon
            name='people-circle-outline'
            color="white"
            type='ionicon'
            style={{ marginRight: 10, marginTop: 10, marginLeft: 10 }} />
          <TextInput
            placeholder='Total de Dependentes'
            placeholderTextColor={'#d6d6d6'}
            style={EstiloT2.txtInput}
            keyboardType="numeric"
            onChangeText={setDepend}
            value={depend}
          />
        </View>

        <View style={EstiloT2.viewTxtInput} >
          <Icon
            name='map-outline'
            color="white"
            type='ionicon'
            style={{ marginRight: 10, marginTop: 10, marginLeft: 10 }} />
          <TextInputMask
            type='zip-code'
            placeholder='CEP*'
            placeholderTextColor={'#d6d6d6'}
            value={cep}
            style={EstiloT2.txtInput}
            keyboardType="numeric"
            onChangeText={value => {
              setCep(value)
              setErrorCep(null)
            }}
          />
        </View>
        <Text style={EstiloT2.menssagemErro} >{errorCep}</Text>

        <TouchableOpacity style={EstiloT2.salvarBT} onPress={salvou} >
          <Text style={EstiloT2.txtSalvarBT} >Salvar</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}
