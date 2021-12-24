import React from 'react';
import { useState, useEffect } from 'react';


const GEvalida = (props) => {

    const [grupo_empresa, setGrupoEmpresa] = useState(null)

    useEffect(() => {
        const dat = new FormData();
        dat.append('id', sessionStorage.getItem('id'));
        fetch('api/obtenerGrupoEmpresasValidas', {
            method: 'POST',
            body: dat
        })
            .then((response) => response.json())
            .then((json) => {
                setGrupoEmpresa(json);
                console.log(json);
            });
    }, [])

    return (
        <main>
            <div className="row border border-dark bg-light table-responsive mt-5">
                <table className="table table-bordered table-striped align-middle">
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
                                        <a href={'Esp-de-Asesoramiento-' + empresa.nombre}>
                                            {empresa.nombre}
                                        </a>
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
                                        {(empresa.valido) ? <>Con Espacio</> : <>Sin espacio</>}
                                    </div>
                                </td>
                            </tr></>
                        ))) : (<tr><td colSpan="5">No hay grupo Empresas Registradas</td></tr>)) :
                            (<tr><td colSpan="5">Cargando...</td></tr>)}


                    </tbody>
                </table>
            </div>
        </main>
    )
}
export default GEvalida;
