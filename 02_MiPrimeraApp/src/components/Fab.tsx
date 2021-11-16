import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
    position?: 'br' | 'bl'
}

export const Fab = ({ title, position = 'br', onPress }: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.fabLocation, (position === 'bl') ? styles.left : styles.right]}
        >
            <View style={styles.fab}>
                <Text style={styles.fabText}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    left: {
        left: 25
    },
    right: {
        right: 25
    },
    fab: {
        justifyContent: 'center',
        backgroundColor: '#5856D6',
        borderRadius: 20,
        height: 60,
        width: 100,

    }, fabText: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})
