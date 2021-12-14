import React,{ useState, useEffect, useRef } from 'react'
import Elemento from './Elemento'
import ElementoAdmin from './ElementoAdmin'
import { Backgroundesp, Select } from '../../elementos/espacioAsesoramient'

const Espacio = ({id}) => {

    const [elementos, setElementos] = useState([]);

    useEffect(() => {
        const post = new FormData();
        post.append('nombreGE', nombreGE);
        fetch('api/obtenerCarpetasBasicas',{
            method:'POSt',
            body:post
        })
        .then((response) => response.json())
        .then((json) => {setElementos(json)})
    }, [])


    return (<>
        <Backgroundesp>
            {elementos.map((datos) => (id == sessionStorage.getItem('id')) ?
            (<ElementoAdmin contenido = {datos}/>)
            :
            (<Elemento contenido = {datos}/>))}
        </Backgroundesp>
    </>)
}

export default Espacio
