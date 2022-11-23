import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    viewTitle: {
        textAlign: 'center',
        marginTop: 15,
        fontSize: 25,
        fontWeight: 'bold'
    },
    txtTitle: {
        textAlign: 'center',
        fontSize: 22,
        color: 'white'

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
    salvarBT: {
        backgroundColor: '#98ddc1', 
        padding: 15, 
        alignItems: 'center', 
        borderRadius: 60, 
        marginHorizontal: 100,
    },
    txtSalvarBT: {
        fontSize: 17,
    }
})