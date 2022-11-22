import React, { useState } from 'react';
import { Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import EstiloT1 from "../style/EstiloT1";
import { Icon } from '@rneui/themed'
import { CheckBox1 } from '../Components/CheckBox';
import { Alert } from 'react-native';

const image = "../../assets/images/bg-front-end.png"


export default function Tela1({ navigation }) {

  const [check, setCheck] = useState(false)

  const valid = () => {
    if (check == true) {
      navigation.navigate("Tela2")
    } else {
      console.warn("Termos não assinalada")
    }

  }

  return (
    <ImageBackground
      style={EstiloT1.viewContainer}
      source={require(image)}
      resizeMode="cover"
      >

      <View style={EstiloT1.viewTitulo} >
        <Text style={EstiloT1.titulo} >Seja bem vindo  </Text>
        <Text style={EstiloT1.subTitulo} >Programa de auxílio ao cidadão  </Text>
      </View>


      <View style={EstiloT1.viewBeneficios}  >
        <Text style={EstiloT1.beneficios} >Benefícios: </Text>

        <View style={EstiloT1.categorias} >

          <View style={EstiloT1.viewIcons}>
            <Icon name='done' color="#34dd25" />
            <Text style={EstiloT1.txtReq} >Cesta Básica</Text>
          </View >

          <View style={EstiloT1.viewIcons}>
            <Icon name='done' color="#34dd25" />
            <Text style={EstiloT1.txtReq} >Doação de Brinquedos</Text>
          </View>

          <View style={EstiloT1.viewIcons}>
            <Icon name='done' color="#34dd25" />
            <Text style={EstiloT1.txtReq}>Sacola de Verdura</Text>
          </View>

          <View style={EstiloT1.viewIcons}>
            <Icon name='done' color="#34dd25" />
            <Text style={EstiloT1.txtReq}>Doação em estoque</Text>
          </View>
        </View>

      </View>

      <View style={EstiloT1.viewRequisitos} >
        <Text style={EstiloT1.requisitos} >Requisitos: </Text>
        <View style={EstiloT1.categorias} >

          <View style={EstiloT1.viewIcons}>
            <Icon name='done' color="#34dd25" />
            <Text style={EstiloT1.txtReq}>Cesta Básica</Text>
          </View>

          <View style={EstiloT1.viewIcons}>
            <Icon name='done' color="#34dd25" />
            <Text style={EstiloT1.txtReq}>Doação de Brinquedos</Text>
          </View>

          <View style={EstiloT1.viewIcons}>
            <Icon name='done' color="#34dd25" />
            <Text style={EstiloT1.txtReq}>Sacola de Verdura</Text>
          </View>

          <View style={EstiloT1.viewIcons}>
            <Icon name='done' color="#34dd25" />
            <Text style={EstiloT1.txtReq}>Doação em estoque</Text>
          </View>
        </View>

      </View>

      <View style={EstiloT1.viewTxtTermos} >
        <TouchableOpacity onPress={() => Alert.alert(
          "Termos de uso",
          "(1) Somente nota maxima no projeto;\n(2) Marcel no próximo semestre;\n(3) Elogios ao fim :). ",
          [
            {
              text: 'Recusar'
            },
            {
              text: 'Aceitar',
              onPress: () => setCheck(true)
            }
          ]
        )} >
        <Text style={EstiloT1.txtTermos} >Termos de uso do nosso aplicativo</Text>
        </TouchableOpacity>
      </View>

      <View style={EstiloT1.viewTermos} >
        <Text style={EstiloT1.termos} >Eu li e Concordo com os Termos</Text>
        <CheckBox1 variavel={check} func={() => setCheck(!check)} estilo={EstiloT1.check} />
      </View>

      <View style={EstiloT1.viewInscricao} >
        <Text style={{ fontSize: 15, color: 'white' }} >Possui os requisitos necessários? </Text>
        <TouchableOpacity onPress={valid} >
          <Text style={{ color: '#34dd25' }} >Então clique aqui</Text>
        </TouchableOpacity>
      </View>

    </ImageBackground>
  )
}