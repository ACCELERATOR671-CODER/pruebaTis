import React,{ useState, useRef, useEffect } from 'react'
import { MarcoIcono, ContenedorElemento, MarcoEliminar } from '../../elementos/espacioAsesoramient'
import { faFolder, 
         faFolderOpen, 
         faPlus, 
         faMinus, 
         faFilePdf, 
         faExternalLinkAlt,
         faTimes as faCross } from '@fortawesome/free-solid-svg-icons';

const ElementoAdmin = ({contenido, hijos, setHijos, estado}) => {

    const [contenidoInt, setContenidoInt] = useState(contenido);
    const [hijosInt, setHijosInt] = useState(contenido.hijos);

    const [desplegado, setDesplegado] = useState(false);
    const [desplegadoNE, setDesplegadoNE] = useState(false);

    const refSelect = useRef(null);
    const refNombre = useRef(null);

    const [valorSelect, setValorSelect] = useState("carpeta");

    const onChangeSelect  = () => {
        setValorSelect(refSelect.current.value);
    }

    const desplegar = () => {
        setDesplegado(!desplegado);
        const desp = document.getElementById('id'+contenido.idElemento);
        desp.classList.toggle("nuevoDebate--ocultar");
    }

    const desplegarNE = () => {
        setDesplegadoNE(!desplegadoNE);
        const desp = document.getElementById('idNT'+contenido.idElemento);
        desp.classList.toggle("nuevoDebate--ocultar");
        refNombre.current.value = "";
    }

    const crearElemento = (e)=>{
        e.preventDefault();
        const post = new FormData(document.getElementById(`formulario${contenidoInt.idElemento}`));
        post.append('idPadre', contenidoInt.idElemento);
        post.append('nombreGE', nombreGE);
        if(refSelect.current.value == 'carpeta'){
            post.append('link', null);
        }
        fetch('api/crearElemento',{
            method:'POST',
            body:post
        })
        .then((response) => response.json())
        .then((json) => {
            if(json.mensaje){
                alert(json.mensaje);
            } else {
                desplegarNE();
                const hijo = {...json, hijos:[]}
                setHijosInt([...hijosInt, hijo]);
            }
        });

    }

    const construirHijo = (dato) => (<ElementoAdmin contenido={dato} 
                                               hijos={ hijosInt } 
                                               setHijos={ setHijosInt }
                                               estado = { estado }/>); 

    const eliminarElemento = () => {
        if(hijosInt.length <= 0){
            if(confirm("¿Está seguro de eliminar el elemento?")){
                const drop = new FormData();
                drop.append('idElemento', contenidoInt.idElemento);
                fetch('api/eliminarElemento',{
                    method:'POST',
                    body:drop
                })
                .then((response) => {
                    if(response.ok){

                        const nuevosHijos = hijos.filter((dato) => dato.idElemento != contenido.idElemento);
                        setHijos(nuevosHijos);
                        alert("Eliminado con exito");
                    } else {
                        alert("Ha ocurrido un error, vuelva a intentarlo mas tarde");
                    }
                })
            }
        } else {
            alert("el elemento no está vacío");
        }
    }

    return (<>
        <div className='d-block ml-2 border-left border-dark pl-2'>
            {(contenidoInt.tipo == 'carpeta') && (<>
                <ContenedorElemento>
                    <ContenedorElemento onClick={ desplegar }>
                        <MarcoIcono icon={ (!desplegado) ? faFolder:faFolderOpen }/>
                        <div>{ contenidoInt.nombre }</div>
                        <MarcoIcono icon={ (!desplegado) ? faPlus:faMinus }/>
                    </ContenedorElemento>
                {(contenidoInt.idPadre) && ((estado == 'eliminar') && (<MarcoEliminar icon={ faCross } onClick={ eliminarElemento }/>))}
                
                </ContenedorElemento>
                <div id={ 'id'+contenidoInt.idElemento } className=' nuevoDebate--ocultar'>
                    {(hijosInt) && (hijosInt.length>0) && 
                    hijosInt.map((datos) => construirHijo(datos))}
                    {(estado == 'crear') && (<><ContenedorElemento onClick={ desplegarNE } >
                        <MarcoIcono icon={ (!desplegadoNE) ? faPlus:faMinus }/>
                        <div className=' text-success'>Crear Nuevo elemento</div>
                    </ContenedorElemento>
                    <div id={ 'idNT'+contenidoInt.idElemento } className='nuevoDebate--ocultar'>
                        <form id={`formulario${contenidoInt.idElemento}`} 
                              method='POST' 
                              encType="multipart/form-data"
                              onSubmit={ crearElemento }  
                              className=' d-flex justify-content-md-start align-items-center'>
                            <select id='tipo' name='tipo' ref={refSelect} onChange={ onChangeSelect }>
                                <option>carpeta</option>
                                <option>link</option>
                                <option>pdf</option>
                            </select>
                            <input id='nombre' ref={ refNombre } name='nombre' placeholder='nombre' type='text' required/>
                            {(valorSelect == 'pdf') && <input id='link' name='link' type='file' accept="application/pdf" required/>}
                            {(valorSelect == 'link') && <input id='link' name='link' placeholder='link' type='url' required/>}
                            <button type='submit' >Crear</button>
                        </form>
                    </div></>)}
                </div>
            </>)}
            {(contenidoInt.tipo == 'link') && (
            <ContenedorElemento>
                <ContenedorElemento>
                    <MarcoIcono icon={ faExternalLinkAlt }/>
                    <a href={ contenidoInt.link } target='blank'>{ contenidoInt.nombre }</a>
                </ContenedorElemento>
                {(estado == 'eliminar') && (<MarcoEliminar icon={ faCross } onClick={ eliminarElemento }/>)}
            </ContenedorElemento>)}
            {(contenidoInt.tipo == 'pdf') && (
            <ContenedorElemento>
                <ContenedorElemento>
                    <MarcoIcono icon={ faFilePdf } />
                    <a href={ `resources/documentos/${contenidoInt.link}` } target='blank'>{ contenidoInt.nombre }</a>
                    <MarcoIcono icon={ faPlus }/>
                </ContenedorElemento>
                {(estado == 'eliminar') && (<MarcoEliminar icon={ faCross } onClick={ eliminarElemento }/>)}
            </ContenedorElemento>)}
        </div>
    </>)
}

export default ElementoAdmin
