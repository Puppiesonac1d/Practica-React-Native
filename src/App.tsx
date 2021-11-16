import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
import { TiposBasicos } from "./typescript/TiposBasicos";
import { Funciones } from './typescript/Funciones';
import { Contador } from './components/Contador';
import { ContadorConHook } from "./components/ContadorConHook";
import { Login } from './components/Login';
import { Usuarios } from './components/Usuarios';
import { Formularios } from "./components/Formularios";

const App = () => {
    return (
        <div className='container' style={{ padding: 50 }}>
            <h1>Introducción a TS-React</h1>
            <hr />
            <TiposBasicos />
            <hr />
            <ObjetosLiterales />
            <hr />
            <Funciones />
            <hr />
            <Contador />
            <hr />
            <ContadorConHook />
            <hr />
            <Login />
            <hr />
            <Usuarios />
            <hr />
            <Formularios />
        </div >
    )
}
export default App;
