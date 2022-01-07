import React,{ useState, useEffect } from 'react'
import { Nav, IconNav } from '../elementos/navegador'
import ItemNavegador from './Navegador/ItemNavegador'
import Logo from './Navegador/Logo'
import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Session from './Navegador/Session'
import { datosNavegador, datosNavegadorA } from '../parametros/menus';
import Notificacion from './Notificacion';
import Bell from './notificacion/Bell';
const Navegador = () => {

    const session = sessionStorage.getItem('id');
    const [nav, setNav] = useState([]); 


    useEffect(() => {
        const form = new FormData();
        form.append('idUsuario', sessionStorage.getItem('id'));
        fetch('api/getFullUser', {
            method:'POST',
            body:form
        })
        .then((response) => response.json())
        .then((json) => {   
            if(json.nombreRol == 'Administrador'){
                setNav(datosNavegadorA);
            } else {
                setNav(datosNavegador);
            }
        })
    }, [])

    return (
        <>
            <Nav className = 'navbar navbar-expand-lg'>
                <Logo link='/'/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sessionNav" aria-controls="sessionNav" aria-expanded="false" aria-label="Toggle navigation">
                    <IconNav icon={faUserCircle} ></IconNav>
                </button>
                {(session != null) && (<>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navegadorResp" aria-controls="navegadorResp" aria-expanded="false" aria-label="Toggle navigation">
                    <IconNav icon={faBars} ></IconNav>
                </button>
                <div id='navegadorResp' className = "collapse navbar-collapse">    
                    <ul className="navbar-nav">      
                        {nav.map((dato) => (<li className="nav-item"><ItemNavegador className='nav-item active' link={dato.link} nombre = {dato.nombre}/></li>))}
                    </ul>
                </div>
                <Notificacion className=' text-lg-right'/> 
                </>)}

                <Session className=' text-lg-right'></Session>   
            </Nav>
        </>
    )
}

export default Navegador;
