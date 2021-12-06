import React,{ useState, useEffect } from 'react'
import Socio from './socio'
import { ContenedorItems } from '../../elementos/socios';

const SociosAdmin = () => {
    const [socios, setSocios] = useState(null);
    const [lider, setLider] = useState(null);

    const quitar = (id, socios, setSocios) => {
        if(confirm("¿Esta usted seguro de expulsar al Socio?")){
            const data = new FormData();
            data.append('id', id);
            fetch('api/expulsarUsuario', {
                method: 'POST',
                body: data
            }).then((response) => {
                if(response.ok){
                    const nuevo = socios.filter((dat) => dat.idUsuario != id);
                    setSocios(nuevo);
                } else {    
                    alert("error, vuelva a intentarlo luego");
                }
            })
        }
    }

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
                        return (<Socio id={dato.idUsuario} 
                                       nombre={ dato.nombreC } 
                                       rol={(dato.idUsuario == lider) ? "Lider":"Socio"} 
                                       imagen={dato.foto_perfil}
                                       coleccion={socios}
                                       setColeccion = {setSocios}
                                       quitar={quitar}
                                       />)
                    })}
                </ContenedorItems>
        </div>
    )
}

export default SociosAdmin
