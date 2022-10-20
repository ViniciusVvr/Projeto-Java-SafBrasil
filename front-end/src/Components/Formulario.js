import React from 'react'
import {View, TextInput} from 'react-native'
import EstiloT1 from './EstiloT1'

export default (props) => {
    return (

        <View style={{}} >
            <TextInput style={EstiloT1.txtInput} placeholder={props.place} keyboardType={props.keyboardType} value={props.value} onChangeText={props.onChangeText} />
        </View>

    )
}