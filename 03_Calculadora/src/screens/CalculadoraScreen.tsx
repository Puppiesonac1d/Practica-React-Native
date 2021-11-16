import { numericLiteral } from '@babel/types';
import React from 'react';
import { useState, useRef } from 'react';
import { Text, View, } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {

    const {
        numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        btnDelete,
        btnDividir,
        armaNumero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular
    } = useCalculadora();

    return (
        <View style={styles.calculadoraContainer}>
            <Text
                style={styles.resultadoPequeno}>
                {numeroAnterior}
            </Text>
            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit>
                {numero}
            </Text>
            {/* Botón */}
            <View style={styles.fila}>
                <BotonCalc
                    texto='C'
                    color='#9B9B9B' accion={limpiar} />
                <BotonCalc
                    texto='+/-'
                    color='#9B9B9B' accion={positivoNegativo} />
                <BotonCalc
                    texto='del'
                    color='#9B9B9B' accion={btnDelete} />
                <BotonCalc
                    texto='/'
                    color='#FF9427' accion={btnDividir} />
            </View>

            <View style={styles.fila}>
                <BotonCalc
                    texto='7'
                    accion={armaNumero}
                />
                <BotonCalc
                    texto='8'
                    accion={armaNumero}
                />
                <BotonCalc
                    texto='9'
                    accion={armaNumero}
                />
                <BotonCalc
                    texto='X'
                    color='#FF9427' accion={btnMultiplicar} />
            </View>
            <View style={styles.fila}>
                <BotonCalc
                    texto='4'
                    accion={armaNumero}
                />
                <BotonCalc
                    texto='5'
                    accion={armaNumero}
                />
                <BotonCalc
                    texto='6'
                    accion={armaNumero}
                />
                <BotonCalc
                    texto='-'
                    color='#FF9427' accion={btnRestar} />
            </View>
            <View style={styles.fila}>
                <BotonCalc
                    texto='1'
                    accion={armaNumero}
                />
                <BotonCalc
                    texto='2'
                    accion={armaNumero}
                />
                <BotonCalc
                    texto='3'
                    accion={armaNumero}
                />
                <BotonCalc
                    texto='+'
                    color='#FF9427' accion={btnSumar} />
            </View>
            <View style={styles.fila}>
                <BotonCalc
                    texto='0'
                    ancho
                    accion={armaNumero}
                />
                <BotonCalc
                    texto='.'
                    accion={armaNumero}
                />
                <BotonCalc
                    texto='='
                    color='#FF9427' accion={calcular} />
            </View>
        </View>
    )
}
