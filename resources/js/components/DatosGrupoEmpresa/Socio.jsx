import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Bloque } from '../../elementos/socios';
import { ImagenPerfil } from '../../elementos/socios';
import { Corona, Quitar, Aceptar } from '../../elementos/socios';
import { faCrown,faMinusCircle,faCheckCircle } from '@fortawesome/free-solid-svg-icons';

//rol -> //Pendiente- Socio - Lider - Rechazado
//duenio -> 
const Socio = ({id, nombre, imagen, rol, aceptar, quitar, coleccion, setColeccion}) => {
    const [colorR, setColorR] = useState((rol == 'Lider' || rol == 'Socio') ? "green" : (rol=='Rechazado') ? "red": "blue");

    return (
        <Bloque>
            <div className=' align-items-center d-flex'>
                <ImagenPerfil src={(imagen) ? "./resources/socios/"+imagen:"./resources/perfilDefecto.png"}/>
            </div>
            <div className=' d-block text-center m-3'>
                <h4 style= {{color : colorR}}> { rol } </h4>
                <p>{ nombre }</p>
            </div>
            <div className=' align-items-center d-flex'>
                {(rol==='Lider') && (<Corona icon={faCrown}/>)}
                {(aceptar) && (<Aceptar onClick={() => {aceptar(id, coleccion)} } icon={faCheckCircle}/>)}
            </div>
            {(quitar && rol!='Lider') && (<div className=' align-items-center d-flex'>
                <Quitar onClick={() => {quitar(id, coleccion, setColeccion)} } icon={faMinusCircle}/>
            </div>)}
        </Bloque>
    )
}

Socio.propTypes = {
    nombre : PropTypes.string,
    imagen : PropTypes.string,
    rol    : PropTypes.string,
    aceptar: PropTypes.func,
    quitar : PropTypes.func
}

export default Socio
