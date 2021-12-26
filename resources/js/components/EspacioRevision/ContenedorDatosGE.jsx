import React, { useEffect, useState } from 'react'
import { Boton } from '../../elementos/tabla';
import ElementoAdmin from '../EspacioDeAsesoramiento/ElementoAdmin';
import { ContenedorCarpetasGE, ContenedorGE, ContenedorTituloGE } from './estilosEspacioRevision/estilosEspacioRev';

const ContenedorDatosGE = ({gE}) => {
    
    const [elementos, setElementos] = useState(null);
    const [estaRevisado, setEstaRevisado] = useState(true);

    useEffect(()=>{
        const data = new FormData();
        data.append('idGE',gE.idGE);
        data.append('nombre','Propuestas');
        fetch('api/obtenerCarpetaEspecifica',{
            method: 'POST',
            body: data
        })
        .then((res) => res.json())
        .then((datos) => {
            setElementos(datos);
        })
    },[])

    const revisarArchivos = () => {
        if (elementos != null && elementos.length > 0) {
            if (!elementos[0].revisado) {
                setEstaRevisado(false);
            }
        }
    };

    useEffect(() => {
        revisarArchivos();
    },[elementos]);

    return (
        <ContenedorGE 
            style={
                (!estaRevisado)? (
                    {borderColor: 'red'}
                )
                :
                ({borderColor: 'black'})                
            }>
            <ContenedorTituloGE>
                <h3>{gE.nombre}</h3>
                <Boton style={{margin: '10px auto', width: '80%'}}>Generar Contrato</Boton>
            </ContenedorTituloGE>
            <ContenedorCarpetasGE
                style={
                    (!estaRevisado)? (
                        {borderTopColor: 'red'}
                    )
                    :
                    ({borderTopColor: 'black'}) 
                }
            >
                {
                    (elementos)?(
                        (elementos.length > 0)? (elementos.map((datos) => (
                            <ElementoAdmin 
                                contenido={datos} 
                                nombreGEAlt={gE.nombre} 
                                revConsultor={true}
                            />
                        )))
                        :
                        <h3>Sin Carpetas</h3>
                    )
                    :
                    (
                        <h3>Cargando...</h3>
                    )
                }
            </ContenedorCarpetasGE>
        </ContenedorGE>
    )
}

export default ContenedorDatosGE;