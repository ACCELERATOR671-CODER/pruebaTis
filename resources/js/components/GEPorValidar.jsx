import React from 'react';
import { useState, useEffect } from 'react';
import { Boton } from './../elementos/registro';


const GEPorValidar = (props) => {

    const [grupo_empresa, setGrupoEmpresa] = useState(null)

    useEffect(() => {
        fetch('api/obtenerTodasGrupoEmpresas', {
            method: 'POST'
        })
            .then((response) => response.json())
            .then((json) => {
                setGrupoEmpresa(json);
                console.log(json);
            });
    }, [])
    const onClick = () => {
        console.log(grupo_empresa);
    }

    return (
        <main>
            <div className="row border border-dark bg-light table-responsive">

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

                            {(grupo_empresa) ? ((grupo_empresa.length > 0) ? (grupo_empresa.map((dato) => (
                                <><tr>
                                    <td>
                                        <div className="col-12 text-left">
                                            {dato.nombre}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="col-12 text-left">
                                            {dato.nombreAb}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="col-12 text-left">
                                            {dato.integrantes}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="col-12 text-left">
                                            valido
                                            {/* {dato.estado} */}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="col-12 text-left">
                                            con espacio
                                            {/* {dato.espacio} */}
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
