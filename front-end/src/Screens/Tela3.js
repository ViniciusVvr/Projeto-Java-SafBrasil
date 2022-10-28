import React from 'react';
import { Text, View,  } from 'react-native';
import Tela2 from './Tela2'

export default (props) => {

    /* function exibirNumeros () {
         Tela2.map(num => {
            return  <Text>{props.tel}</Text>
        }) */

  return (
    <View style={{justifyContent: 'center', flex: 1}} >
      <Text style={{textAlign: 'center'}} >
          Obrigado por inscrição
      </Text>

      <Text>Cadastro em análise, enviaremos o resulto nesse número de telefone </Text> 
    </View>
  )
}