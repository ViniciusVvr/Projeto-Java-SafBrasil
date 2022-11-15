import React, { useEffect, useCallback } from 'react';
import { Text, View } from 'react-native';

import EstiloT3 from "../style/EstiloT3";

import { Icon } from '@rneui/themed'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';


export default ({ route }) => {
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
    <View style={EstiloT3.viewContainer} >

      <View style={{marginTop: 25}} >
      <View style={EstiloT3.viewTitulo} >
        <Text style={EstiloT3.titulo} >        Cadastro Finalizado</Text>
        <Icon name='done' color="green" size={50} />
      </View>
      </View>

      <View style={{ alignItems: 'center', marginBottom: 40 }} onLayout={onLayoutRootView}>
        <Text style={{ fontFamily: 'freescpt', fontSize: 88, color: '#daedff', textAlign: 'center' }}>Obrigado pelo Cadastro!</Text>
      </View>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: 30, marginBottom: 40 }} >
        <Text style={{color: '#daedff', fontSize: 18}} >Fique de olho no número: </Text>
        <Text style={{ color: "green", fontSize: 18}} >{route.params.paramKey}. </Text>
        <Text style={{color: '#daedff', fontSize: 18}} >Enviaremos o resultado por lá! </Text>
      </View>

      <View style={{ margin: 25, alignItems: 'center', marginBottom: 50 }} >
        <Text style={{ color: '#daedff', textAlign: 'center', fontSize: 17 }} >
          Um carinhoso recado de agradecimento por participar deste projeto universidade FECAF.
        </Text>
      </View>
      
      <View style={{ margin: 25, alignItems: 'center' }} >
        <Text style={{ color: '#daedff', textAlign: 'center', fontSize: 17 }} >
          {"Sinceramente,\nOs melhores dos piores."}
        </Text>
      </View>





    </View>
  )
}