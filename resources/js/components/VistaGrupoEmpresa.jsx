import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { Card } from '../elementos/card';
import { BtmEdit, Titulo } from '../elementos/registro';
import { ContenedorDatos } from '../elementos/registro';
import { BotonSolicitud } from '../elementos/registro';
import BotonSolicitarIngreso from './DatosGrupoEmpresa/BotonSolicitarIngreso';
import IconoEditar from './Svg/IconoEditar';


const VistaGrupoEmpresa = () => {

    const idUser = sessionStorage.getItem('id');

    const redir = () => {
        location.replace('EditarGE-' + datos.nombre);
    };
    const onClick = () => {
        const dat = new FormData();
        dat.append('id', sessionStorage.getItem('id'));
        fetch('api/validarGrupoEmpresa', {
            method: 'POST',
            body: dat
        })
            .then((response) => {
                if (response.status == 200) {
                    alert("Grupo Empresa Validada");
                    //location.replace("GEValidas");
                    setActivo('false');
                } else {
                    if (response.status == 201) {
                        alert("Grupo empresa marcada como no valida");
                        setActivo('true');
                    } else {
                        if (response.status == 204) {
                            alert("no se pudo validar debido a que el numero de miembros no es el correcto");
                        } else {
                            alert("hubo un error en el servidor, intentelo mas tarde");
                        }

                    }
                }
            });
    };

    const [valido, setValido] = useState('false');
    const [activo, setActivo] = useState('true');

    useEffect(() => {
        const dataA = new FormData();
        dataA.append('id', sessionStorage.getItem('id'));
        dataA.append('ge', datos.nombre);
        fetch('api/puedeValidarGE', {
            method: 'POST',
            body: dataA
        })
            .then((response) => {
                if (response.status == 201) {
                    setValido('true');
                } else {
                    /* setValido('false'); */
                    setValido('true');
                }
            });

        const dataF = new FormData();
        dataF.append('id', sessionStorage.getItem('id'));
        fetch('api/establecerBotonValidar', {
            method: 'POST',
            body: dataF
        })
            .then((response) => {
                if (response.status == 201) {
                    setActivo('true');
                }else{
                    setActivo('false');
                }
            });
    }, [])




    return (
        <Card>
            <div className='formStyle'>
                <Titulo>{datos.nombre} </Titulo>
                {
                    (idUser == datos.duenio) && (
                        <BtmEdit onClick={redir}>
                            <IconoEditar />
                        </BtmEdit>
                    )
                }

                <ContenedorDatos className=' mb-5'>
                    <div className=' d-block text-left'>
                        <label><strong>Nombre Abreviado: </strong>{datos.nombreAb}</label><br />
                        <label><strong>Telefono: </strong>{datos.telefono}</label><br />
                        <label><strong>Direccion: </strong>{datos.direccion}</label><br />
                        <label><strong>Organizacion Juridica: </strong>{datos.orgJur}</label><br />
                        <label><strong>Correo: </strong>{datos.email}</label><br />
                        <label><strong>Descripcion: </strong>{datos.descripcion}</label><br />
                    </div>
                    <div>
                        <img id='imagenGER' src={'resources/' + datos.logo} />
                        <BotonSolicitarIngreso />
                    </div>
                </ContenedorDatos>

                <>
                    {(valido == 'true') && (<><BotonSolicitud  onClick={onClick} valido={ activo } >
                        {(activo == 'true') ? "Validar Grupo Empresa" : "Eliminar Validacion"}
                    </BotonSolicitud ></>)}
                </>

            </div>
        </Card>
    )
}

export default VistaGrupoEmpresa;
