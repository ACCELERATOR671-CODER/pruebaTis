import React from 'react'
import { ItemNav } from '../../elementos/navegador';

const ItemNavegador = ({link, nombre}) => {
    return (
            <ItemNav>
                <a className='text-decoration-none nav-link m-3' href={link} >{nombre}</a>
            </ItemNav>
    )
}

export default ItemNavegador;
