import React from 'react'
import { BotonInvitarSty } from './estilosVistaInscritos/estilosVistaInscritos';

const BotonInvitar = ({usuario, ge, invitar}) => {

    const invitarUsuario = () => {
        invitar(ge, usuario)
        .then((json) => {
            if(json.mensaje){
                alert(json.mensaje)
            } else {
                alert('Se envió una invitacion al usuario con exito')
            }
        })
    }

    return (
        <BotonInvitarSty onClick={ invitarUsuario }>Invitar</BotonInvitarSty>
    )
}

export default BotonInvitar;
