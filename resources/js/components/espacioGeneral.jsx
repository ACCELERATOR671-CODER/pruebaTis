import React, {useState, useEffect, useRef} from 'react';
import { CardEG } from '../elementos/espacioGeneral';
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

    const [datosC, setDatosC] = useState([{
        idEvento:1,
        actividad: "publicacion de invitacion",
        fecha: "10-10-2021",
        recursos: "invitacion publica",
        evaluacion:"grupo Empresa conformadas"
    },{
        idEvento:2,
        actividad: "Entrega Propuestas",
        fecha: "22-10-2021",
        recursos: "presentacion de equipos",
        evaluacion:"Revision de portafolios"
    },{
        idEvento:3,
        actividad: "creacion de espacios de trabajo",
        fecha: "15-10-2021",
        recursos: null,
        evaluacion:"Participacion del equipo en el espacio de asesoramiento"
    }]);
    
    const [usuario,setUsuario] = useState (null)
    const formulario = useRef(null);
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
        },[]) 
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
            const data = new FormData (document.getElementById('anuncioId1'));
            fetch ('api/registrarDescrip',{
                method: 'POST',
                body:data
            })
            .then (()=>{ 
            });        
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
                (<form   
                    ref={formulario}
                    id='formulario'
                    onSubmit={Submit}
                    method='POST'
                    >
                <TextArea id='anuncioId1'></TextArea>

                <div>
                    <Boton id='botonSub' type = 'submit'onClick= { enviarDescripcion } >Enviar</Boton>
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
                            <ItemAcord titulo='Calendario' contenido={ () => {}/*() => <CalendarioEG ges={ datosC }/>*/ }/>
                            
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