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
        marginTop: 80,
        marginLeft: 20,
    },
    txtTermos: {
        color: 'yellow',
        fontSize: 20
    },  
    viewTermos:{
        flexDirection: 'row',
    },  
    termos: {
        marginTop: 30,
        marginLeft: 20,
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white'
    },
    check: {
        height: '60%', 
        backgroundColor: 'rgba(255, 0, 255, 0.0)', 
        marginTop: 20,
    },
    viewInscricao: {
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 30
    },
    txtInscricao: { 
        fontSize: 19, 
        color: 'white' 
    },
    salvarBT: {
        backgroundColor: '#98ddc1', 
        padding: 15, 
        alignItems: 'center', 
        borderRadius: 60, 
        marginHorizontal: 100,
        marginTop: 25
    },
    txtSalvarBT: {
        fontSize: 17,
    }

})