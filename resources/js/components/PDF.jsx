import React, { useRef, useState } from 'react';
import {
    ContenedorDatos,
    ContenedorBloque,
    Titulo,
    Boton,
    MensajeRGE
} from './../elementos/registro';
import { Card } from '../elementos/card';
import Input from './EditarGE/Input';
import InputImg from './EditarGE/InputImg';
import { PDFComponent } from './subir_PDF/pdf_component';
//import { Datos } from '../elementos/datos_pdf';

const PDF = (props) => {

    const [idGE, setID] = useState({ campo: '' });
    const [nombre, setNombre] = useState({ campo: '', valido: null, existe: 'false' });

    const verificarInputs = () => {
        if (!orgJur.valido) {
            setOrgJur({ valido: 'false' });
        }
    };

    const [msg, setMsg] = useState(false);
    const formulario = useRef(null);
    const exito = () => {
        const files = Array.from(document.getElementsByTagName('input'));
        files.map((inp) => {
            inp.disabled = true;
        });
        return "#6aff00";
    };

    const onSubmit = (e) => {
        verificarInputs();
        e.preventDefault();
        if (orgJur.valido === 'true') {
            const data = new FormData(document.getElementById('formulario'));
            data.append('eliminar', logo.eliminar);
            data.append('idGE', idGE.campo);
            fetch('api/registrarCambiosGE', {
                method: 'POST',
                body: data
            }).then((response) => {
                setMsg(true);
                const mensaje = document.getElementById('mensajeRGE');
                let color = null;
                console.log(response);
                if (response.ok) {
                    color = exito();
                    mensaje.innerHTML = "Exito al Registrar Grupo empresa";
                } else {
                    color = 'red';
                    mensaje.innerHTML = "Error al registrar Grupo empresa, intentelo de nuevo mas tarde";
                }
                document.getElementById('cardItem').style = `border-style:solid;box-shadow: 10px 10px 10px ${color}; border-color: ${color}`;
                mensaje.style = `transition: .5s ease all;border-color:  ${color}; background-color:${color};`;
                window.scroll(0, 0);
            });
        }
    };



    if (idGE.campo === "") {
        start();
    }

    function start() {
        fetch('/api/solicitarGE', {
            method: 'POST',
            body: JSON.stringify(document.title),
        }).then((response) => response.json())
            .then((data) => {
                for (let i = 0; i < data.length; i++) {
                    let elemento = data[i];
                    if (elemento.nombre == document.title) {
                        setID({ ...idGE, campo: elemento.idGE });
                        setNombre({ ...nombre, campo: elemento.nombre });
                        break;
                        /*[idGE','fecha_creacion', 'fecha_registro',
                        'orgJur', 'nombre', 'nombreAb', 'telefono',
                        'direccion', 'email', 'descripcion', 'logo', 'orgJur'];*/
                    }
                }
            });
    }

    const Datos = [
        {
            nombre: 'FundaEmpresa.pdf',
            link: "#"
        }, {
            nombre: 'Informacion',
            link: "#"
        }
    ];

    const onButtonClick = (e) => {
        cambiarEstado({ valido: 'true' })
        const pdf = files[0];
        const url = URL.createObjectURL(pdf);
        const nuevo = {
            nombre: 'Informacion',
            link: "#"
        }
        Datos.append(nuevo);
    }
    const onClick = (e) => {
        console.log();
    }

    return (

        <main>
            <Card id='cardItem'>

                <div className="container border">
                    {Datos.map((dato) => (
                        <>
                            <div className="row" id={dato.nombre} >
                                <div className="col-2">icono</div>
                                <div className="col-4">pdf titulo</div>
                                <div className="container col-6">
                                    <div className="row">
                                        <div className="col-6 border">
                                            <button>Subir</button>
                                        </div>
                                        <div className="col-6 border">
                                            <button onClick={onClick}>Mostrar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <iframe src={dato.link} style={{ display: "none" }}></iframe>
                                </div>

                            </div>

                        </>
                    ))}
                    <div className="row">
                        <div className="col-6">
                            icono
                        </div>
                        <div className="col-6">
                            <input
                                id="pdf"
                                name="pdf"
                                onSubmit={onButtonClick}
                                onChange={onButtonClick}
                                accept="application/pdf"
                                type='file'
                            />
                        </div>

                    </div>
                </div>

            </Card>
        </main >

    )
}

export default PDF

