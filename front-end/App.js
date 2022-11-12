import React from 'react'
import { SafeAreaView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //npm install @react-navigation/native-stack

import Tela1 from './src/Screens/Tela1'
import Tela2 from './src/Screens/Tela2'
import Tela3 from './src/Screens/Tela3'

const Stack = createNativeStackNavigator();

function NavegStack() {
  return(

    <Stack.Navigator
    initialRouteName='Tela2'
          screenOptions={screenOptions}
        >
          <Stack.Screen
            name='Tela1'
            component={Tela1}
            options={{
              title: "Boas Vindas",
              headerShown: false,
            }} />
          <Stack.Screen
            name="Tela2"
            component={Tela2}
            options={{
              title: 'Cadastro'
            }}
          />
          <Stack.Screen
            name="Tela3"
            component={Tela3}
            options={{
              title: 'Cadastro enviado',
              headerShown: false,
            }}
          />
        </Stack.Navigator>
    )
}

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <NavegStack />
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