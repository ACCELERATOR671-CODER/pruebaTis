import React, {useState, useEffect, useRef} from 'react';
import { CardEG,  } from '../elementos/espacioGeneral';
import {Accordion} from 'react-light-accordion'
import 'react-light-accordion/demo/css/index.css';
import { TextArea } from '../elementos/espacioGeneral';
import { Boton } from '../elementos/registro';
import ItemAcord from './Acordeon/ItemAcord';
import CalendarioEG from './CalendarioEG/CalendarioEG';
import FormularioDescripcion from './espacioGeneral/formularioDescripcion';
import FormularioAnuncios from './espacioGeneral/FormularioAnuncios';
import FormularioDocumentos from './espacioGeneral/FormularioDocumentos';

          

const EspacioGeneral = () => {

    const [datosC, setDatosC] = useState(null);
    const [cambio, setCambio] = useState(false);
    const [usuario,setUsuario] = useState (null);
    useEffect(()=>{
            const form = new FormData();
            form.append('idUsuario', sessionStorage.getItem('id'));
            fetch('api/getFullUser', {
                method: 'POST',
                body: form
            })
            .then((response)=> response.json())
            .then((json) => {
                setUsuario(json);
            })

            fetch('api/obtenerCalendarioGeneral')
            .then((response) => response.json())
            .then((json) => {
                setDatosC(json);
            })
        },[cambio]) 
    const contenidoAnuncio=() => {
        return (<>
            {
                (usuario) && ((usuario.nombreRol == 'Consultor')?(
                    <div>
                        <TextArea></TextArea>
                        <div>
                            <Boton>Enviar</Boton>
                        </div>
                    </div>
                ):(<p>AQUI ESTAN LOS ANUNCIOS</p>))                         
                }
            </>)
    }

    const contenidoDocumentacion = () => {
        return (<>
        {
            (usuario) && ((usuario.nombreRol == 'Consultor') ?
            (<input type='file'/>):
            (<p>AQUI ESTAN LOS DOCUMENTOS PARA DESCARGAR</p>))
        }
        
        </>)
    }
    
    return(
        <main>
            <CardEG>
                    <div id="cont-label-logo">
                        <label id="label-login-logo">ESPACIO GENERAL</label>
                    </div>
                    <div className='p-3'>
                        <Accordion atomic = {true}>
                            <ItemAcord titulo='Descripcion' contenido={ () => <FormularioDescripcion usuario = {usuario}/> } />
                            <ItemAcord titulo='Anuncios' contenido={ () => <FormularioAnuncios usuario = {usuario}/> } />
                            <ItemAcord titulo='Documentacion' contenido={ () => <FormularioDocumentos usuario = {usuario}/> } /> 
                            <ItemAcord titulo='Calendario' contenido={ () => <CalendarioEG user = { usuario } cambio = { cambio } setCambio = { setCambio } ges={ datosC }/> }/>
                            
                        </Accordion>
                    </div>
                    <div padding-top = '200px'>
                    <a href="/ForoDudas">Seccion de Dudas</a>
                    </div>
            </CardEG>
        </main>
    );

    

};

export default EspacioGeneral;