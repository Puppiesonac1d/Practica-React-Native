
export const TiposBasicos = () => {

    //Se declara la variable nombre y también se puede establecer que la variable pueda ser o no de tipo string o número
    let nombre: string | number = 'Diego';
    //Las constantes no pueden variar
    const edad = 24;
    //booleanos
    let estaActivo: boolean = true;
    //arreglo con elementos adentro
    const poderes = ['Depresión', 'Mucho pelo'];
    //arreglo sin elementos, en este caso se le insertará cualquier tipo de variables o valores
    const poderes2 = [];
    poderes2.push('Poder 1');
    poderes2.push('Poder 2');
    poderes2.push(1234);
    
    return (
        <>
            <h3>Tipos básicos</h3>
            {nombre}, {edad}, {(estaActivo) ? 'activo' : 'no activo'},{poderes.join(', ')}
        </>
    )
}
