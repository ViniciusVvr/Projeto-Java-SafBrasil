import React, { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, TextInput } from 'react-native';

import EstiloT2 from '../style/EstiloT2';

import { Icon } from '@rneui/themed';


export default function tela1({ navigation }) {

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState();
  const [nasc, setNasc] = useState('');
  const [renda, setRenda] = useState('');
  const [depend, setDepend] = useState('');
  const [cep, setCep] = useState('');
  return (
    <SafeAreaView style={EstiloT2.container}>
      <View style={EstiloT2.formulario} >

      <View style={{ flexDirection: 'row', backgroundColor: 'lightgray', padding: 15, borderRadius: 25 }} >
                <Icon name='person-outline' color='black' type='ionicon' style={{ marginRight: 15 }} />
                <TextInput placeholder='Nome completo*' value={nome} onChangeText={setNome} style={{ flex: 1 }} />
            </View>

            <View style={{ flexDirection: 'row', backgroundColor: 'lightgray', padding: 15, borderRadius: 25 }} >
                <Icon name='keypad-outline' color='black' type='ionicon' style={{ marginRight: 15 }} />
                <TextInput placeholder='CPF*' value={cpf} onChangeText={setCpf} keyboardType="numeric" style={{ flex: 1 }} />
            </View>

            <View style={{ flexDirection: 'row', backgroundColor: 'lightgray', padding: 15, borderRadius: 25 }} >
                <Icon name='mail-outline' color='black' type='ionicon' style={{ marginRight: 15 }} />
                <TextInput placeholder='Email*' value={email} onChangeText={setEmail} keyboardType="email-address" style={{ flex: 1 }} />
            </View>

            <View style={{ flexDirection: 'row', backgroundColor: 'lightgray', padding: 15, borderRadius: 25 }} >
                <Icon name='phone-portrait-outline' color='black' type='ionicon' style={{ marginRight: 15 }} />
                <TextInput placeholder='Telefone*' value={tel} onChangeText={setTel} keyboardType="numeric" style={{ flex: 1 }} />
            </View>
            <View style={{ flexDirection: 'row', backgroundColor: 'lightgray', padding: 15, borderRadius: 25 }} >
                <Icon name='calendar-outline' color='black' type='ionicon' style={{ marginRight: 15 }} />
                <TextInput placeholder='Data de Nascimento*' value={nasc} onChangeText={setNasc} keyboardType="numeric" style={{ flex: 1 }} />
            </View>

            <View style={{ flexDirection: 'row', backgroundColor: 'lightgray', padding: 15, borderRadius: 25 }} >
                <Icon name='wallet-outline' color='black' type='ionicon' style={{ marginRight: 15 }} />
                <TextInput placeholder='Renda atual*' value={renda} onChangeText={setRenda} keyboardType="numeric" style={{ flex: 1 }} />
            </View>

            <View style={{ flexDirection: 'row', backgroundColor: 'lightgray', padding: 15, borderRadius: 25 }} >
                <Icon name='people-circle-outline' color='black' type='ionicon' style={{ marginRight: 15 }} />
                <TextInput placeholder='Total de dependentes*' value={depend} onChangeText={setDepend} keyboardType="numeric" style={{ flex: 1 }} />
            </View>

            <View style={{ flexDirection: 'row', backgroundColor: 'lightgray', padding: 15, borderRadius: 25 }} >
                <Icon name='map-outline' color='black' type='ionicon' style={{ marginRight: 15 }} />
                <TextInput placeholder='CEP*' value={cpf} onChangeText={setCpf} keyboardType="numeric" style={{ flex: 1 }} />
            </View>  
        
        <TouchableOpacity style={EstiloT2.salvarBT} onPress={() => navigation.navigate("Tela3", {
          paramKey: tel,
        })} >
          <Text style={{color:'black'}} >Salvar</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}
