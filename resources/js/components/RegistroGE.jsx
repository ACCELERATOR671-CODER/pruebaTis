import React, { useRef, useState, useEffect } from 'react'
import {ContenedorDatos, 
        ContenedorBloque,
        Titulo,
        Boton,
        MensajeRGE } from './../elementos/registro';
import { Card } from '../elementos/card';
import Input from './RegistroGE/Input';
import InputImg from './RegistroGE/InputImg';
import Fecha from './RegistroGE/Fecha';
import OrganizacionJ from './RegistroGE/OrganizacionJ';
import TextArea from './RegistroGE/TextArea';



const RegistroGE = () => {
    const [orgJur, setOrgJur] = useState({valido : null});
    const [telefono, setTelefono] = useState({campo:'', valido:null});
    const [direccion, setDireccion] = useState({campo:'', valido:null});
    const [email, setEmail] = useState({campo:'', valido: null, existe:'false'});
    const [imagen, setImagen] = useState({valido: null});
    const [nombre, setNombre] = useState({campo:'', valido: null, existe:'false'});
    const [nombreAb, setNombreAb] = useState({campo:'', valido:null});
    const [descripcion, setDescripcion] = useState({campo:'', valido:null});

    const expresiones = {
        nombre: /^[a-zA-Z\s]{3,30}$/, 
        nombreAb: /^[a-zA-Z\s]{2,20}$/, 
        correo: /^[a-zA-Z0-9_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,8}$/,
        direccion: /^[a-zA-ZÀ-ÿ0-9\,\.\#\-\_\s]{5,100}$/,
        objetivo: /^[a-zA-ZÀ-ÿ0-9\,\.\s]{10,100}$/,
    };

    const validarImagen = (estate) => {

        const validar = [];

        if(estate.valido === 'false'){
            validar.push("Tienes que insertar una imagen");
        }

        return validar;
    };

    const validarTelefono = (estate, regex) => {
        const validar = [];
        if(estate.campo.length < 1){
            validar.push('Debe llenar este campo');
        }
        if(estate.campo.length < 7 || estate.campo.length>8){
            validar.push('el numero de telefono debe contener un minimo de 7 digitos y un maximo de 8 digitos');
        }
        if(!regex.test(estate.campo) && estate.campo.length >7 && estate.campo.length <9){
            validar.push('Hay caracteres invalidos en el campo');
        }
        return validar;
    };

    const validarDireccion = (estate, regex) => {
        const validar = [];
        if(estate.campo.length <1){
            validar.push("Debe llenar este campo");
        }
        if(estate.campo.length < 5 || estate.campo.length>100){
            validar.push("la direccion debe contener un minimo de 5 caracteres y un maximo de 100 caracteres");
        }
        if(!regex.test(estate.campo) && estate.campo.length>4){
            validar.push("hay caracteres invalidos en el campo");
        }
        return validar;
    }

    const validarDescripcion = (estate, regex) => {
        const validar = [];
        if(estate.campo.length <1){
            validar.push("Debe llenar este campo");
        }
        if(estate.campo.length < 10 || estate.campo.length>100){
            validar.push("el objetivo debe contener un minimo de 10 caracteres y un maximo de 100 caracteres");
        }
        if(!regex.test(estate.campo) && estate.campo.length>4){
            validar.push("hay caracteres invalidos en el campo");
        }
        return validar;
    }

    const validarCorreo = (estate, regex) => {
        const validar = [];
        if(estate.campo.length<1){
            validar.push('Debes llenar este campo');
        }
        if(!regex.test(estate.campo) &&  estate.campo.length>1 ){
            validar.push('Debe ingresar un formato de correo electronico valido');
        }

        if(estate.existe === 'true' && (estate.campo.length>5 && estate.campo.length < 30)){
            validar.push('el email ya esta en uso');
        }

        return validar;
    }

    const validarNombre = (estate, regex) => {
        const validar = [];
        if(estate.campo.length<1){
            validar.push('Debes llenar este campo');
        }
        if(estate.campo.length>30 || estate.campo.length<3){
            validar.push('Solo se permite un minimo de 3 caracteres y un maximo de 30 caracteres');
        }
        if((!regex.test(estate.campo)) && (estate.campo.length>2 && estate.campo.length < 31) ){
            validar.push('El nombre solo puede contener caracteres alfabeticos y espacios');
        }
        if(estate.existe === 'false' && (estate.campo.length>2 && estate.campo.length < 31)){
            validar.push('el nombre ya esta en uso');
        }

        return validar;
    }

    const validarNombreAb = (estate, regex) => {
        const validar = [];
        if(estate.campo.length<1){
            validar.push('Debes llenar este campo');
        }
        if(estate.campo.length>30 || estate.campo.length<3){
            validar.push('Solo se permite un minimo de 2 caracteres y un maximo de 20 caracteres');
        }
        if(!regex.test(estate.campo) && (estate.campo.length>1 && estate.campo.length < 21) ){
            validar.push('El nombre abreviado solo puede contener caracteres alfabeticos y espacios');
        }
        if(estate.existe === 'false' && (estate.campo.length>1 && estate.campo.length < 21)){
            validar.push('ese nombre abreviado ya esta en uso');
        }

        return validar;
    }

    const validarOrgJur = (estate) => {
        const validar = [];
        if(estate.valido === 'false'){
            validar.push("Seleccione una opcion valida en este campo");
        }
        return validar;
    }

    const verificarInputs = () => {
        if(!orgJur.valido){
            setOrgJur({valido:'false'});
        }
        
        if(!telefono.valido){
            setTelefono({...telefono, valido:'false'});
        }

        if(!direccion.valido){
            setDireccion({...direccion, valido:'false'});
        }

        if(!email.valido){
            setEmail({...email, valido:'false'});
        }

        if(!imagen.valido){
            setImagen({valido:'false'});
        }

        if(!nombre.valido){
            setNombre({...nombre, valido:'false'});
        }

        if(!nombreAb.valido){
            setNombreAb({...nombreAb, valido:'false'});
        }

        if(!descripcion.valido){
            setDescripcion({...descripcion, valido:'false'});
        }
    };

    const [msg, setMsg] = useState(false);
    const formulario = useRef(null);
    const exito = () => {
        const files = Array.from(document.getElementsByTagName('input'));
        files.map((inp) => {
            inp.disabled = true;
        });
        document.getElementById('orgJur').disabled = true;
        document.getElementById('descripcion').disabled = true;
        document.getElementById('botonSub').disabled = true;
        return "#6aff00";
    };

    const onSubmit = (e) => {
        verificarInputs();
        e.preventDefault();
        if(orgJur.valido === 'true' && telefono.valido === 'true' && 
            direccion.valido === 'true' && email.valido === 'true' && 
            imagen.valido === 'true' && nombre.valido === 'true' && 
            nombreAb.valido === 'true' && descripcion.valido === 'true'){
            const data = new FormData(document.getElementById('formulario'));
            data.append('token', sessionStorage.getItem('token'));
            fetch('api/registrarGrupoEmpresa', {
                method:'POST',
                body:data
            }).then((response) => {
                setMsg(true);
                const mensaje = document.getElementById('mensajeRGE');
                let color = null;
                if(response.ok){
                    color = exito();
                    mensaje.innerHTML = `Exito al Registrar Grupo empresa <a href='GE-${nombre.campo}'>ver mi grupo empresa</a>`;
                    sessionStorage.setItem('ge', nombre.campo);
                } else {
                    color = 'red';
                    mensaje.innerHTML = "Error al registrar Grupo empresa, intentelo de nuevo mas tarde";
                }
                document.getElementById('cardItem').style = `border-style:solid;box-shadow: 10px 10px 10px ${color}; border-color: ${color}`;
                mensaje.style = `transition: .5s ease all;border-color:  ${color}; background-color:${color};`;
                window.scroll(0,0);
            });
        }
    };

    return (
        <main>
            <Card id='cardItem'>
                <form ref={formulario} 
                       id='formulario' 
                       onSubmit={onSubmit} 
                       className='formStyle' 
                       method='POST' 
                       encType="multipart/form-data">
                    <ContenedorBloque>
                        <Titulo>Registro Grupo-Empresa</Titulo>
                    </ContenedorBloque>
                    {(msg) && ( <ContenedorBloque >
                            <MensajeRGE id='mensajeRGE'></MensajeRGE>
                        </ContenedorBloque>)}
                    <ContenedorDatos>
                        <div>
                            <h5 className='text-left'><b>1. Fecha de Registro</b></h5><br/>
                            <Fecha/>
                            <h5 className='text-left'><b>2. Tipo de Organizacion Juridica</b></h5><br/>
                            <div className='d-flex'>
                                <OrganizacionJ estado={orgJur} 
                                               cambiarEstado={setOrgJur}
                                               funcValidar = {validarOrgJur}
                                              ></OrganizacionJ>
                            </div>
                        </div>
                        <div className='imagenGERC'>
                            <InputImg estado={imagen} 
                            cambiarEstado={setImagen} 
                            name='imagen'
                            funcValidar = {validarImagen}/>
                        </div>
                    </ContenedorDatos>    
                    <ContenedorBloque>
                        <h5 className='text-left'><b>3. Datos de la Empresa</b></h5><br/>
                        <ContenedorDatos>
                            <div>
                                <Input estado={nombre} 
                                       cambiarEstado={setNombre} 
                                       regex = {expresiones.nombre} 
                                       nombre='nombre' 
                                       placeholder='Nombre Grupo-Empresa' 
                                       tipo='text'
                                       funcValidar={validarNombre}/>
                            </div>
                            <div>
                                <Input estado={direccion} 
                                       cambiarEstado={setDireccion} 
                                       regex= {expresiones.direccion} 
                                       nombre='direccion' 
                                       tipo='text' 
                                       placeholder='Direccion'
                                       funcValidar={validarDireccion}/>
                            </div>
                            <div>
                                <Input estado={nombreAb} 
                                       cambiarEstado={setNombreAb} 
                                       regex= {expresiones.nombreAb} 
                                       nombre='nombreAb' 
                                       tipo='text' 
                                       placeholder='Nombre Abreviado'
                                       funcValidar = {validarNombreAb}/>
                            </div>
                            <div>
                                <Input estado={email} 
                                       cambiarEstado={setEmail} 
                                       regex = {expresiones.correo} 
                                       nombre='email' 
                                       tipo='email' 
                                       placeholder='Correo electronico'
                                       funcValidar = {validarCorreo}/>
                            </div>
                            <div>
                                <Input estado={telefono} 
                                       cambiarEstado={setTelefono}  
                                       regex = {expresiones.telefono} 
                                       nombre='telefono' tipo='number' 
                                       placeholder='Telefono' 
                                       maxlength={9} 
                                       minlenght={7}
                                       funcValidar={validarTelefono}/>
                            </div>
                        </ContenedorDatos>
                    </ContenedorBloque>
                    <ContenedorBloque className='miTextArea mb-3'>
                        <TextArea estado={ descripcion }
                                  cambiarEstado={ setDescripcion } 
                                  regex= {expresiones.objetivo} 
                                  nombre='descripcion' 
                                  placeholder='objetivo'
                                  funcValidar = {validarDescripcion} ></TextArea>
                        <Boton id='botonSub' type='submit'>Registrar</Boton>
                    </ContenedorBloque>
                </form>            
            </Card>
        </main>
    )
}

export default RegistroGE
