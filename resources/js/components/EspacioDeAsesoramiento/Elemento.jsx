import React,{ useState, useRef, useEffect } from 'react'
import { MarcoIcono, ContenedorElemento, MarcoEliminar } from '../../elementos/espacioAsesoramient'
import { faFolder, 
         faFolderOpen, 
         faPlus, 
         faMinus, 
         faFilePdf, 
         faExternalLinkAlt,
         faTimes as faCross } from '@fortawesome/free-solid-svg-icons';

const Elemento = ({contenido, hijos, setHijos}) => {

    const [contenidoInt, setContenidoInt] = useState(contenido);
    const [hijosInt, setHijosInt] = useState(contenido.hijos);

    const [desplegado, setDesplegado] = useState(false);
    const [desplegadoNE, setDesplegadoNE] = useState(false);

    const refSelect = useRef(null);
    const refNombre = useRef(null);

    const desplegar = () => {
        setDesplegado(!desplegado);
        const desp = document.getElementById('id'+contenido.idElemento);
        desp.classList.toggle("nuevoDebate--ocultar");
    }

    const construirHijo = (dato) => (<Elemento contenido={dato} 
                                               hijos={ hijosInt } 
                                               setHijos={ setHijosInt }/>); 

    return (
        <div className='d-block ml-2 border-left border-dark pl-2'>
            {(contenidoInt.tipo == 'carpeta') && (<>
                    <ContenedorElemento onClick={ desplegar }>
                        <MarcoIcono icon={ (!desplegado) ? faFolder:faFolderOpen }/>
                        <div>{ contenidoInt.nombre }</div>
                        <MarcoIcono icon={ (!desplegado) ? faPlus:faMinus }/>
                    </ContenedorElemento>
                
                <div id={ 'id'+contenidoInt.idElemento } className=' nuevoDebate--ocultar'>
                    {(hijosInt) && (hijosInt.length>0) && 
                    hijosInt.map((datos) => construirHijo(datos))}
                </div>
            </>)}
            {(contenidoInt.tipo == 'link') && (
            <ContenedorElemento>
                <MarcoIcono icon={ faExternalLinkAlt }/>
                 <a href={ contenidoInt.link } target='blank'>{ contenidoInt.nombre }</a>
            </ContenedorElemento>)}
            {(contenidoInt.tipo == 'pdf') && (
            <ContenedorElemento>
                <MarcoIcono icon={ faFilePdf } />
                <div>{ contenidoInt.nombre }</div>
            </ContenedorElemento>)}
        </div>
    )
}

export default Elemento
