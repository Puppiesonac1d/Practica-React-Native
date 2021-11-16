import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',
    },
    calculadoraContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 10
    },
    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right'
    },
    resultadoPequeno: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right'
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },
    boton: {
        height: 80,
        width: 80,
        borderRadius: 100,
        backgroundColor: '#2D2D2D',
        marginHorizontal: 10,
        justifyContent: 'center',
    }, buttonTexto: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        fontWeight: '300'
    }
});
