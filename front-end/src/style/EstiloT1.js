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
        fontSize: 25,
        fontWeight: 'bold'
    },
    subTitulo: {
        textAlign: 'center',

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
        fontSize: 19

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
        fontSize: 19
    },
    viewInscricao: {
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 30
    },  
    viewTermos:{
        flexDirection: 'row',
    },  
    termos: {
        marginTop: 100,
        marginLeft: 20,
        fontSize: 14,
        fontWeight: 'bold',
        
    }
})