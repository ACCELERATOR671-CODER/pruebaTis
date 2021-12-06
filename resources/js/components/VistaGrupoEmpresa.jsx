import React from 'react'
import { Card } from '../elementos/card';
import { BtmEdit, Titulo } from '../elementos/registro';
import { ContenedorDatos } from '../elementos/registro';
import BotonSolicitarIngreso from './DatosGrupoEmpresa/BotonSolicitarIngreso';
import IconoEditar from './Svg/IconoEditar';
const VistaGrupoEmpresa = () => {

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
                            <BotonSolicitarIngreso />
                        </div>
                    </ContenedorDatos>
                </div>
            </Card>
    )
}

export default VistaGrupoEmpresa;
