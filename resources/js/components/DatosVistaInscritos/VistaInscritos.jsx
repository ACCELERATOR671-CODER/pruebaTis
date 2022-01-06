import React, { useEffect, useState } from 'react';
import { Card } from '../../elementos/card';
import { Tabla, THead } from '../../elementos/GE';
import { invitar } from '../../parametros/Invitacion';
import BotonInvitar from './BotonInvitar';
import { ContTabla, ContTabla2, TBody, TItem } from './estilosVistaInscritos/estilosVistaInscritos';

const VistaInscritos = () => {

    const [usuarios, setUsuarios] = useState([]);
    const grupoEmp = sessionStorage.getItem('ge');
    const [duenioEmp, setDuenioEmp] = useState(false);
    const [fechaAct, setFechaAct] = useState(null);
    const [fechaLimite, setFechaLimite] = useState(null);

    useEffect(() => {
        const idUser = sessionStorage.getItem('id');
        const datoID = new FormData();
        datoID.append('idUsuario',idUser);
        fetch('api/getUsuariosMismoGrupo',{
            method: 'POST',
            body: datoID
        })
        .then((response) => response.json())
        .then((datosUsuarios) => {
           setUsuarios(datosUsuarios);
           const infoUsuario = datosUsuarios.filter(dato => dato.idUsuario == idUser);
           const lider = infoUsuario[0].idUsuario == infoUsuario[0].duenio;
           setDuenioEmp(lider);
        })
    }, [])

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

    return(
      <Card style={{margin: '100px auto', height: '500px'}}>
        <ContTabla>
            <div style={{margin: 'auto'}}>
                <h1>Usuarios en tu mismo grupo</h1>
            </div>
            
            <ContTabla2>
                <Tabla style={{width: '100%', height: 'auto'}}>
                    <THead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Grupo Empresa</th>
                            <th>Invitar</th>
                        </tr>
                    </THead>
                    <TBody>
                        {
                            (usuarios.length > 0) ? usuarios.map((usuario) => (
                                <TItem>
                                    <td>{usuario.idUsuario}</td>
                                    <td>{usuario.nombreC}</td>
                                    {
                                        (usuario.nombre != null)?
                                            (<td>{usuario.nombre}</td>)
                                        : (<td>Sin Grupo Empresa</td>)
                                    }
                                    {
                                        (grupoEmp != null && grupoEmp != '' 
                                        && duenioEmp == true && usuario.nombre == null
                                        && usuario.idUsuario != sessionStorage.getItem('id')
                                        && fechaLimite && fechaAct && fechaAct <= fechaLimite)? (
                                            <td style={{padding: '10px'}}>
                                                <BotonInvitar 
                                                    usuario={ usuario.idUsuario }
                                                    ge={ grupoEmp }
                                                    invitar={ invitar }
                                                />
                                            </td>
                                        ):(<td>------</td>)
                                    }
                                </TItem>
                            ))
                            :(
                            <TItem>
                                <td colSpan='4'><h3>No existen usuarios actualmente</h3></td>
                            </TItem>)
                        } 
                    </TBody>
                </Tabla>
            </ContTabla2>
        </ContTabla>   
      </Card>  
    );
};

export default VistaInscritos;