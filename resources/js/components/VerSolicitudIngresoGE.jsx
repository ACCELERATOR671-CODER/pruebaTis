import React from 'react'
import { Card } from './../elementos/card';
import {
    ScrollDiv,
    Boton
} from './../elementos/scroll';
/* import { Boton } from './../elementos/registro'; */

const VerSolicitudIngresoGE = (props) => {

    return (
        <main>
            <Card>
                <form /* ref={formulario} */
                    id='formulario'
                    /* onSubmit={onSubmit} */
                    className='formStyle'
                    method='POST'
                    encType="multipart/form-data">
                    <div className="container p-5">
                        <div className="row p-3">
                            <div className="col-12 p-3 h2">
                                {/* {nombre.campo} */}
                                SOLICITUDES DE INGRESO
                            </div>
                        </div>
                        <ScrollDiv className="row p-3 border border-dark bg-light">
                            <div className="col-12 p-3 d-flex border border-dark rounded-pill">
                                <div className="p-2 mr-auto text-primary">
                                    <u>Lionel Perez</u>
                                </div>
                                <div className="p-2">
                                    <Boton>Admitir</Boton>
                                </div>
                                <div className="p-2">
                                    <Boton>Rechazar</Boton>
                                </div>
                            </div>

                            <div className="mt-2 col-12 p-3 d-flex border border-dark rounded-pill">
                                <div className="p-2 mr-auto text-primary">
                                    <u>Lionel Perez</u>
                                </div>
                                <div className="p-2">
                                    <Boton>Admitir</Boton>
                                </div>
                                <div className="p-2">
                                    <Boton>Rechazar</Boton>
                                </div>
                            </div>

                            <div className="mt-2 col-12 p-3 d-flex border border-dark rounded-pill">
                                <div className="p-2 mr-auto text-primary">
                                    <u>Lionel Perez</u>
                                </div>
                                <div className="p-2">
                                    <Boton>Admitir</Boton>
                                </div>
                                <div className="p-2">
                                    <Boton>Rechazar</Boton>
                                </div>
                            </div>

                            <div className="mt-2 col-12 p-3 d-flex border border-dark rounded-pill">
                                <div className="p-2 mr-auto text-primary">
                                    <u>Lionel Perez</u>
                                </div>
                                <div className="p-2">
                                    <Boton>Admitir</Boton>
                                </div>
                                <div className="p-2">
                                    <Boton>Rechazar</Boton>
                                </div>
                            </div>

                            <div className="mt-2 col-12 p-3 d-flex border border-dark rounded-pill">
                                <div className="p-2 mr-auto text-primary">
                                    <u>Lionel Perez</u>
                                </div>
                                <div className="p-2">
                                    <Boton>Admitir</Boton>
                                </div>
                                <div className="p-2">
                                    <Boton>Rechazar</Boton>
                                </div>
                            </div>

                            <div className="mt-2 col-12 p-3 d-flex border border-dark rounded-pill">
                                <div className="p-2 mr-auto text-primary">
                                    <u>Lionel Perez</u>
                                </div>
                                <div className="p-2">
                                    <Boton>Admitir</Boton>
                                </div>
                                <div className="p-2">
                                    <Boton>Rechazar</Boton>
                                </div>
                            </div>

                            <div className="mt-2 col-12 p-3 d-flex border border-dark rounded-pill">
                                <div className="p-2 mr-auto text-primary">
                                    <u>Lionel Perez</u>
                                </div>
                                <div className="p-2">
                                    <Boton>Admitir</Boton>
                                </div>
                                <div className="p-2">
                                    <Boton>Rechazar</Boton>
                                </div>
                            </div>

                        </ScrollDiv>

                    </div>

                </form>
            </Card>
        </main>


    )
}
export default VerSolicitudIngresoGE;
