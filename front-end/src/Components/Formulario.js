import React from 'react'
import {View, TextInput} from 'react-native'
import EstiloT1 from '../style/EstiloT1'

export default (props) => {
    return (

        <View style={{}} >
            <TextInput style={props.style} placeholder={props.place} keyboardType={props.keyboardType} value={props.value} onChangeText={props.onChangeText} />
        </View>

    )
}