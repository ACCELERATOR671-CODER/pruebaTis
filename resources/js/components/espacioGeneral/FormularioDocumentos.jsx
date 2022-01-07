import React, { useState, useEffect, useRef } from 'react';
import 'react-light-accordion/demo/css/index.css';
import { Boton } from '../../elementos/registro';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Borrar } from '../../elementos/espacioGeneral'

const FormularioDocumentos = ({ usuario }) => {

    const [contenido, setContenido] = useState([]);
    const [cambio, setCambio] = useState(true)
    const Submit = (e) => {
        e.preventDefault();
        if (document.getElementById("nombre").value != '') {
            const data = new FormData(document.getElementById('formulario'));
            fetch('api/registrarDocumento', {
                method: 'POST',
                body: data
            })
                .then((response) => {
                    if (response.ok) {
                        setCambio(!cambio);
                        alert("Documento registrado con exito")
                    } else {
                        alert("Hubo un error con el servidor, intente mas tarde")
                    }
                })
        } else {
            alert("debe ingresar un nombre para el documento");
        }
    }

    useEffect(() => {
        fetch('api/getDocumentos')
            .then(response => response.json())
            .then((json) => {
                setContenido(json);
            })
    }, [cambio]);

    return (<>

        {(usuario) && ((usuario.nombreRol == 'Consultor') &&
            (<form onSubmit={Submit}
                id='formulario'
                method='POST'
                encType="multipart/form-data" >

                {contenido.map((data) =>
                (<a href={`resources/documentos/${data.documento}`} target='blank'>
                    {data.nombre}
                </a>))}
                <input id='nombre' name='nombre' type='text' placeholder='Nombre del archivo' required />
                <input name='archivo' type='file' accept="application/pdf" required />
                <Boton type='submit' onClick={Submit}>Enviar</Boton>
            </form>))}


        {contenido.map((data) => {

            const eliminar = () => {
                if (confirm("¿esta usted seguro de eliminar este documento?")) {
                    const data1 = new FormData();
                    data1.append('idDoc', data.idDoc);
                    fetch('api/borrarDocumento', {
                        method: 'POST',
                        body: data1
                    })
                        .then((response) => {
                            if (!response.ok) {
                                alert('Error interno del servidor');
                            } else {
                                setCambio(!cambio);
                            }
                        })
                }
            }

            return (
                <div className=' d-flex justify-content-center align-items-center'>
                    <a href={`resources/documentos/${data.documento}`} target='blank'>
                        {data.nombre}
                    </a>
                    {(usuario) && ((usuario.nombreRol == 'Consultor') && <Borrar className=' ml-2' onClick={eliminar} icon={faTimes} />)}
                </div>)
        })}
    </>)
}

export default FormularioDocumentos
