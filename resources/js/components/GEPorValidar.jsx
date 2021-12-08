import React from 'react';
import { useState, useEffect } from 'react';
import { Boton } from '../elementos/registro';


const GEPorValidar = (props) => {

    const [grupo_empresa, setGrupoEmpresa] = useState(null)

    useEffect(() => {
        const dat = new FormData();
        dat.append('id', sessionStorage.getItem('id'));
        fetch('api/obtenerTodasGrupoEmpresas', {
            method: 'POST',
            body: dat
        })
            .then((response) => response.json())
            .then((json) => {
                setGrupoEmpresa(json);
                console.log(json);
            });
    }, [])
    const onClick = () => {
        const dat = new FormData();
        dat.append('id', sessionStorage.getItem('id'));
        fetch('api/validarGrupoEmpresas', {
            method: 'POST',
            body: dat
        })
        .then((response) => {
            if(response.ok){
                alert("Proceso Exitoso, Recuerde que de momento no se esta verificando la validacion de las mismas y se estan tomando como validas todas las grupo empresas");
                location.replace("GEValidas");
            } else {
                alert("hubo un error en el servidor, intentelo mas tarde");
            }
        });
    }

    return (
        <main>

                <div className="row border border-dark bg-light table-responsive mt-5">

                    <table className="table table-bordered table-striped align-middle">
                        <div className="col-12">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre Grupo-Empresa</th>
                                    <th scope="col">Nombre Largo Grupo-Empresa</th>
                                    <th scope="col">Cantidad Usuarios</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">Espacio de Asesoramiento</th>
                                </tr>
                            </thead>
                            <tbody>

                                {(grupo_empresa) ? ((grupo_empresa.length > 0) ? (grupo_empresa.map((empresa) => (
                                    <><tr>
                                        <td>
                                            <div className="col-12 text-left">
                                                {empresa.nombre}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="col-12 text-left">
                                                {empresa.nombreAb}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="col-12 text-left">
                                                {empresa.integrantes}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="col-12 text-left">
                                                {(empresa.valido) ? <>Valido</> : <>No Valido</>}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="col-12 text-left">
                                                {(empresa.valido) ? <>Con espacio</> : <>Sin espacio</>}
                                            </div>
                                        </td>
                                    </tr></>
                                ))) : (<tr><td colSpan="5">No hay grupo Empresas Registradas</td></tr>)) :
                                    (<tr><td colSpan="5">Cargando...</td></tr>)}
                            </tbody>
                        </div>

                        <div className="col-12 d-flex justify-content-center p-1">
                            <Boton type='button' onClick={onClick}>
                                Validar GrupoEmpresas
                            </Boton>
                        </div>
                    </table>


                </div>


        </main>
    )
}
export default GEPorValidar;
