import { useEffect, useState, useRef } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';


export const useUsuarios = () => {
    //Colección de todos los usuarios
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    //Crear use state para la compaginación
    const paginaRef = useRef(1);

    //Cargar inicialmente el método de usuariosNext para mostrar la vista por defecto
    useEffect(() => {
        cargarUsuarios();
    }, [])

    const cargarUsuarios = async () => {
        //llamado de API
        const resp = await reqResApi.get<ReqResListado>('/users', {
            //Referencias al valor de el n° de la página actual
            params: {
                //La api usa el parámetro page para saber en que página está, aquí se declara ese valor como el actual, en caso de que se sume o se quite
                page: paginaRef.current
            }
        });

        if (resp.data.data.length > 0) {
            setUsuarios(resp.data.data);
        } else {
            paginaRef.current--;
            alert('No hay mas registros');
        }
    }

    const paginaSiguiente = () => {
        paginaRef.current++;
        cargarUsuarios();
    }

    const paginaAnterior = () => {
        if (paginaRef.current > 1) {
            paginaRef.current--;
            cargarUsuarios();
        }
    }

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior,
    }
}



