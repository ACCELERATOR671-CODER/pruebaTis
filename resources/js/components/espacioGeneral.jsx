import React, {useState, useEffect, useRef} from 'react';
import { CardEG, DescArea } from '../elementos/espacioGeneral';
import {InputStyle } from '../elementos/registro';
import Chevron from './Acordeon/chevron.svg'
import {Accordion, AccordionItem} from 'react-light-accordion'
import 'react-light-accordion/demo/css/index.css';
import { Acordeon, MarcoIcono, Panel, TextArea } from '../elementos/espacioGeneral';
import {faPlus, 
        faMinus } from '@fortawesome/free-solid-svg-icons';
import { Boton } from '../elementos/registro';
import ItemAcord from './Acordeon/ItemAcord';
import CalendarioEG from './CalendarioEG/CalendarioEG';




          

const EspacioGeneral = () => {

    const [datosC, setDatosC] = useState(null);
    const [cambio, setCambio] = useState(false);
    const [usuario,setUsuario] = useState (null)
    const formulario = useRef(null);
    const descripciRef = useRef(null);
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

    const contenidoDescripcion = () => {
        const Submit = () =>{
            const data = new FormData ();
            data.append('idEsp', sessionStorage.getItem('id'));
            data.append('desc',descripciRef.current.value);
            fetch ('api/registrarDescrip',{
                method: 'POST',
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
                <TextArea ref = {descripciRef} id='anuncioId1'></TextArea>

                <div>
                    <Boton id='botonSub' type = 'submit' >Enviar</Boton>
                </div>
            </form>):(<p>DESCRIPCION</p>))}    
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
                            <ItemAcord titulo='Descripcion' contenido={ contenidoDescripcion } />
                            <ItemAcord titulo='Anuncios' contenido={ contenidoAnuncio }/>
                            <ItemAcord titulo='Documentacion' contenido={ contenidoDocumentacion }/> 
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