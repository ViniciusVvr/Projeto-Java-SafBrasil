import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput } from "react-native";

import { CheckBox1 } from '../Components/CheckBox'
import EstiloT1 from "../Components/EstiloT1";
import Titulo from "../Components/Titulo";
import Formulario from "../Components/Formulario";
import BotaoProximo from "../Components/BotaoProximo";

export default function tela1({navigation}) {

    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [tel, setTel] = useState("")
    const [nasc, setNasc] = useState("")
    const [renda, setRenda] = useState("")
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);


    return (
        <SafeAreaView style={EstiloT1.container} >
 

            <Titulo />

            <View style={EstiloT1.formulario}  >
                <Formulario place="Nome completo*" value={nome} onChangeText={setNome} keyboardType='' />
                <Formulario place="CPF*" value={cpf} onChangeText={setCpf} keyboardType='numeric' />
                <Formulario place="EMAIL*" value={email} onChangeText={setEmail} keyboardType='email-address' />
                <Formulario place="Telefone*" value={tel} onChangeText={setTel} keyboardType='numeric' />
                <Formulario place="Data de Nascimento*" value={nasc} onChangeText={setNasc} keyboardType='numeric' />
                <Formulario place="Renda*" value={renda} onChangeText={setRenda} keyboardType='numeric' />
            </View>

            <Text style={{ textAlign: 'center', fontSize: 23, fontWeight: 'bold' }} >Tem dependentes?</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
                <CheckBox1 titulo="Sim" variavel={check1} func={() => setCheck1(!check1)} estilo={{ width: '20%', backgroundColor: 'rgba(0,0,0,0.0)', marginLeft: 20 }} />
                <CheckBox1 titulo="Não" variavel={check2} func={() => setCheck2(!check2)} estilo={{ width: '20%', backgroundColor: 'rgba(0,0,0,0.0)' }} />
            </View>

            {check1 ? <TextInput style={{textAlign: 'center', backgroundColor: '#fff', marginHorizontal: 30, paddingVertical: 10 }} placeholder="Número de dependentes" ></TextInput> : false }
                

            <BotaoProximo nome="Proximo" onPress={() => navigation.navigate("Tela1")} />

        </SafeAreaView>
    )
}


