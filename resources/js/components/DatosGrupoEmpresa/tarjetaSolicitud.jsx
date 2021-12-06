import React from 'react'
import { TarjetaSolcitudStyle } from '../../elementos/Solicitudes'
import { Boton } from '../../elementos/registro'
import { ImagenPerfilS } from '../../elementos/Solicitudes'
import { ContenedorButtonS } from '../../elementos/Solicitudes'

const TarjetaSolicitud = ({nombre, imagen, idInvitacion, solicitudes, setSolicitudes}) => {

    const filtrar = ()=>{
        const filtrados = solicitudes.filter((datos) => datos.idInvitacion != idInvitacion);
        setSolicitudes(filtrados);
    }

    const aceptar = () => {
        const dat = new FormData();
        dat.append('idInv', idInvitacion);
        fetch('api/aceptarInvitacion',{
            method:'POST',
            body:dat
        }).then((response) => {
            if(response.ok){
                filtrar();
            }
        })
    }

    const rechazar = () => {
        const dat = new FormData();
        dat.append('idInv', idInvitacion);
        fetch('api/rechazarInvitacion',{
            method:'POST',
            body:dat
        }).then((response) => {
            if(response.ok){
                filtrar();
            }
        })
    }

    return (
        <TarjetaSolcitudStyle>
            <ImagenPerfilS src={ (imagen) ? "./resources/socios/"+imagen:"./resources/PerfilDefecto.png" }/>
            <label>{ nombre }</label>
            <ContenedorButtonS>
                <Boton className=' bg-success'
                        onClick= { aceptar }>Admitir</Boton>
                <Boton className=' bg-danger'
                        onClick= { rechazar }>Rechazar</Boton>
            </ContenedorButtonS>
        </TarjetaSolcitudStyle>
    )
}

export default TarjetaSolicitud
