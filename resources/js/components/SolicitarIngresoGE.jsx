import React, { useRef, useState } from 'react'
import { Card } from '../elementos/card';
import { Boton } from './../elementos/scroll';
import {
    ContenedorBloque,
    MensajeRGE
} from './../elementos/registro';

const SolicitarIngresoGE = () => {

    const [msg, setMsg] = useState(false);
    const datos = [
        {
            nombre: "EdSoft",
            telefono: "7458246",
            direccion: "Av.Circunvalacion",
            orgJur: "Sociedad de Responsabilidad Limitada",
            correo: "edtems@gmail.com",
            descripcion: "Un objetivo de la empresa de gran importancia"

        }
    ];


    const HayEspacioGE = (e) => {
        if (nombre == 'nombre') {
            const nombreCampo = (nombre == 'nombre') ? 'nombre' :
                (nombre == 'nombreAb') ? 'nombreAb' : 'email';
            const dato = new FormData();
            dato.append('nombre', estado.campo);
            dato.append('campo', nombreCampo);
            fetch('api/nombreGE', {
                method: 'POST',
                body: dato
            }).then((response) => response.json()).then((dat) => {
                cambiarEstado({ ...estado, valido: dat.nombre, existe: dat.nombre });
            });
        } else {
            cambiarEstado({ ...estado, valido: 'true' });
        }
        return true;
    }

    const solicitarIngreso = (e) => {
        if (HayEspacioGE) {
            const dato = new FormData();
            dato.append('nombre', estado.campo);
            dato.append('campo', nombreCampo);
            fetch('api/nombreGE', {
                method: 'POST',
                body: dato
            }).then((response) => {
                setMsg(true);
                const mensaje = document.getElementById('mensajeRGE');
                let color = null;
                console.log(response);
                if (response.ok) {
                    color = exito();
                    mensaje.innerHTML = "Solicitud de ingreso registrada correctamente";
                } else {
                    color = 'red';
                    mensaje.innerHTML = "Se produjo un error al registrar la solicitud";
                }
                document.getElementById('cardItem').style = `border-style:solid;box-shadow: 10px 10px 10px ${color}; border-color: ${color}`;
                mensaje.style = `transition: .5s ease all;border-color:  ${color}; background-color:${color};`;
                window.scroll(0, 0);
            });
        }
    }


    return (
        <main>
            <Card>
                <div className="container p-5">
                    <div className="row p-3">
                        <div className="col-12 p-3 h1">
                            {/* {nombre.campo} */}
                            SOLICITUDES DE INGRESO
                        </div>
                    </div>
                    {
                        (msg) &&
                        (<ContenedorBloque >
                            <MensajeRGE id='mensajeRGE'></MensajeRGE>
                        </ContenedorBloque>)
                    }
                    <div className="row p-3 border bg-light contenedor">
                        <div className="col-7 p-3 columna">
                            <div className="row">
                                <div className="col-12 text-left">
                                    Nombre abreviado: {datos.nombre}
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-12 text-left">
                                    Telefono: {datos.telefono}
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-12 text-left">
                                    Direccion: {datos.direccion}
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-12 text-left">
                                    Organizacion Juridica: {datos.orgJur}
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-12 text-left">
                                    Correo: {datos.correo}
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-12 text-left">
                                    Descripcion: {datos.descripcion}
                                </div>
                            </div>

                        </div>
                        <div className="col-5 p-3 d-flex flex-column">
                            <div className="row">
                                <div className="col-12">
                                    <img src="./resources/logoDefecto.png" alt="" className="img-fluid" />
                                </div>
                            </div>
                            <div className="row mt-auto">
                                <div className="col-12">
                                    <Boton
                                        onClick={solicitarIngreso}
                                    >
                                        Solicitar Ingreso
                                    </Boton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </main>


    )
}
export default SolicitarIngresoGE
