import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    titulo: {
        textAlign: 'center',
        marginTop: 15,
        fontSize: 25,
        fontWeight: 'bold'
    },
    subTitulo: {
        textAlign: 'center',

    },
    formulario: {
        flex: 3,
        margin: 24,
        justifyContent: 'space-around'
    },
    txtInput: {
        backgroundColor: 'white',
        padding: 10,
        textAlign: 'center',
        marginBottom: 30,
        borderRadius: 10
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
    salvarBT: {
        backgroundColor: 'gray', 
        padding: 15, 
        alignItems: 'center', 
        borderRadius: 60, 
        marginHorizontal: 100,

    }
})