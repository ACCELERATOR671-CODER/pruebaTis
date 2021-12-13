import React,{ useState, useEffect, useRef } from 'react';
import { PanelAdmin } from '../elementos/admin';
import {Boton} from '../elementos/registro';
import { Tabla, THead, RowPrimary, RowSecundary, GrupoTabla, Tbody } from '../elementos/GE';
import SelectRol from './Admin/SelectRol';
import { Card } from '../elementos/card'
const VentanaAdmin = () => {

    const [usuarios, setUsuarios] = useState(null);
    const [contenido, setContenido] = useState(null);

    const ref = useRef(null);

    useEffect(() => {
        fetch('api/getUsuarios')
        .then((response) => response.json())
        .then((json) => {
            setUsuarios(json);
            setContenido(json);
        })
    }, [])

    const onChangeSearch = () => {
        const us = usuarios.filter((dato) => dato.nombreC.toLowerCase().includes(ref.current.value.toLowerCase()));
        setContenido(us);
    }

    return (
        <main>
            <Card>
                <PanelAdmin>
                    <div className='d-flex justify-content-center'>
                    <h1>Administracion</h1>
                    </div>
                    <div className=' d-flex justify-content-center align-items-center'>
                        <input type='search' placeholder='Busqueda por nombre' ref = { ref }/>
                        <Boton onClick={ onChangeSearch }>Buscar</Boton>
                    </div>
                    <div className='w-100'>
                        <GrupoTabla className='w-100'>
                            <Tabla  className='w-100' cellPadding='10'>
                                <THead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre</th>
                                        <th>Correo</th>
                                        <th>Grupo</th>
                                        <th>Rol</th>
                                    </tr>
                                </THead>
                                <Tbody>
                                {(contenido) ? ((contenido.length>0) ? (contenido.map((data, index) => {
                                    
                                    return (index%2==0) ? 
                                            (<><RowSecundary>
                                                <td width='25' height='10'>{index+1}</td>
                                                <td height='10'><a href={`Socio-${ data.idUsuario }`} >{data.nombreC}</a></td>
                                                <td height='10'>{data.email}</td>
                                                <td width='25' height='10'>{data.idGrupo}</td>
                                                <td height='10'>
                                                    <SelectRol rol = { data.nombreRol} idUsuario = { data.idUsuario }/>
                                                </td>
                                            </RowSecundary></>)
                                            :
                                            (<><RowPrimary>
                                                <td width='25' height='10'>{index+1}</td>
                                                <td height='10'><a href={`Socio-${ data.idUsuario }`} >{data.nombreC}</a></td>
                                                <td height='10'>{data.email}</td>
                                                <td width='25' height='10'>{data.idGrupo}</td>
                                                <td height='10'>
                                                    <SelectRol rol = { data.nombreRol} idUsuario = { data.idUsuario }/>
                                                </td>
                                            </RowPrimary></>)})) : (<tr><td colSpan="5">No hay Usuarios</td></tr>)):
                                            (<tr><td colSpan="5">Cargando...</td></tr>)}
                                </Tbody>
                            </Tabla>
                        </GrupoTabla>
                    </div>
                </PanelAdmin>
            </Card>
        </main>
    )
}

export default VentanaAdmin
