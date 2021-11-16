import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const DimensionesScreen = () => {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.cajaMorada}></View>
                <View style={styles.cajaNaranja}></View>
            </View>
            <Text>W: {width}, H: {height}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: 'red'
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        height: '50%'
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B',
        height: '50%'
    }
});
