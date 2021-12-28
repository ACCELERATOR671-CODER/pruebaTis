import React, { useEffect, useState } from 'react';
import { Card } from '../../elementos/card';
import ContenedorDatosGE from './ContenedorDatosGE';

const EspacioRevision = () => {

    const [grupoEmpresas, setGrupoEmpresas] = useState(null);

    useEffect(()=> {
        const data = new FormData();
        data.append('id',sessionStorage.getItem('id'));
        fetch('api/obtenerGrupoEmpresasValidas',{
            method: 'POST',
            body: data
        })
        .then((res) => res.json())
        .then((datos) => {
            setGrupoEmpresas(datos);
        })
    },[]);

    return (
        <Card
            style={{
                padding: '30px',
                margin: '10% auto',
                maxWidth: '810px'
            }}
        >
            <h3>Propuestas de Grupo-Empresas</h3>
            
            {
                (grupoEmpresas)?(
                    grupoEmpresas.length > 0? (grupoEmpresas.map((grupoEmpresa) => (
                        <ContenedorDatosGE gE={grupoEmpresa}/>
                    )))
                    :
                    <h2>No Existen Grupo Empresas Actualmente</h2>
                )
                :
                (
                    <h2>Cargando...</h2>
                )
            }
        </Card>
    );
};

export default EspacioRevision;
