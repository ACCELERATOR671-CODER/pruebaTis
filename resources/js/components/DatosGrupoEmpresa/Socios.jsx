import React,{ useState, useEffect } from 'react'
import Socio from './socio'
import { ContenedorItems } from '../../elementos/socios';

const Socios = () => {
    const [socios, setSocios] = useState(null);
    const [lider, setLider] = useState(null);
    useEffect(() => {
        const data = new FormData();
        data.append('nombre' , datos.nombre);
        fetch('api/solicitarSocios', {
            method: 'POST',
            body:data
        }).then((response) => response.json()).then((json) => {
            setSocios(json.socios);
            setLider(json.lider);
        });
    }, [])

    return (
        <div className=' text-center mt-5 mb-5'>
            <h1 className= ' mb-5'>Socios</h1>
                <ContenedorItems>
                    {(socios) && socios.map((dato) => {
                        return (<Socio nombre={dato.nombreC} rol={(dato.idUsuario == lider) ? "Lider":"Socio"} imagen={dato.foto_perfil}/>)
                    })}
                </ContenedorItems>
        </div>
    )
}

export default Socios
