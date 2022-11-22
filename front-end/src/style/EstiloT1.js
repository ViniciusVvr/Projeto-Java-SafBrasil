import { StyleSheet } from "react-native";

export default StyleSheet.create({

    viewContainer: {
        flex: 1,
    
    },
    viewTitulo: {
        margin: 50
    },
    titulo: {
        textAlign: 'center',
        marginTop: 15,
        fontSize: 27,
        fontWeight: 'bold',
        color: 'white'
    },
    subTitulo: {
        textAlign: 'center',
        color: 'white',
        fontSize: 17

    },
    viewBeneficios: {
        flex: 4,
        marginBottom: 40,
        marginLeft: 35,
        maxHeight: 150,
    },
    viewIcons: {
        flexDirection: 'row',
        alignItems: 'center', 
        marginLeft: 30,
    },
    beneficios: {
        fontWeight: 'bold',
        fontSize: 23,
        color: 'white'
    },  
    txtReq: {
        color: 'white',
        fontSize: 20
    },
    categorias: {
        fontSize: 16,
        marginTop: 8,
    },
    viewRequisitos: {
        flex: 4,
        marginLeft: 35,
        maxHeight: 170,
        marginBottom: -50

    },
    requisitos: {
        fontWeight: 'bold',
        fontSize: 23,
        color: 'white'
    },
    viewTxtTermos: {
        marginTop: 100,
        marginLeft: 20,
    },
    txtTermos: {
        color: '#ff872a',
        fontSize: 17
    },
    viewInscricao: {
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 40
    },  
    viewTermos:{
        flexDirection: 'row',
    },  
    termos: {
        marginTop: 50,
        marginLeft: 20,
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white'
    },
    check: {
        height: '50%', 
        backgroundColor: 'rgba(255, 0, 255, 0.0)', 
        marginTop: 40
    }

})