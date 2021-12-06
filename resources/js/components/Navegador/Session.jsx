import React,{useEffect, useState} from 'react'
import ItemNavegador from './ItemNavegador'
import { ItemNavI, IconNav, LabelNav, IconNavI, ContenedorNavC } from '../../elementos/navegador'
import { faUserCircle,faChevronDown } from '@fortawesome/free-solid-svg-icons';
import BotonSession from './botonSession';
import { iniciarSession, 
         registrarse, 
         opcionesUsuarioSGE, 
         opcionesUsuarioCGE,
         opcionesUsuarioCGEV,
         opcionesUsuarioA,
         opcionesUsuarioC } from '../../parametros/menus';
import { getNombre } from '../../parametros/session';
const Session = () => {
    
    const [sessionNombre, setSessionNombre] = useState(null);
    const [opcionesUsuario, setOpcionesUsuario] = useState([]);
    useEffect(() => {
        if(sessionStorage.getItem('id')){
            getNombre().then((resp) => {
                setSessionNombre(resp);
            });

            const post = new FormData();
        post.append('id', sessionStorage.getItem('id'));
        fetch('api/elegirNavegador',{
            method:'POST',
            body:post
        })
        .then((response) => response.json())
        .then((json) => {
            if(json.navegador == 'C'){
                setOpcionesUsuario(opcionesUsuarioC);
            }else if(json.navegador == 'A'){
                setOpcionesUsuario(opcionesUsuarioA);
            } else if(json.navegador == 'CGEV'){
                setOpcionesUsuario(opcionesUsuarioCGEV);
            } else if(json.navegador == 'CGE'){
                setOpcionesUsuario(opcionesUsuarioCGE);
            } else {
                setOpcionesUsuario(opcionesUsuarioSGE);
            }
        });
        }
    }, [])


    return (
        <div id='sessionNav' className='collapse navbar-collapse'>
            <ul className="navbar-nav">
            {(!sessionStorage.getItem('token')) ? (<>
                <li className="nav-item">
                    <ItemNavegador className=' nav-item' link={registrarse.link} nombre={registrarse.nombre} />
                </li>
                <li className="nav-item">
                    <ItemNavI className='nav-item ml-4' link={iniciarSession.link} nombre={iniciarSession.nombre} >
                        <a className='text-decoration-none m-3 nav-link' href={iniciarSession.link} >{iniciarSession.nombre}</a>
                    </ItemNavI>
                </li></>)
                    :

                (<li className="nav-item dropdown" >
                    <a className=" d-flex nav-link dropdown-toggle-split text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <IconNavI icon={faChevronDown}/>
                        <div className=' m-auto'>
                            <LabelNav className='mr-2'> { sessionNombre } </LabelNav>
                        </div>
                        <IconNav  icon={faUserCircle}/>
                    </a>
                    <ContenedorNavC className=" dropdown-menu" aria-labelledby="navbarDropdown" >
                        {opcionesUsuario.map((dato) => (<BotonSession className="dropdown-item" action={ dato.onClick } img = {dato.img} name= {dato.name} link={dato.link} contenido={dato.contenido}/>))}
                    </ContenedorNavC>
                </li>)}
            </ul>
        </div>
    )
}

export default Session;
