import React, {useState, useEffect, useRef} from 'react';
import 'react-light-accordion/demo/css/index.css';
import { TextArea } from '../../elementos/espacioGeneral';
import { Boton } from '../../elementos/registro';

const FormularioDescripcion = ({usuario}) => {

    const [contenido, setContenido] = useState("Descripcion del espacio de asesoramiento");
    const formulario = useRef(null);
    const descripciRef = useRef(null);
    const Submit = (e) =>{
        e.preventDefault();
        const data = new FormData ();
        data.append('idEsp', sessionStorage.getItem('id'));
        data.append('desc',descripciRef.current.value);
        fetch ('api/registrarDescrip',{
            method:'POST',
            body:data
        })
        .then ((response) => {
            if(response.ok){
                alert("Descripcion Registrada")
            } else {
                alert("Hubo un error con el servidor, intente mas tarde")
            }
        })      
    }
    
    const enviarDescripcion = () => {
        

        const valor = document.getElementById('anuncioId1');

        if(valor.value.length<140 && valor.value.length > 0){
            alert("enviado con exito");
            desplegarAnuncio();
        } else {
            alert("error, contenido debe tener un tamaño inferior 140 caracteres y no debe estar vacio");
        }
    }

    return (<>
    
        { (usuario) && ((usuario.nombreRol == 'Consultor') ? 
            (
            <form   
                ref={formulario}
                id='formulario'
                onSubmit={Submit}
                method='POST'
                >
            <TextArea ref = {descripciRef} id='anuncioId1'>{contenido}</TextArea>

            <div>
                <Boton id='botonSub' type = 'submit' >Enviar</Boton>
            </div>
        </form>):(<p>{ contenido }</p>))}    
    </>)
}

export default FormularioDescripcion
