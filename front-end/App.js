import React from 'react'
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //npm install @react-navigation/native-stack

import Tela1 from './src/Screens/Tela1'
import Tela2 from './src/Screens/Tela2'
import Tela3 from './src/Screens/Tela3'

const Stack = createNativeStackNavigator();

function MinhasTelas() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Tela 1' component={Tela1} />
      <Stack.Screen name="Tela 2" component={Tela2} /> 
      <Stack.Screen name="Tela 3" component={Tela3} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>

      <NavigationContainer>
        <MinhasTelas />
      </NavigationContainer>

       {/* <Tela1 />       */}
       {/* <Tela2 /> */}
        {/* <Tela3 /> */}

     </SafeAreaView>
  );
}
