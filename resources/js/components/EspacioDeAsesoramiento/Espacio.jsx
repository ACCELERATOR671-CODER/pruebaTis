import React,{ useState, useEffect, useRef } from 'react'
import Elemento from './Elemento'
import ElementoAdmin from './ElementoAdmin'
import { Backgroundesp, Select } from '../../elementos/espacioAsesoramient'

const Espacio = ({id}) => {

    const [elementos, setElementos] = useState([]);
    const [estado, setEstado] = useState('vista');
    const refEstado = useRef(null)

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

    const cambiarEstado = () => {
        setEstado(refEstado.current.value);
    }

    return (<>
        {(id == sessionStorage.getItem('id')) && (
        <div className=' d-flex justify-content-center p-3 mt-3'>
            <Select ref={ refEstado } onChange={ cambiarEstado }>
                <option>vista</option>
                <option>eliminar</option>
                <option>crear</option>
            </Select>
        </div>)}
        <Backgroundesp>
            {elementos.map((datos) => (id == sessionStorage.getItem('id')) ?
            (<ElementoAdmin contenido = {datos} estado = { estado }/>)
            :
            (<Elemento contenido = {datos}/>))}
        </Backgroundesp>
    </>)
}

export default Espacio
