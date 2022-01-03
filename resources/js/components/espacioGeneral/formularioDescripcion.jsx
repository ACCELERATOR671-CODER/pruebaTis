import React, {useState, useEffect, useRef} from 'react';
import 'react-light-accordion/demo/css/index.css';
import { TextArea } from '../../elementos/espacioGeneral';

const FormularioDescripcion = ({usuario}) => {

    const [contenido, setContenido] = useState("");
    const descripciRef = useRef(null);
    const Submit = () =>{
        const data = new FormData ();
        setContenido(descripciRef.current.value);
        data.append('descripcion',(descripciRef.current.value) ? descripciRef.current.value:".");
        fetch ('api/registrarDescrip',{
            method:'POST',
            body:data
        })
        .then ((response) => {
            if(!response.ok){
                alert("Hubo un error con el servidor, intente mas tarde")
            }
        })
    }

    useEffect(() => {
        fetch('api/getDescripcion')
        .then(response => response.json())
        .then((json) => {
            setContenido(json.descripcion);
        })
    }, [])

    return (<>
    
        { (usuario) && ((usuario.nombreRol == 'Consultor') ? 
            (
        <TextArea ref = {descripciRef} id='anuncioId1' onBlur={ Submit } onkeyup = {(e) => (e.keyCode == 13) &&  Submit() }>
            {contenido}
        </TextArea>
        ):(
        <p>
            { contenido }
        </p>))}    
    </>)
}

export default FormularioDescripcion
