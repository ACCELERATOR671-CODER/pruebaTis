import { data } from 'jquery';
import { create, toInteger } from 'lodash';
import React, { useRef, useEffect, useState } from 'react';
import { Boton, InputStyle } from '../elementos/registro';
import { iniciarSession } from '../parametros/menus';
import { createSession } from '../parametros/session';

const Login = () => {       
    const refUser = useRef(null);
    const refPass = useRef(null);
    const [datos, setDatos] = useState(null);

    useEffect(() => {
        fetch('/api/usuarios',{
            method: 'POST',
            body: datos,
        })
        .then((response) => response.json())
        .then(data => setDatos(data));
    }, []);
    
    const obtenerID = () => {
        let idUsuario = "-1";
        for (let i = 0; i < datos.length; i++) {
            let usuario = datos[i];
            if (usuario.nombreUsuario == refUser.current.value) {
                if (usuario.contrasenia == refPass.current.value) {
                    idUsuario = usuario.idUsuario;
                }
            }
        }
        return idUsuario;
    };

    const logo = './resources/LOGO.png';
    const iniciarSession = (e) => {
        e.preventDefault();
        const id = obtenerID();
        if (id !== "-1") {
            createSession(id);
            location.replace('/');
        } else {
            alert("Usuario o contrasenia erronea");
        }
    };
    return(
        <main id="main-login">
            <div id="contenedor-login">
                <div id='tarjeta-datos'>
                    <form onSubmit={iniciarSession}>
                        <div id="cont-label-logo">
                            <label id="label-login-logo">BIENVENIDO</label>
                        </div>
                        
                        <div id="cont-logo">
                            <img src={ logo } width='100%'/>
                        </div>

                        <div id="cont-datos-login">
                            <InputStyle ref = {refUser} className="input-login" name='user' type="text" placeholder="Nombre de Usuario" />

                            <InputStyle ref = {refPass} className="input-login" name='password' type="password" placeholder="Contraseña" />
                            
                            <Boton id="boton-login" type="submit">Iniciar Sesión</Boton>

                            <div id="cont-label-login">
                            <label id="label-login">¿AÚN NO TIENES CUENTA?</label> 
                            </div>

                            <div className="link-login">
                                <a href="/RegistroDeUsuario">Registrarse</a>
                            </div>
                        </div>     
                    </form>  
                </div>  
            </div>  
        </main>
    );

};

export default Login;