import React from 'react'
import { PrimaryCard, ImagenPrimary, ContenedorImagen, ContenedorTexto} from '../../elementos/home'

const CardPrimary = ({dato}) => {
    return (
        <PrimaryCard>
            {(dato.id %2 == 0) ? (
            <>
                <ContenedorImagen>
                    <ImagenPrimary src={ dato.img }/>
                </ContenedorImagen>
                <ContenedorTexto>
                    <h1>{dato.titulo}</h1>
                    <p>{dato.descripcion}</p>
                </ContenedorTexto>
            </>):(
            <>
                <ContenedorTexto>
                    <h1>{dato.titulo}</h1>
                    <p>{dato.descripcion}</p>
                </ContenedorTexto>
                <ContenedorImagen>
                    <ImagenPrimary src={ dato.img }/>
                </ContenedorImagen>
            </>)}
            
        </PrimaryCard>
    )
}

export default CardPrimary
