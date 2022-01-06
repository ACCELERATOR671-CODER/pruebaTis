import React, { useState, useEffect } from 'react';
import { Card } from '../../elementos/card';
import { ContenedorInvi } from './estilos/estilosPerfil';
import Invitacion from './Invitacion';
import SolicitudRechazada from './SolicitudRechazada';

const InvitacionesPerfil = () => {
    const [invitaciones, setInvitaciones] = useState(null);
    const id = sessionStorage.getItem('id');
    const [fechaAct, setFechaAct] = useState(null);
    const [fechaLimite, setFechaLimite] = useState(null);

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

    const convertirDig = (n) => {
      return (n < 10) ? '0'+n : n;
    }

    useEffect(()=>{
      const data = new FormData();
      data.append('tipoOpcion','Actividad');
      data.append('nombreOpcion','Entrega de propuestas');

      fetch('api/obtenerEventoGeneral',{
        method: 'POST',
        body: data,
      })
      .then((res) => res.json())
      .then((datos) => {
        if (datos.idEvento) {
          setFechaLimite(datos.fecha_final);
        }
      });

      const date = new Date();
      const [dia, mes, anio] = [convertirDig(date.getDate()), 
                                convertirDig(date.getMonth()+1),
                                convertirDig(date.getFullYear())];
      
      setFechaAct(`${anio}-${mes}-${dia}`);
    },[])

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
                alert("Ahora ya formas parte de una grupo empresa");
                if(nuevo.length>0){
                    location.replace('/');
                    setPend(nuevo);
                } else {
                    location.replace('/');
                    setPend(null);
                }
            } else {    
                alert("error, vuelva a intentarlo luego");
            }
        })
    }

    const eliminar = (id, pend, setPend) => {
        const data = new FormData();
        data.append('id', id);
        fetch('api/eliminarInvitacion', {
            method: 'POST',
             body: data
        }).then((response) => {
            if(response.ok){
                const nuevo = pend.filter((dat) => dat.idInvitacion != id);
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

    return(
        <Card style={{margin: "100px auto", height: "600px"}}>
            <label style={{fontSize: "35px"}}>INVITACIONES</label>
            <ContenedorInvi>
                {
                    (fechaLimite)&&(fechaAct)&&(fechaAct<=fechaLimite)?
                    (
                        (invitaciones != null && invitaciones.length != 0) ? 
                        (invitaciones.map((inv) => (
                            (inv.invitacion == false && inv.estado == 'Rechazado')?(
                                <SolicitudRechazada
                                    idInv={ inv.idInvitacion }
                                    nombreGE={ inv.nombre }
                                    logo={ inv.logo }
                                    eliminar={ eliminar }
                                    invitaciones={ invitaciones }
                                    setInvitaciones={ setInvitaciones }
                                />
                            ):
                            (
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
                            )
                        )))
                        : (<div style={{margin: '34% auto'}}>
                            <p style={{fontSize: '25px'}}>SIN INVITACIONES</p>
                        </div>)
                    )
                    :
                    (
                        <div style={{margin: '34% auto'}}>
                            <p style={{fontSize: '25px'}}>AUN NO PUEDES VER TUS INVITACIONES</p>
                        </div>
                    )
                }
            </ContenedorInvi>   
        </Card>
    );
};

export default InvitacionesPerfil;