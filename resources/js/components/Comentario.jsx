import React from 'react';
import { Card } from './../elementos/card';
import { Boton } from './../elementos/scroll';
import { TextA } from './../elementos/comentario';
import { Icon } from './../elementos/comentario';
import TextArea from './Comentario/TextArea';


const Comentario = (props) => {

    var Datos = [
        {
            debate: "Clases de Refuerzo",
            alumno: "Juan perez",
            tema: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum doloremque veritatis velit voluptatem quas, totam illum, ad corrupti omnis ea ipsum? Architecto eaque, optio consequatur commodi dignissimos ex possimus adipisci."
        }
    ];

    const new_button = (e) => {
        console.log("añadir nueva duda");
    }
    const deleteComent = (e) => {
        console.log("eliminado");
    }

    //const textArea = useRef(null);
    const subirRespuesta = (e) => {
        console.log("hola mundo");
    }
    const cancelar = (e) => {
        console.log("ir atras boton");
    }


    return (
        <main>
            <Card>
                <div className="p-3 border border-dark bg-light">
                    <div className="row p-3">
                        <div className=" col-12 h4 text-left">
                            Espacio Para Dudas <br />
                            Escribe Alguna Duda
                        </div>
                        <div>
                            <Boton
                                onClick={new_button}>
                                Añadir una nueva duda
                            </Boton>

                        </div>

                    </div>
                    <div className="row p-3">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Debate</th>
                                    <th scope="col">Alumno</th>
                                    <th scope="col">Tema de Discusion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Datos.map((dato) => (
                                    <>
                                        <tr>
                                            <td>
                                                <div className="col-12 text-left">
                                                    {dato.debate}
                                                </div>
                                                <div className="col-12">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16" height="16"
                                                        fill="currentColor"
                                                        class="bi bi-plus-circle-fill"
                                                        viewBox="0 0 16 16">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                                    </svg>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16" height="16"
                                                        fill="currentColor"
                                                        class="bi bi-arrow-right-circle-fill"
                                                        viewBox="0 0 16 16">
                                                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                                    </svg>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="col-12 text-left">
                                                    {dato.alumno}
                                                </div>
                                            </td>
                                            <td>
                                                <div className="row">
                                                    <div className="col-10 text-left">
                                                        {dato.tema}
                                                    </div>
                                                    <div className="col-2">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16" height="16"
                                                            fill="currentColor"
                                                            class="bi bi-trash-fill"
                                                            viewBox="0 0 16 16"
                                                            onClick={deleteComent}>
                                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="row p-3 m-2">
                        <div className="col-12 ">
                            <TextA
                                className="float-left"
                                placeholder="Escriba una respuesta"
                                cols="30"
                                rows="5"
                                id="textA"
                                /* ref={textArea} */
                            />
                        </div>

                        <div className="col-12 d-flex flex-row">
                            <Boton
                                onClick={subirRespuesta}>
                                Enviar
                            </Boton>
                            <Boton
                                onClick={cancelar}>
                                Cancelar
                            </Boton>
                        </div>

                    </div>

                </div>
            </Card>
        </main>


    )
}
export default Comentario;
