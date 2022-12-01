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
    viewTxtInput: {
        flexDirection: 'row'
    },
    txtInput: {
        flex: 1,
        borderColor: 'white',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        padding: 5,
        marginBottom: 30,
        color: 'white'
    },
    menssagemErro: {
        alignSelf: 'flex-start',
        marginLeft: 15,
        color: '#ee4b52',
        marginTop: -30
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
    },
    
})