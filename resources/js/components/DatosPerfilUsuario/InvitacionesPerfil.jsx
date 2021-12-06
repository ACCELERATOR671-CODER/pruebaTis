import React, { useState, useEffect } from 'react';
import { Card } from '../../elementos/card';
import { ContenedorInvi } from './estilos/estilosPerfil';
import Invitacion from './Invitacion';

const InvitacionesPerfil = () => {
    const [invitaciones, setInvitaciones] = useState(null);
    const id = sessionStorage.getItem('id');

    useEffect(() => {
        const datoID = new FormData();
        datoID.append('id',id);

        fetch('api/obtenerInvitaciones',{
            method: 'POST',
            body: datoID
        })
        .then((response) => response.json())
        .then((invUsuario) => {
            setInvitaciones(invUsuario);
        })
    }, []);

    const quitar = (idInv, pend, setPend) => {
        const data = new FormData();
        data.append('idInv', idInv);
        fetch('api/rechazarInvitacion', {
            method: 'POST',
             body: data
        }).then((response) => {
            if(response.ok){
                const nuevo = pend.filter((dat) => dat.idInvitacion != idInv);
                if(nuevo.length>0){
                    setPend(nuevo);
                } else {
                    setPend(null);
                }
              } else {    
                alert("error, vuelva a intentarlo luego");
              }
        })
    }

    const aceptar = (idInv, pend, setPend, nombreGE) => {
        const data = new FormData();
        data.append('idInv', idInv);
        fetch('api/aceptarInvitacion', {
            method: 'POST',
             body: data
        }).then((response) => {
            if(response.ok){
                const nuevo = pend.filter((dat) => dat.idInvitacion != idInv);
                sessionStorage.setItem('ge',nombreGE);
                if(nuevo.length>0){
                    setPend(nuevo);
                } else {
                    setPend(null);
                }
            } else {    
                alert("error, vuelva a intentarlo luego");
            }
        })
        location.reload();
    }

    return(
        <Card style={{margin: "100px auto", height: "600px"}}>
            <label style={{fontSize: "35px"}}>INVITACIONES</label>
            <ContenedorInvi>
                {
                    (invitaciones != null && invitaciones.length != 0) ? (invitaciones.map((inv) => (
                        <Invitacion 
                            idInv={ inv.idInvitacion }
                            nombreGE={inv.nombre}
                            logo={inv.logo}
                            descripcion={inv.descripcion}
                            aceptar={ aceptar }
                            rechazar={ quitar }
                            invitaciones={ invitaciones }
                            setInvitaciones={ setInvitaciones }
                        />
                    )))
                    : (<div style={{margin: '34% auto'}}>
                        <p style={{fontSize: '25px'}}>SIN INVITACIONES</p>
                       </div>)
                }
            </ContenedorInvi>   
        </Card>
    );
};

export default InvitacionesPerfil;