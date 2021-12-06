import React from 'react';
import { Aceptar, Quitar } from '../../elementos/socios';
import { CajaBotones, CajaImagen, CajaInvitacion, CajaTexto, ImagenLogo } from './estilos/estilosPerfil';
import { faMinusCircle,faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Invitacion = ({idInv, nombreGE, logo, descripcion, rechazar, aceptar, invitaciones, setInvitaciones}) => {

    const ruta = "../resources/";
    const logoGE = ruta + logo;

    return(
        <CajaInvitacion>
            <CajaImagen>
                <ImagenLogo src={ logoGE }/>
            </CajaImagen>
            <CajaTexto>
                <h3>{nombreGE}</h3>
                <p>{descripcion}</p>
            </CajaTexto>
            <CajaBotones>
                <Aceptar 
                    onClick={() => {aceptar(idInv,invitaciones,setInvitaciones,nombreGE)}} 
                    icon={faCheckCircle} />
                <Quitar
                    onClick={() => {rechazar(idInv,invitaciones,setInvitaciones)}} 
                    icon={faMinusCircle} />
            </CajaBotones>
        </CajaInvitacion>
    );
};

export default Invitacion;