import React, { useEffect, useCallback } from 'react';
import { Text, View, ImageBackground } from 'react-native';

import EstiloT3 from "../style/EstiloT3";

import { Icon } from '@rneui/themed'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';

const image = "../../assets/images/bg-front-end.png"

export default function Tela3({ route }) {
  const [fontsLoaded] = useFonts({
    'freescpt': require('../../assets/fonts/freescpt.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground
      source={require(image)}
      resizeMode="cover"
      style={EstiloT3.container} >

      <View style={EstiloT3.viewTitulo} >
        <Text style={EstiloT3.titulo} >        Cadastro Finalizado</Text>
        <Icon name='done' color="#34dd25" size={50} />
      </View>


      <View style={EstiloT3.viewObgCadastro} onLayout={onLayoutRootView}>
        <Text style={EstiloT3.txtObjCadastro}>Obrigado pelo Cadastro!</Text>
      </View>

      <View style={EstiloT3.viewResult} >
        <Text style={EstiloT3.txt1Result} >Fique de olho no número: </Text>
        <Text style={EstiloT3.txt2Result} >{route.params.paramKey} </Text>
        <Text style={EstiloT3.txt1Result} >Enviaremos o resultado por lá! </Text>
      </View>

      <View style={EstiloT3.viewRecado} >
        <Text style={EstiloT3.txtRecado} >
          Um carinhoso recado de agradecimento por participar deste projeto universidade FECAF.
        </Text>
      </View>

      <View style={EstiloT3.viewOMDP} >
        <Text style={EstiloT3.txtOMDP} >
          {"Sinceramente,\nOs melhores dos piores."}
        </Text>
      </View>

    </ImageBackground>
  )
}