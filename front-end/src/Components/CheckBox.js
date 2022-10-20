import React, { useState } from 'react';
import { CheckBox, Icon } from '@rneui/themed';

export const CheckBox1 = (props) => {
    
    return(

        <CheckBox
        // center
        title={props.titulo}
        checked={props.variavel}
        onPress={props.func} /* () => setCheck1(!check1) */ 
        containerStyle={props.estilo} /* width: '30%', backgroundColor: 'rgba(255, 0, 255, 0.0)' */
        />
    )

}

export const Checkbox2 = () => {
    const [check2, setCheck2] = useState(false);
    return (
        <CheckBox
            center
            title="Click Here"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={check2}
            onPress={() => setCheck2(!check2)}
        />
    )
}
export const Checkbox3 = () => {
    const [check3, setCheck3] = useState(false);
    return (
        <CheckBox
            center
            title={`Click Here to ${check3 ? 'Remove' : 'Add'} This Item`}
            iconRight
            iconType="material"
            checkedIcon="clear"
            uncheckedIcon="add"
            checkedColor="#0F0"
            checked={check3}
            onPress={() => setCheck3(!check3)}
        />
    )
}
export const Checkbox4 = () => {
    const [check4, setCheck4] = useState(false);
    return (
        <CheckBox
            center
            checkedIcon={
                <Icon
                    name="radio-button-checked"
                    type="material"
                    color="green"
                    size={25}
                    iconStyle={{ marginRight: 10 }}
                />
            }
            uncheckedIcon={
                <Icon
                    name="radio-button-unchecked"
                    type="material"
                    color="grey"
                    size={25}
                    iconStyle={{ marginRight: 10 }}
                />
            }
            checked={check4}
            onPress={() => setCheck4(!check4)}
        />
    )
}
