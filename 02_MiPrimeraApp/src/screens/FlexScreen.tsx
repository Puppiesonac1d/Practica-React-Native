import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor: '#2BC4D9',
        flexDirection: 'row'
    },
    caja1: {
        flex: 1,
        borderWidth: 2,
        fontSize: 20,
        borderColor: 'white'
    },
    caja2: {
        flex: 1,
        borderWidth: 2,
        fontSize: 20,
        borderColor: 'white'
    },
    caja3: {
        flex: 1,
        borderWidth: 2,
        fontSize: 20,
        borderColor: 'white'
    }
})
