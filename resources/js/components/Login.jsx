import { data } from 'jquery';
import { create, toInteger } from 'lodash';
import React, { useRef, useEffect, useState } from 'react';
import { Card } from '../elementos/card';
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
            const data = new FormData();
            data.append('idUser', id);
            fetch('api/crearSession', {
                method: 'POST',
                body:data
            }).then((response) => response.json()).then( (json) => {
                sessionStorage.setItem('token',json.token);
                sessionStorage.setItem('id', id);
                sessionStorage.setItem('ge', json.nombre);
                setTimeout(() => {location.replace('/')}, 1000);
            });
        } else {
            alert("Usuario o contrasenia erronea");
        }
    };
    return(
        <main id="main-login">
            <Card style={{margin: '5% auto', padding: '10px 50px 50px 50px'}}>
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
                    </div>
                </form>
            </Card>
        </main>
    );

};

export default Login;
