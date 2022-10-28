import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, ScrollView } from "react-native";

import EstiloT2 from "../style/EstiloT2";
import Titulo from "../Components/Titulo";
import Formulario from "../Components/Formulario";
import BotaoProximo from "../Components/BotaoProximo";

export default function tela1({navigation}) {

    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [tel, setTel] = useState(11984985242)
    const [nasc, setNasc] = useState("")
    const [renda, setRenda] = useState("")
    const [depend, setDepend] = useState("")
    const [cep, setCep] = useState("")
    const [estado, setEstado] = useState("")
    const [cidade, setCidade] = useState("")
    const [rua, setRua] = useState("")
    const [bairro, setBairro] = useState("")
    const [numComplemento, setNumComplemento] = useState("")


    return (
        <SafeAreaView style={EstiloT2.container} >

            <View style={EstiloT2.formulario}  >
                <ScrollView>
             
                <Formulario place="Nome completo*" value={nome} onChangeText={setNome} keyboardType='' style={EstiloT2.txtInput} />
                <Formulario place="CPF*" value={cpf} onChangeText={setCpf} keyboardType='numeric'style={EstiloT2.txtInput} />
                <Formulario place="EMAIL*" value={email} onChangeText={setEmail} keyboardType='email-address'style={EstiloT2.txtInput} />
                <Formulario place="Telefone*" value={tel} onChangeText={setTel} keyboardType='numeric'style={EstiloT2.txtInput} />
                <Formulario place="Data de Nascimento*" value={nasc} onChangeText={setNasc} keyboardType='numeric'style={EstiloT2.txtInput} />
                <Formulario place="Renda*" value={renda} onChangeText={setRenda} keyboardType='numeric'style={EstiloT2.txtInput} />
                <Formulario place="Números de Dependentes*" value={depend} onChangeText={setDepend} keyboardType='numeric'style={EstiloT2.txtInput} />
                <Formulario place="CEP*" value={cep} onChangeText={setCep} keyboardType='numeric'style={EstiloT2.txtInput} />
                <Formulario place="ESTADO*" value={estado} onChangeText={setEstado} keyboardType=''style={EstiloT2.txtInput} />
                <Formulario place="CIDADE*" value={cidade} onChangeText={setCidade} keyboardType=''style={EstiloT2.txtInput} />
                <Formulario place="RUA*" value={rua} onChangeText={setRua} keyboardType=''style={EstiloT2.txtInput} />
                <Formulario place="BAIRRO*" value={bairro} onChangeText={setBairro} keyboardType=''style={EstiloT2.txtInput} />
                <Formulario place="NUMERO E COMPLEMENO*" value={numComplemento} onChangeText={setNumComplemento} keyboardType=''style={EstiloT2.txtInput} />
                </ScrollView>
            </View>   

            {/* <BotaoProximo nome="Proximo" onPress={() => navigation.navigate("Tela1")} /> */}

        </SafeAreaView>
    )
}


