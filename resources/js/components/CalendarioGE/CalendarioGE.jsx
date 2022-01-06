import React, { useEffect, useRef, useState } from 'react';
import { Card } from '../../elementos/card';
import { Tabla, THead } from '../../elementos/GE';
import { Icon, InputStyle, Boton } from '../../elementos/registro';
import { TBody, TItem } from '../DatosVistaInscritos/estilosVistaInscritos/estilosVistaInscritos';
import Fecha from '../RegistroGE/Fecha';
import IconoAtras from '../Svg/IconoAtras';
import { faEdit, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import IconoGuardar from '../Svg/IconoGuardar';
import { ContBtmDerecho, ContBtmIzquierdo, ContCalendar, 
        ContCampos, ContIconos, ContInputs, 
        ContLabelInput, IconPlus } from './estilos/calendarioGE';


const CalendarioGE = () => {
    const [datosGE, setDatosGE] = useState(null);
    const [agEvento, setAgEvento] = useState(false);
    const [edEvento, setEdEvento] = useState(false);
    const [actualizar, setActualizar] = useState(false);
    const [eventos, setEventos] = useState([]);
    const [idEventoEdit, setIdEventoEdit] = useState(null);
    const formulario = useRef(null);

    const [nombreEvt, setNombreEvt] = useState('');
    const [fechaIniEvt, setFechaIniEvt] = useState(null);
    const [fechaFinEvt, setFechaFinEvt] = useState(null);
    const [cmpValido, setCmpValido] = useState(false);

    const [fechaAct, setFechaAct] = useState('');

    const [fechaLimite, setFechaLimite] = useState(null);

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

    useEffect(() => {
        const data = new FormData();
        data.append('nombreOpcion','Entrega de propuestas');
        data.append('tipoOpcion','Actividad');
        fetch('api/obtenerEventoGeneral',{
            method: 'POST',
            body: data
        })
        .then(res => res.json())
        .then((datos) => {
            if (datos.idEvento) {
                setFechaLimite(datos.fecha_final);
            }
        });
    },[]);

    const convertirDig = (n) => {
        return (n < 10) ? '0'+n : n;
    }

    const fechaIgual = (fecha) => {
        let igual = false;
        if (fecha == fechaAct) {
            igual = true;
        }

        return igual;
    };

    useEffect(() => {
        const date = new Date();
        const [dia, mes, anio] = [convertirDig(date.getDate()), 
                                  convertirDig(date.getMonth()+1),
                                  convertirDig(date.getFullYear())];
        
        setFechaAct(`${anio}-${mes}-${dia}`);
    },[])

    const agregarEvt = () => {
        setAgEvento(true);
        setEdEvento(false);
    };

    const cancEvt = () => {
        setAgEvento(false);
        setEdEvento(false);
        setNombreEvt('');
        setFechaIniEvt(null);
        setFechaFinEvt(null);
    };

    const agregarUnEvento = (e) => {
        e.preventDefault();
        validarEvento();
        if (cmpValido) {
            setNombreEvt(nombreEvt.trim().replace(/\s\s+/g, ' '));
            document.getElementById('evt-desc').value = nombreEvt.trim().replace(/\s\s+/g, ' ');
            const datos = new FormData(document.getElementById('formulario'));
            datos.append('idGE', datosGE.idGE);
            fetch('api/agregarEvento',{
                method: 'POST',
                body: datos
            })
            .then((res) => {
                if (res.status === 200) {
                    alert('Evento agregado al calendario');
                    setAgEvento(false);
                    setNombreEvt('');
                    setFechaIniEvt(null);
                    setFechaFinEvt(null);
                    setCmpValido(false);
                } else if (res.status === 201) {
                    alert('La fecha limite debe ser mayor o igual a la fecha de inicio');
                }
                 else {
                    alert('Ocurrio un error al agregar evento');
                }
            })
        }
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
    
    const editarEvento = (e) => {
        e.preventDefault();
        validarEvento();
        if (cmpValido) {
            setNombreEvt(nombreEvt.trim().replace(/\s\s+/g, ' '));
            document.getElementById('evt-desc').value = nombreEvt.trim().replace(/\s\s+/g, ' ');
            const datos = new FormData(document.getElementById('formulario'));
            datos.append('idEvento', idEventoEdit);
            fetch('api/editarEvento',{
                method: 'POST',
                body: datos
            })
            .then((res) => {
                if (res.ok) {
                    alert('Evento Editado Correctamente');
                    setEdEvento(false);
                    setIdEventoEdit(null);
                    setAgEvento(false);
                    setNombreEvt('');
                    setFechaIniEvt(null);
                    setFechaFinEvt(null);
                    setCmpValido(false);
                } else {
                    alert('No se pudo actualizar el evento');
                }
            })
        }
    };

    const activarEdicion = (evento) => {
        setIdEventoEdit(evento.idEvento),
        setEdEvento(true),
        setAgEvento(false),
        setNombreEvt(evento.nombre);
        setFechaIniEvt(evento.fecha_inicio);
        setFechaFinEvt(evento.fecha_final);
    };

    const quitarEvento = (idEvento) => {
        cancEvt();
        const conf = confirm("Se quitará el evento del calendario");
        if (conf) {
            const datos = new FormData();
            datos.append('idEvento', idEvento);
            fetch('api/quitarEvento',{
                method: 'POST',
                body: datos
            })
            .then((res) => {
                if (res.ok) {
                    
                } else {
                    alert('No se pudo quitar el evento del calendario');
                }
            })
        }
    };

    const validarEvento = () => {
        const cmpDesc = document.getElementById('evt-desc')
        if (cmpDesc.value.length === 0) {
            cmpDesc.setCustomValidity("Debe llenar este campo");
            cmpDesc.reportValidity();
            setCmpValido(false);
        } else {
            cmpDesc.setCustomValidity("");
            setCmpValido(true);
        }
    };

    useEffect(() => {
        obtenerEventos();
    }, [datosGE, agEvento, edEvento, actualizar])
    const [item_back] = useState("./resources/back.png");
    const [item_save] = useState("./resources/save.png");
    return(
        <Card 
            style={{
                margin: '100px auto',
                height: 'auto',
                padding: '20px',
                minWidth: '0'
            }}
        >
            <ContCalendar>
                {
                    (agEvento || edEvento) && (
                        <form
                            onSubmit={agEvento? agregarUnEvento: editarEvento}
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
                                        <Fecha 
                                            name='fecha_inicio'
                                            max=''
                                            cargarFecha={fechaIniEvt}
                                        />
                                    </ContLabelInput>
                                    <ContLabelInput>
                                        <h6 className="text-left">Fecha Limite:</h6>
                                        <Fecha 
                                            name='fecha_final'
                                            max=''
                                            cargarFecha={fechaFinEvt}    
                                        />
                                    </ContLabelInput>
                                    <ContLabelInput>
                                        <h6 className="text-left">Descripción del Evento:</h6> 
                                        <InputStyle
                                            id='evt-desc'
                                            name='nombre'
                                            type="text"
                                            value={ nombreEvt }
                                            onChange={e => {setNombreEvt(e.target.value),validarEvento()}}
                                            maxLength='30'
                                            onBlur={validarEvento}
                                        />                    
                                    </ContLabelInput>
                                </ContInputs>                 
                                
                                    <div className=' d-flex justify-content-between'>
                                        <Boton id='botonCan' type='button' onClick={cancEvt}>
                                            <img src={item_back} alt="" />
                                        </Boton>
                                        <Boton id='botonSub' type= 'submit'>
                                            <img src={item_save} alt="" />
                                        </Boton>
                                    </div>
                                
                            </ContCampos>
                        </form>                     
                    )
                }
                
                <div>
                    <h2>Calendario</h2>
                    {
                        (datosGE && datosGE.duenio == sessionStorage.getItem('id') 
                        && !agEvento && !edEvento && fechaLimite && fechaAct <= fechaLimite) && (
                           <div>
                                <IconPlus 
                                    onClick={agregarEvt} 
                                    icon={faPlusCircle}    
                                />
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
                        ((eventos != null) && (eventos.length > 0))? eventos.map((evento) => (
                            <TItem 
                                style={(fechaIgual(evento.fecha_final)?
                                     ({
                                        border: '3px solid #6aff00',
                                        color: 'red',
                                        fontWeight: 'bold'
                                     })
                                     : 
                                     ({height: '55px'})
                                )}>
                                <td>{evento.fecha_inicio}</td>
                                <td>{evento.fecha_final}</td>
                                <td style={{maxWidth: '120px'}}>{evento.nombre}</td>
                                <td>
                                    {
                                        (datosGE && datosGE.duenio == sessionStorage.getItem('id')
                                        && fechaLimite && fechaAct <= fechaLimite)? (
                                            <Icon
                                                style={{fontSize: '30px',
                                                        cursor: 'pointer',
                                                        color: 'midnightblue'
                                                }} 
                                                icon={faEdit}
                                                onClick={ () =>  {
                                                    activarEdicion(evento);
                                                }}
                                            />
                                        )
                                        :
                                        (<p>*******</p>)
                                    }
                                </td>
                                <td>
                                    {
                                    (datosGE && datosGE.duenio == sessionStorage.getItem('id')
                                    && fechaLimite && fechaAct <= fechaLimite)? (
                                        <Icon 
                                            style={{fontSize: '30px',
                                                    cursor: 'pointer'}} 
                                            icon={faMinusCircle}
                                            onClick={ () =>  {
                                                quitarEvento(evento.idEvento),
                                                setActualizar(!actualizar);
                                            }}
                                        />                                    
                                        )
                                        :
                                        (<p>*******</p>)
                                    }
                                </td>
                            </TItem>
                        ))
                        :
                        (<></>)
                    } 
                    </TBody>
                </Tabla>

                {
                    ((eventos) && (eventos.length <= 0)) && (<h2 style={{margin:'20% auto'}}>SIN EVENTOS</h2>)
                }

                </div>
                
            </ContCalendar>
        </Card>
    );
}

export default CalendarioGE;