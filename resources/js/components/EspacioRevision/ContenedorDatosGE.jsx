import React, { useEffect, useState } from 'react'
import { Boton } from '../../elementos/tabla';
import ElementoAdmin from '../EspacioDeAsesoramiento/ElementoAdmin';
import { ContenedorCarpetasGE, ContenedorGE, ContenedorTituloGE } from './estilosEspacioRevision/estilosEspacioRev';

const ContenedorDatosGE = ({gE}) => {
    
    const [elementos, setElementos] = useState(null);
    const [estaRevisado, setEstaRevisado] = useState(true);
    const [lista, setLista] = useState([]);

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

    const revisarArchivos = (elemento) => {
        if (elemento != null) {
            if (elemento.tipo != 'carpeta') {
                if (!elemento.revisado) {
                    return false;
                } else {
                    return true;
                }
            } else {
                if (elemento.hijos.length > 0) {
                    let revisados = [];
                    elemento.hijos.forEach(hijo => {
                        revisados.push(revisarArchivos(hijo))
                    });
    
                    if (revisados.includes(false)) {
                        elemento.revisado = false;
                    } else {
                        elemento.revisado = true;
                    }
                }

                return elemento.revisado;
            }
        } else {
            return true;
        }
    };

    useEffect(() => {
        if (elementos && elementos.length > 0) {
            setEstaRevisado(revisarArchivos(elementos[0]));
        }
    },[elementos]);

    const cambiarEstadoArchivos = () => {
        const data = new FormData();
        data.append('listaElementos',lista);
        fetch('api/cambiarRevisados',{
            method: 'POST',
            body: data
        });
    };

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
                                revisar={revisarArchivos}
                                padre={datos}
                                setPadre={setEstaRevisado}
                                principal={datos}
                                setPrincipal={setEstaRevisado}
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