import React, {useState, useEffect, useRef} from 'react';
import 'react-light-accordion/demo/css/index.css';
import { Boton } from '../../elementos/registro';

const FormularioDocumentos = ({usuario}) => {

    const [contenido, setContenido] = useState([]);
    const [cambio, setCambio] = useState(true)
    const Submit = (e) =>{
        e.preventDefault();
            const data = new FormData (document.getElementById('formulario'));
            fetch ('api/registrarDocumento',{
                method:'POST',
                body:data
            })
            .then ((response) => {
                if(response.ok){
                    setCambio(!cambio);
                    alert("Documento registrado con exito")
                } else {
                    alert("Hubo un error con el servidor, intente mas tarde")
                }
            })
    }

    useEffect(() => {
        fetch('api/getDocumentos')
        .then(response => response.json())
        .then((json) => {
            setContenido(json);
        })
    }, [cambio])

    return (<>
    
        { (usuario) && ((usuario.nombreRol == 'Consultor') && 
        (<form onSubmit= { Submit } 
                id='formulario' 
                method='POST' 
                encType="multipart/form-data" >
            <input name = 'nombre' type='text' placeholder='Nombre del archivo' required/>
            <input name = 'archivo' type='file' accept="application/pdf" required/>
            <Boton type='submit' onClick={Submit}>Enviar</Boton>
        </form>))}   
        {contenido.map((data) => 
            (<a href={ `resources/documentos/${data.documento}` } target='blank'>
                {data.nombre} 
            </a>))}
    </>)
}

export default FormularioDocumentos
