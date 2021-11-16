import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Box Object Model
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    title: {
        padding: 20,
        fontSize: 20,
        borderWidth: 10,
        marginHorizontal: 20
    }
});