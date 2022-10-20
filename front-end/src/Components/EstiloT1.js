import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center'
    },
    titulo: {
        alignItems: 'center',
        marginTop: 35,
    },
    formulario: {
        flex: 3,
        margin: 24,
        justifyContent: 'space-around'
    },
    txtInput: {
        backgroundColor: 'white',
        padding: 10,
        textAlign: 'center'
    },
    dependentes: {
        alignItems: 'center',
        flex: 1,
    },
    simBT: {
        width: 17,
        height: 17,
        marginRight: 5,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    naoBT: {
        width: 17,
        height: 17,
        marginRight: 6,
        marginLeft: 20,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    viewProximoBT: {
        flex: 1,
        width: 100,
        height: 1,

    },
    proximoBT: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 1,
        backgroundColor: 'white',
        color: 'green',
        borderRadius: 60,
        height: 100,
        width: 250,
        marginLeft: 80,
        marginTop: 50,
        marginBottom: 50,

    }
})