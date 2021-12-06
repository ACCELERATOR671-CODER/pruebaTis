import React, { useEffect, useRef, useState } from 'react';
import { Card } from '../../elementos/card';
import { Tabla, THead } from '../../elementos/GE';
import { InputStyle } from '../../elementos/registro';
import { TBody, TItem } from '../DatosVistaInscritos/estilosVistaInscritos/estilosVistaInscritos';
import Fecha from '../RegistroGE/Fecha';
import IconoAtras from '../Svg/IconoAtras';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import IconoGuardar from '../Svg/IconoGuardar';
import { ContBtmDerecho, ContBtmIzquierdo, ContCalendar, 
        ContCampos, ContIconos, ContInputs, 
        ContLabelInput, IconPlus } from './estilos/calendarioGE';

const CalendarioGE = () => {
    const [datosGE, setDatosGE] = useState(null);
    const [agEvento, setAgEvento] = useState(false);
    const [eventos, setEventos] = useState([]);
    const descEvt = useRef(null);
    const formulario = useRef(null);

    useEffect(() => {
        const datos = new FormData();
        datos.append('nombreGE', nombreGE);
        datos.append('idUsuario', sessionStorage.getItem('id'));
        fetch('api/obtenerDatosGrupoEmpresa',{
            method: 'POST',
            body: datos
        })
        .then((response)=>response.json())
        .then((data) => {
            setDatosGE(data);
        });
    },[])

    const agregarEvt = () => {
        setAgEvento(true);
    };

    const cancEvt = () => {
        setAgEvento(false);
    };

    const agregarUnEvento = () => {
        const datos = new FormData(document.getElementById('formulario'));
        datos.append('idGE', datosGE.idGE);
        fetch('api/agregarEvento',{
            method: 'POST',
            body: datos
        })
        .then((res) => {
            if (res.ok) {
                alert('Evento agregado al calendario');
                setAgEvento(false);
            } else {
                alert('Ocurrio un error al agregar evento');
            }
        })
    };

    const obtenerEventos = () => {
        if (datosGE != null) {
            const datos = new FormData();
            datos.append('idGE', datosGE.idGE);
            fetch('api/obtenerEventos',{
                method: 'POST',
                body: datos
            })
            .then((response) => response.json())
            .then((data)=>{
                setEventos(data);
            })
        }
    };

    useEffect(() => {
        obtenerEventos();
    }, [datosGE, agEvento])

    return(
        <Card style={{margin: '100px auto',
                      height: 'auto',
                      padding: '20px',
                      minWidth: '0'}}>
            <ContCalendar>
                {
                    (agEvento) && (
                        <form
                            ref={formulario}
                            id='formulario'
                            className='formStyle' 
                            method='POST' 
                            encType="multipart/form-data"
                        >
                            <ContCampos>
                                <h2 style={{marginBottom: '40px'}}>Evento</h2>
                                <ContInputs>
                                    <ContLabelInput>
                                        <h6 className="text-left">Fecha:</h6>
                                        <Fecha name='fecha_inicio'/>
                                    </ContLabelInput>
                                    <ContLabelInput>
                                        <h6 className="text-left">Fecha Limite:</h6>
                                        <Fecha name='fecha_final' />
                                    </ContLabelInput>
                                    <ContLabelInput>
                                        <h6 className="text-left">Descripción del Evento:</h6> 
                                        <InputStyle
                                            name='nombre'
                                            ref={descEvt}
                                            type="text"
                                        />
                                    </ContLabelInput>                      
                                </ContInputs>                 
                                <ContIconos>
                                    <ContBtmDerecho onClick={cancEvt}>
                                        <IconoAtras/>
                                    </ContBtmDerecho>
                                    <ContBtmIzquierdo onClick={agregarUnEvento}>
                                        <IconoGuardar/>
                                    </ContBtmIzquierdo>
                                </ContIconos>
                            </ContCampos>
                        </form>                     
                    )
                }
                
                <div>
                    <h2>Calendario</h2>
                    {
                        (!agEvento) && (
                           <div>
                                <IconPlus onClick={agregarEvt} icon={faPlusCircle}/>
                            </div>  
                        )
                    }
                </div>
                <div style={{maxHeight: '400px',minHeight: '400px', overflow: 'auto'}}>
                    <Tabla style={{width: '100%', height: 'auto'}}>
                    <THead>
                        <tr>
                            <th>Fecha</th>
                            <th>Fecha Limite</th>
                            <th>Evento</th>
                            <th>Editar</th>
                            <th>Quitar</th>
                        </tr>
                    </THead>
                    <TBody>
                    {
                            (eventos != null)? eventos.map((evento) => (
                                <TItem>
                                    <td>{evento.fecha_inicio}</td>
                                    <td>{evento.fecha_final}</td>
                                    <td>{evento.nombre}</td>
                                    <td>Editar</td>
                                    <td>Borrar</td>
                                </TItem>
                            ))
                            :(<></>)
                        } 
                    </TBody>
                </Tabla>
                </div>
                
            </ContCalendar>
        </Card>
    );
}

export default CalendarioGE;