import React from "react";
import { View, Text } from "react-native";
import EstiloT1 from "./EstiloT1";

export default () => {
    return (

        <View style={EstiloT1.titulo}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }} >
                CADASTRO DE BENEFICIADO
            </Text>
        </View>
    )
}