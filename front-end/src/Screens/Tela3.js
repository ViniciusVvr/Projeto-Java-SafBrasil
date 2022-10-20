import React, { useState } from 'react'
import { SafeAreaView, View } from 'react-native'

import Titulo from '../Components/Titulo'
import Formulario from '../Components/Formulario'
import EstiloT1 from '../Components/EstiloT1'
import BotaoProximo from '../Components/BotaoProximo'

export default function Principal() {
    const [nomeC, setNomeC] = useState("")
    const [dataNanc, setDataNasc] = useState("")
    const [rg, setRg] = useState("")
    const [cpf, setCpf] = useState("")
    const [comprovanteM, setComprovanteM] = useState("")
    return (
        <SafeAreaView style={{ backgroundColor: 'gray', flexGrow: 1 }} >

            <Titulo />

            <View style={EstiloT1.formulario}  >
                <Formulario place="Nome Completo*" value={nomeC} onChangeText={setNomeC} keyboardType='' />
                <Formulario place="Data de Nascimento*" value={dataNanc} onChangeText={setDataNasc} keyboardType='numeric' />
                <Formulario place="RG*" value={rg} onChangeText={setRg} keyboardType='numeric' />
                <Formulario place="CPF" value={cpf} onChangeText={setCpf} keyboardType='numeric' />
                <Formulario place="Comprovante de Matricula*" value={comprovanteM} onChangeText={setComprovanteM} keyboardType='' />
            </View>

            <BotaoProximo nome="Concluir" onPress={() => alert("Cadastro concluido")} />

        </SafeAreaView>
    )
}