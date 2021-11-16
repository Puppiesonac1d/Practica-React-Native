interface Persona {
    nombreCompleto: string;
    edad: number;
    //Dirección es una interfaz ya que tiene variables anidadas
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    casaNo: string;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Diego',
        edad: 24,
        //Referencia a la interfaz de dirección que está en persona
        direccion: {
            pais: 'Chile',
            casaNo: 'Depto 102, torre A'
        }
    }

    return (
        <>
            <h3>Objetos Literales</h3>
            <hr />
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </>
    )
}
