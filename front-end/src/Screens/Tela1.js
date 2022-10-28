import React, {useState} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import EstiloT1 from "../style/EstiloT1";
import { Icon } from '@rneui/themed'
import {CheckBox1} from '../Components/CheckBox';


export default ({ navigation }) => {

  const [check, setCheck] = useState(true)

  return (
    <View style={EstiloT1.viewContainer} >

      <View style={EstiloT1.viewTitulo} >
        <Text style={EstiloT1.titulo} >Seja bem vindo  </Text>
        <Text style={EstiloT1.subTitulo} >Programa de auxílio ao cidadão  </Text>
      </View>


      <View style={EstiloT1.viewBeneficios}  >
        <Text style={EstiloT1.beneficios} >Benefícios: </Text>

        <View style={EstiloT1.categorias} >

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name='done' />
            <Text>Cesta Básica</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name='done' />
            <Text>Doação de Brinquedos</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name='done' />
            <Text>Sacola de Verdura</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name='done' />
            <Text>Doação em estoque</Text>
          </View>
        </View>

      </View>

      <View style={EstiloT1.viewRequisitos} >
        <Text style={EstiloT1.requisitos} >Requisitos: </Text>
        <View style={EstiloT1.categorias} >

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name='done' />
            <Text>Cesta Básica</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name='done' />
            <Text>Doação de Brinquedos</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name='done' />
            <Text>Sacola de Verdura</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name='done' />
            <Text>Doação em estoque</Text>
          </View>
        </View>

      </View>

      <View style={EstiloT1.viewInscricao} >
        <Text style={{ fontSize: 15 }} >Possui os requisitos necessários? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Formulario")} >
          <Text style={{ color: 'blue' }} >Então clique aqui</Text>
        </TouchableOpacity>
      </View>

      <View style={EstiloT1.viewTermos} >
        <Text style={EstiloT1.termos} >Eu li e concordo em verder minha alma</Text>
        <CheckBox1 variavel={check} func={() => setCheck(!check)} estilo={{height: '40%', backgroundColor: 'rgba(255, 0, 255, 0.0)', marginTop: 90 }} /> 
      </View>
    </View>
  )
}