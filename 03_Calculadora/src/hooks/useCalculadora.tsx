import React from "react";
import { useState, useRef } from 'react';

enum Operadores {
    sumar, resta, multiplicar, dividir
}

export const useCalculadora = () => {

    const [numeroAnterior, setNumeroAnterior] = useState('0');

    const [numero, setNumero] = useState('0');

    const ultimaOperacion = useRef<Operadores>();

    const limpiar = () => {
        setNumero('0');
    }

    const armaNumero = (numeroTexto: string) => {
        //No aceptar doble punto
        if (numero.includes('.')
            && numeroTexto === '.') return;

        if (numero.startsWith('0') || numero.startsWith('-0')) {
            //Punto decimal
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto);
                //Evaluar si es otro cero y hay un punto
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto);
                //Evaluar si es diferente de 0 y no tiene un punto
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto);
                //Evitar el 0000.0
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero);
            } else {
                setNumero(numero + numeroTexto);
            }
        } else {
            setNumero(numero + numeroTexto);
        }
    }

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));
        } else {
            setNumero('-' + numero)
        }
    }

    const btnDelete = () => {
        let negativo = '';
        let numeroTemp = numero;
        if (numero.includes('-')) {
            negativo = '';
            numeroTemp = numero.substr(1);
        }

        if (numeroTemp.length > 1) {
            setNumero(negativo + numeroTemp.slice(0, -1));
        } else {
            setNumero('0');
        }
    }

    const cambiarNumeroAnterior = () => {

        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1));
        } else {
            setNumeroAnterior(numero);
        }
        setNumero('0');
    }

    const btnDividir = () => {
        //Establecer la operacion
        ultimaOperacion.current = Operadores.dividir;
        cambiarNumeroAnterior();
    }

    const btnMultiplicar = () => {
        //Establecer la operacion
        ultimaOperacion.current = Operadores.multiplicar;
        cambiarNumeroAnterior();
    }

    const btnRestar = () => {
        //Establecer la operacion
        ultimaOperacion.current = Operadores.resta;
        cambiarNumeroAnterior();
    }

    const btnSumar = () => {
        //Establecer la operacion
        ultimaOperacion.current = Operadores.sumar;
        cambiarNumeroAnterior();
    }

    const calcular = () => {
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num1 + num2}`);
                break;
            case Operadores.resta:
                setNumero(`${num1 - num2}`);
                break;
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`);
                break;
            case Operadores.dividir:
                setNumero(`${num1 / num2}`);
                break;
            default: break;
        }
        setNumeroAnterior('0');
    }

    return {
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
    }
}
