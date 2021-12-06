import React, { useEffect, useRef, useState } from 'react'
import { BotonSolicitud } from '../../elementos/GE';
import { invitar } from '../../parametros/Invitacion';

const BotonSolicitarIngreso = () => {

    const [valido, setValido] = useState('false');
    const [activo, setActivo] = useState('false');
    const [invitacion, setInvitacion] = useState(null);

    useEffect(() => {
        const dataA = new FormData();
        dataA.append('id', sessionStorage.getItem('id'));
        dataA.append('ge', datos.nombre);
        fetch('api/tieneSolicitudes',{
            method:'POST',
            body: dataA
        }).then((response) =>  response.json()).then((json) => {
            if(json.idInvitacion){
                setActivo('true');
                setInvitacion(json);
            }
        })


        const dataF = new FormData();
        dataF.append('id', sessionStorage.getItem('id'));
        dataF.append('ge', datos.nombre);
        fetch('api/puedeVerSolicitudes',{
            method:'POST',
            body:dataF
        }).then((response) => response.json()).then((json) => {
            setValido(json.mensaje);
        })
    }, [])

    const enviarSolicitud = () => {
        if(!invitacion){
            invitar(datos.nombre,sessionStorage.getItem('id'), false).then((response)=>{
                if(response.mensaje){
                    alert(response.mensaje);
                } else {
                    setInvitacion(response);
                    setActivo('true');
                }
            })
        } else {
            const datE = new FormData();
            datE.append('id', invitacion.idInvitacion);
            fetch('api/eliminarInvitacion',{
                method:'POST',
                body: datE
            }).then((response) => {
                if(response.ok){
                    setActivo('false');
                    setInvitacion(null);
                }
            })
        }
    }

    return (
        <>
        {(valido == 'true') && (<><BotonSolicitud 
                                        id='botonInvitacionUser'
                                        valido={ activo } 
                                        className='m-3'
                                        onClick={ enviarSolicitud }>
                        {(activo === 'false') ? "Solicitar Ingreso" : "Eliminar Solicitud"}
                        </BotonSolicitud></>)}
        </>
    )
}

export default BotonSolicitarIngreso
