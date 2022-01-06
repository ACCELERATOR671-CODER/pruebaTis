import React, {useState, useEffect, useRef} from 'react';
import { CardEG, DescArea } from '../elementos/espacioGeneral';
import {InputStyle } from '../elementos/registro';
import Chevron from './Acordeon/chevron.svg'
import { Titulo,Letra,FondoGeneral, ContenidoImput, Subtitulo, NombreConsultora,FondoContrato, NombreAsesores, NombreLider, PieDePagina, SubirFirmaAsesor, FirmaGE } from '../elementos/contratoFuentes';
import { Boton } from '../elementos/registro';
import InputImg from './RegistroGE/InputImg'
import jsPDF from 'jspdf';
import { map } from 'jquery';



const GenContrato = () => {
    const [grupoempresas, setGrupoempresas] = useState([])
    const [imagen, setImagen] = useState({valido : null});
    const validarImagen = () => {
        return [];
    };
    const [select, setselect] = useState("---Selecciona una Opcion---")
    const [sistema, setsistema] = useState("")
    const [pliego, setpliego] = useState("")
    const [convocatoria, setconvocatoria] = useState("")
    const [lider, setlider] = useState("")
    
    const imprimir = (e) => {
    document.addEventListener("DOMContentLoaded", () => {
    const $boton = document.querySelector('btnCrearPDF');
        $boton.addEventListener("click", () => {const $elementoParaConvertir = document.body;
        html2pdf()
            .set({
                margin: 1,
                filename: 'documento.pdf',
                image: {
                    type: 'jpeg',
                    quality: 0.98
                },
                html2canvas: {
                    scale: 3,
                    letterRendering: true,
                },
                jsPDF:{
                    unit: "in",
                    format: "a3",
                    orientation:'portrait'
                }
            })
        })
        .from($elementoParaConvertir)
        .save()
        .catch(err => console.log(err));
    })
    }

    const generatePDF = () =>  {
        var doc =  new jsPDF({
                orientation :"p",
                unit:"pt",
                format: [700,1100]});
        doc.html(document.querySelector("#Contrato"),{
            callback: function(pdf){
                
                pdf.save(select+".pdf");
                
            }

        } );
    } ;
    useEffect(() => {
        const dat = new FormData();
        dat.append('id', sessionStorage.getItem('id'));
            fetch('api/obtenerGrupoEmpresasValidas', {
                method: 'POST',
                body: dat
            })
                .then((response) => response.json())
                .then((json) => {
                    setGrupoempresas(json);
                    console.log(json);
                });
        fetch('api/obtenerConsultores')
        .then( (response)=> response.json())
        .then((consultores)=> {
            setconsultores(consultores);
        });
        
    }, [])
    const [consultores, setconsultores] = useState([]);



    const onchangeselect = (e) => {
        const [value, id]= e.currentTarget.value.split('.'); 
        setselect(value);
        const form = new FormData();
        console.log(id)
        form.append('idUsuario', id );
        fetch('api/getFullUser', {
            method: 'POST',
            body: form
        })
        .then((response)=> response.json())
        .then((obtenerL)=>{setlider(obtenerL)})
    };
    const onchangesistema = (e) => {
        setsistema(e.currentTarget.value);
    };
    const onchangepliego = (e) => {
        setpliego(e.currentTarget.value);
    };
    const onchangeconvocatoria = (e) => {
        setconvocatoria(e.currentTarget.value);
    };

    const fecha = new Date();
    const dia = fecha.getDate();
    
    const mes = fecha.getMonth();
    const anio = fecha.getFullYear();
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    const fechaActual = dia + " de " + monthNames[mes] + " de "+ anio;
    const mesAnio = monthNames[mes] +" de "+ anio;
    return(<>
            
            <FondoGeneral className='p-4  ' style={{margin:"0 auto"}}>
                <div id="cont-label-logo">
                    <label id="label-login-logo">CONTRATO</label>
                </div>
                <h4 >Seleccione una Grupo Empresa</h4>
                <ContenidoImput>
                    <label > Seleccione una GE Valida:
                        <select  defaultValue= "---Selecciona una Opcion---" id="GE" onChange={onchangeselect}>
                            <option value="">---Selecciona una Opcion---</option>
                            {grupoempresas.map(data => <option value= { data.nombre + "." + data.duenio }>{data.nombre}</option> )}
                        </select>
                    </label>
                    
                    <label > Nombre del Sistema: <input type="text"  onChange={onchangesistema} /></label>
                    <label > Nombre de la convocatoria: <input type="text" onChange={onchangeconvocatoria} /></label>
                    <label > Nombre del pliego: <input type="text" onChange={onchangepliego} /></label>
                </ContenidoImput>    
                <FondoContrato className='p-4' id='Contrato'>
                    <h4>CONTRATO DE PRESENTACION DE<br /> SERVICIOS    -    CONSULTORIA</h4><br />
                    <Subtitulo>{fechaActual}</Subtitulo>
                    <div className='text-left'>
                    <Letra>
                        Que suscriben la empresa Taller de Ingenieria de Software - TIS,
                        que en lo sucesivo se denominara TIS, por una parte, 
                        y la consultora <strong>{select}</strong> registrada debidamente en el 
                        Departamento de Procesamiento de Datos y Registro e Inscripciones,
                        domiciliada en la ciudad de Conchabamba, que en lo sucesivo se denominara   
                        <strong>{select}</strong>, por otra parte, de conformidad a las clausulas que se 
                        detallan a continuacion.
                        <br />
                        <b> PRIMERA.-</b> TIS contratara los servicios del Contratista para la provision
                        de un <strong>{sistema}</strong> que se realizara, conforme a la modalidad y 
                        presupuesto entregado por la Consultora, en su documento de propuesta
                        tecnica, y normas estipuladas por TIS.
                        <br />
                    
                        <b> SEGUNDO.-</b> El objeto de este contrato es la provision de un producto software.
                        <br />
                        <b> TERCERO.-</b> La consultora <strong>{select}</strong>, se hace responsable por la buena ejecucion de las distintas fases, que involucren
                        su ingenieria del proyecto, especificadas en la propuesta tecnica corregida
                        de acuerdo al pliego de especificaciones.
                        <br />
                        <b> CUARTO.-</b> Para cualquier otro punto no estipulado en el presente contrato, 
                        debe hacerse referencia a la Convocatoria Pública <strong>{convocatoria}</strong>  
                        al Pliego de Especificaciones <strong>{pliego}</strong>  
                        y/o al PG-TIS (Plan Global - TIS)
                        <br />
                        <b> QUINTO.-</b> Se pone en evidencia que cualquier incumplimiento de las cláusulas 
                        estipuladas en el presente contrato, es pasible a la disolución del mismo.
                        <br />
                        <b> SEXTO.-</b> La consultora <strong>{select}</strong>, declara su absoluta conformidad con los términos del presente contrato. 
                        Se deja constancia de que los datos y antecedentes personales jurídicos 
                        proporcionados por el adjudicatario son verídicos.
                        <br />
                        <b> SEPTIMO.-</b> El presente contrato se disuelve también, por cualquier motivo 
                        de incumplimiento a normas establecidas en PG-TIS (Plan Global - TIS)
                        <br />
                        <b> OCTAVO.-</b> Por la disolución del contrato, TIS tiene todo el derecho de 
                        ejecutar la boleta de garantía, que es entregada por el contratado 
                        como documento de seriedad de la empresa.
                        <br />
                        <b> NOVENO.-</b> La información que TIS brinde al contratado debe ser de rigurosa 
                        onfidencialidad, y no utilizarse para otros fines que no sea el desarrollo 
                        del proyecto.
                        <br />
                        <strong> DECIMO.-</strong> TIS representada por su directorio {consultores.map(data =><NombreAsesores> {data.nombreC}, </NombreAsesores>  )} y por otra; la consultora <strong>{select}</strong>, representada por su representante legal  
                        <NombreLider>{lider.nombreC}</NombreLider>, dan su plena conformidad a los términos y condiciones establecidos en el presente Contrato de Prestación de 
                        Servicios y Consultoría, firmando en constancia al pie de presente documento.
                    </Letra>
                    </div>
                    
                    <p></p><br />
                    <PieDePagina>Cochabamba, <NombreLider>{mesAnio}</NombreLider></PieDePagina>
                        <div className=' d-flex justify-content-between'>
                            <FirmaGE>  
                                <Letra>REPRESENTANTE DE LA GRUPOEMPRESA</Letra>
                            </FirmaGE> 
                            <div>
                                <div style={{maxWidth: '310px'}}>
                                    <InputImg
                                        style={{width: '60%', height:'100px'}} 
                                        name = 'foto_perfil' 
                                        estado = { imagen }
                                        cambiarEstado = { setImagen } 
                                        funcValidar = { validarImagen }                                    
                                    />       
                                </div>
                                <Letra>REPRESENTANTE CONSULTOR TIS</Letra>
                            </div> 
                            
                        </div> 
                </FondoContrato>  
                <div className='d-flex justify-content-center'> 
                    <Boton onClick={generatePDF} style={{width: "200px"}}>GUARDAR CONTRATO</Boton>
                </div> 
            </FondoGeneral>
    </>);
};
export default GenContrato;