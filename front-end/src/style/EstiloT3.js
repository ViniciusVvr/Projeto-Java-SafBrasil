import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#05347e'
    },
    viewTitulo: {
        margin: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    titulo: {
        textAlign: 'center',
        marginTop: 15,
        fontSize: 25,
        color: "#daedff"
    },
    viewObgCadastro: {
        alignItems: 'center',
        marginBottom: 40
    },
    txtObjCadastro: {
        fontFamily: 'freescpt',
        fontSize: 88,
        color: '#98ddc1',
        textAlign: 'center'
    },
    viewResult: {
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        marginLeft: 30, 
        marginBottom: 40
    },
    txt1Result: {
        color: '#daedff', 
        fontSize: 17
    },
    txt2Result: {
        color: "#34dd25", 
        fontSize: 19
    },
    viewRecado: {
        marginTop:45,
        margin: 25, 
        alignItems: 'center', 
        marginBottom: 50 
    },
    txtRecado: {
        color: '#daedff', 
        textAlign: 'center', 
        fontSize: 21
    },
    viewOMDP: {
        marginTop: 60,
        margin: 25, 
        alignItems: 'center'
    },
    txtOMDP: {
        color: '#daedff', 
        textAlign: 'center', 
        fontSize: 17
    }
})