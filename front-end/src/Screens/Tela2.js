import React, { useState } from 'react'
import { SafeAreaView, View } from 'react-native'

import Titulo from '../Components/Titulo'
import Formulario from '../Components/Formulario'
import EstiloT1 from '../Components/EstiloT1'
import BotaoProximo from '../Components/BotaoProximo'

export default function Principal({navigation}) {
    const [cep, setCep] = useState("")
    const [estado, setEstado] = useState("")
    const [cidade, setCidade] = useState("")
    const [rua, setRua] = useState("")
    const [bairro, setBairro] = useState("")
    const [numComplemento, setNumComplemento] = useState("")
    return (
        <SafeAreaView style={{ backgroundColor: 'gray', flexGrow: 1 }} >

            <Titulo />

            <View style={EstiloT1.formulario}  >
                <Formulario place="CEP*" value={cep} onChangeText={setCep} keyboardType='numeric' />
                <Formulario place="ESTADO*" value={estado} onChangeText={setEstado} keyboardType='' />
                <Formulario place="CIDADE*" value={cidade} onChangeText={setCidade} keyboardType='' />
                <Formulario place="RUA*" value={rua} onChangeText={setRua} keyboardType='' />
                <Formulario place="BAIRRO*" value={bairro} onChangeText={setBairro} keyboardType='' />
                <Formulario place="NUMERO E COMPLEMENO*" value={numComplemento} onChangeText={setNumComplemento} keyboardType='' />
            </View>

            <BotaoProximo nome="Proximo" onPress={() => navigation.navigate("Tela2")} />

        </SafeAreaView>
    )
}