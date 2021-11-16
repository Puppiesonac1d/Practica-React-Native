import { Usuario } from "../interfaces/reqRes"
import { useUsuarios } from '../hooks/useUsuarios';

export const Usuarios = () => {

    const { usuarios, paginaSiguiente, paginaAnterior } = useUsuarios();

    const renderItem = (usuario: Usuario) => {
        return (
            <tr key={usuario.id.toString()}>
                <th>
                    <img src={usuario.avatar.toString()} alt={usuario.first_name.toString()}
                        style={
                            {
                                width: 30,
                                borderRadius: 100
                            }
                        } />
                </th>
                <th>{usuario.first_name.toString() + ' ' + usuario.last_name.toString()}</th>
                <th>{usuario.email.toString()}</th>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(renderItem)
                    }
                </tbody>
            </table>
            <button className='btn btn-primary' onClick={paginaAnterior}>Anteriores</button>
            &nbsp;
            <button className='btn btn-primary' onClick={paginaSiguiente}>Siguientes</button>
        </>
    )
}
