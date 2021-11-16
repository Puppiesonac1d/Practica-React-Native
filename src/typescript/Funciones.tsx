export const Funciones = () => {

    //Crear la función de sumar
    const sumar = (a: number, b: number): number => {
        return a + b;
    }

    return (
        <>
            <h3>Funciones</h3>
            <span>Resultado de la suma: {sumar(1, 2)}</span>
        </>
    )
}
