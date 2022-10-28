import React from 'react'
import { SafeAreaView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //npm install @react-navigation/native-stack

import Tela1 from './src/Screens/Tela1'
import Tela2 from './src/Screens/Tela2'
import Tela3 from './src/Screens/Tela3'

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
        
          initialRouteName='BemVindo'
          screenOptions={screenOptions}
          
        >
          <Stack.Screen
            name='BemVindo'
            component={Tela1}
            options={{
              title: "Boas Vindas",
              headerShown: false,
            }} />
          <Stack.Screen
            name="Formulario"
            component={Tela2}
            options={{
              title: 'Cadastro do Beneficiado'
            }}
          />
          <Stack.Screen
            name="Obrigado"
            component={Tela3}
          />
        </Stack.Navigator>
      </NavigationContainer>

    </SafeAreaView>
  );
}

const screenOptions = {
  headerTitleAlign: 'center',
  headerStyle: false,
  headerTitleStyle: {
    fontWeight: 'bold',

},

}