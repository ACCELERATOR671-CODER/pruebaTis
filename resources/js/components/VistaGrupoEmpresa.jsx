import React, { useEffect, useState } from 'react'
import { Card } from '../elementos/card';
import { BtmEdit, Titulo } from '../elementos/registro';
import { ContenedorDatos } from '../elementos/registro';
import BotonSolicitarIngreso from './DatosGrupoEmpresa/BotonSolicitarIngreso';
import IconoEditar from './Svg/IconoEditar';
const VistaGrupoEmpresa = () => {

    const [fechaAct, setFechaAct] = useState(null);
    const [fechaLimite, setFechaLimite] = useState(null);

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

    const idUser = sessionStorage.getItem('id');

    const redir = () => {
        location.replace('EditarGE-'+datos.nombre);
    };

    return (
            <Card>
                <div className='formStyle'>
                    <Titulo>{datos.nombre} </Titulo>
                    {
                        (idUser == datos.duenio) && (
                           <BtmEdit onClick={redir}>
                                <IconoEditar/>
                           </BtmEdit>
                        )
                    }
                    
                    <ContenedorDatos className=' mb-5'>
                        <div className=' d-block text-left'>
                            <label><strong>Nombre Abreviado: </strong>{datos.nombreAb}</label><br/>
                            <label><strong>Telefono: </strong>{datos.telefono}</label><br/>
                            <label><strong>Direccion: </strong>{datos.direccion}</label><br/>
                            <label><strong>Organizacion Juridica: </strong>{datos.orgJur}</label><br/>
                            <label><strong>Correo: </strong>{datos.email}</label><br/>
                            <label><strong>Descripcion: </strong>{datos.descripcion}</label><br/> 
                        </div>
                        <div>
                            <img id='imagenGER' src = {'resources/'+datos.logo}/>
                            {
                                (fechaLimite) && (fechaAct) && (fechaAct <= fechaLimite) &&
                                (<BotonSolicitarIngreso />)
                            }
                        </div>
                    </ContenedorDatos>
                </div>
            </Card>
    )
}

export default VistaGrupoEmpresa;
