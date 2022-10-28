import React from 'react'
import {View, TouchableOpacity, Text} from 'react-native'

import EstiloT1 from '../style/EstiloT1'

export default (props) => {

    return (
        <View style={EstiloT1.viewProximoBT} >

            <TouchableOpacity style={EstiloT1.proximoBT} onPress={props.onPress} >
                <Text >{props.nome}</Text>
            </TouchableOpacity>
        </View>
    )
}