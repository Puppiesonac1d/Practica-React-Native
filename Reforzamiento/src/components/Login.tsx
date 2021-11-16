import React from 'react'
import { useReducer, useEffect } from 'react';

//Creamos la interfaz para dar la base a las futuras funciones
interface AuthState {
    validando: boolean,
    token: string | null,
    userName: string,
    nombre: string
}

const initialState: AuthState = {
    //apenas se carge el componente, automáticamente validando será true
    validando: true,
    token: null,
    userName: '',
    nombre: ''
}

//Asignar los parámetros que retornará cuando la authAction sea login
type LoginPayload = {
    username: string;
    nombre: string;
}

//La acción puede ser logout o login
type AuthAction = { type: 'logout' } | { type: 'login', payload: LoginPayload }

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        //Limpiar los datos cuando la acción del Auth / AuthAction sea Logout
        case 'logout':
            return {
                validando: false,
                token: null,
                userName: '',
                nombre: ''
            }
            break;
        case 'login':
            return {
                validando: false,
                token: 'ABC123',
                userName: action.payload.username,
                nombre: action.payload.nombre,
            }
            break;
        default:
            return state;
    }
}

export const Login = () => {
    //Reducer es una función compleja, que utiliza y retorna varios parámetros, a diferencia de un useState que es más simple
    //Se pueden referenciar datos de la interfaz
    const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState);

    //Solo se usará este efecto una vez, en este caso tendrá una duración de 1,5 segundos
    useEffect(() => {
        setTimeout(() => {
            dispatch({
                type: 'logout'
            });
        }, 1500);
    }, [])

    //Función de login
    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                nombre: 'Diego',
                username: 'The_Sorr0w'
            }
        });
    }

    //Función de logout
    const logout = () => {
        dispatch({
            type: 'logout'
        });
    }

    if (validando) {
        return (
            <>
                <h3>Login</h3>
                <div className='alert alert-info'>
                    <span>Validando...</span>
                </div>
            </>
        )
    }
    return (
        <>
            <h3>Login</h3>
            {
                (token) ?
                    <div className='alert alert-success'>
                        <span>Autenticado.</span>
                    </div> :
                    <div className='alert alert-danger'>
                        <span>No autenticado.</span>
                    </div>
            }

            {
                (token) ?
                    <button className='btn btn-danger' onClick={logout}>Logout</button> :
                    <button className='btn btn-primary' onClick={login}>Login</button>
            }




        </>
    )
}
