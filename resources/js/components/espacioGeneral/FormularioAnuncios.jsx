import React, {useState, useEffect, useRef} from 'react';
import 'react-light-accordion/demo/css/index.css';
import { TextArea } from '../../elementos/espacioGeneral';
import { Boton } from '../../elementos/registro';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {Borrar} from '../../elementos/espacioGeneral'

const FormularioAnuncios = ({usuario}) => {

    const [contenido, setContenido] = useState([]);
    const [cambio, setCambio] = useState(true)
    const descripciRef = useRef(null);
    const Submit = () =>{
        if(descripciRef.current.value.length > 10){
            const data = new FormData ();
            data.append('anuncio',(descripciRef.current.value) ? descripciRef.current.value:".");
            fetch ('api/registrarAnuncio',{
                method:'POST',
                body:data
            })
            .then ((response) => {
                if(response.ok){
                    setCambio(!cambio);
                    alert("Anuncio registrado con exito")
                    descripciRef.current.value = "";
                } else {
                    alert("Hubo un error con el servidor, intente mas tarde")
                }
            })
        } else {
            alert("el anuncio debe contener un minimo de 10 caracteres");
        }
    }

    useEffect(() => {
        fetch('api/getAnuncios')
        .then(response => response.json())
        .then((json) => {
            setContenido(json);
        })
    }, [cambio])

    return (<>
    
        { (usuario) && ((usuario.nombreRol == 'Consultor') && 
            (<>
        <TextArea ref = {descripciRef} id='anuncioId1'>

        </TextArea>
        <Boton type='button' onClick={Submit}>Enviar</Boton>
        </>))}   
        {contenido.map((data) => {

            const eliminar = () => {
                if(confirm("¿Esta usted seguro de eliminar este Anuncio?")){
                    const data1 = new FormData();
                    data1.append('idAnuncio', data.idAnuncio);
                    fetch('api/borrarAnuncio', {
                        method:'POST',
                        body:data1
                    })
                    .then((response) => {
                        if(!response.ok){
                            alert('Error interno del servidor');
                        } else {
                            setCambio(!cambio);
                        }
                    })
                }
            }

            return (<div className='w-100 d-flex justify-content-center align-items-center'>
                        <div style={{borderStyle:'solid', padding: '10px', width: '100%'}}>
                            {data.anuncio}<br/> {data.fecha_creacion} 
                        </div>
                        { (usuario) && ((usuario.nombreRol == 'Consultor') && <Borrar className=' ml-2' onClick={ eliminar } icon={ faTimes }/>)}
                    </div>)})}
    </>)
}

export default FormularioAnuncios
