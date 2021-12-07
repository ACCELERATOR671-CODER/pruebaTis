import React from 'react';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { Quitar } from '../../elementos/socios';
import { 
        CajaBotones, 
        CajaImagen, 
        CajaInvitacion, 
        CajaTexto, 
        ImagenLogo } from './estilos/estilosPerfil';

const SolicitudRechazada = ({idInv, nombreGE, logo, eliminar, invitaciones, setInvitaciones}) => {

    const ruta = "../resources/";
    const logoGE = ruta + logo;

    return(
        <CajaInvitacion
            style={{backgroundColor: 'rgba(255,0,0,0.2)'}}
        >
            <CajaImagen>
                <ImagenLogo 
                    src={ logoGE }
                    style={{border: '2px solid red'}}
                />
            </CajaImagen>
            <CajaTexto>
                <h3>{nombreGE}</h3>
                <h4 style={{color: 'red'}}>Rechazado</h4>
            </CajaTexto>
            <CajaBotones>
                <Quitar
                    onClick={() => {eliminar(idInv,invitaciones,setInvitaciones)}} 
                    icon={faMinusCircle} 
                />
            </CajaBotones>
        </CajaInvitacion>
    );
};

export default SolicitudRechazada;