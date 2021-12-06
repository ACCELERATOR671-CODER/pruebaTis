import React,{ useState } from 'react'
import { Titulo,Boton, InputImagen } from '../elementos/registro'
import { Card } from '../elementos/card'
import { ContenedorInputs, 
        ContenedorElementos, 
        ContenedorPrincipal,
        ContenedorBoton } from '../elementos/registroUsuario'
import InputImg from './RegistroGE/InputImg'
import Input from './RegistroGE/Input'

const RegistroUsuario = () => {
    const [imagen, setImagen] = useState({valido : null});
    const [codSis, setCodSis] = useState({valido : null, campo:"", existe:"false"});
    const [telefono, setTelefono] = useState({valido : null, campo:""});
    const [nombreU, setNombreU] = useState({valido : null, campo:"", existe:"false"});
    const [pass, setPass] = useState({valido:null, campo:""});
    const [rPass, setRPass] = useState({campo:""});

    const expresiones = {
        nombreUsuario: /^[a-zA-Z0-9]{7,25}$/,
        codsis:/^\d{9,9}$/,
        telefono: /^\d{7,8}$/,
        contrasenia: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,25}$/
    };

    const validarNombreUsuario = (estate, regex) => {
        const validar = [];
        if(estate.campo.length<1){
            validar.push("Debes llenar este campo");
        }
        if(estate.campo.length<7 || estate.campo>25){
            validar.push("El nombre de usuario debe tener un minimo de 7 caracteres y un maximo de 25");
        }
        if(!regex.test(estate.campo) && (estate.campo.length>=7 && estate.campo.length<=25)){
            validar.push("El nombre de usuario solo puede contener letras y numeros");
        }
        return validar;
    }

    const validarTelefono = (estate, regex) => {
        const validar = [];
        if(estate.campo.length<1){
            validar.push("Debes llenar este campo");
        }
        if(estate.campo.length < 7 || estate.campo.length>8){
            validar.push('el numero de telefono debe contener un minimo de 7 digitos y un maximo de 8 digitos');
        }
        if(!regex.test(estate.campo) && estate.campo.length >6 && estate.campo.length <9){
            validar.push('Hay caracteres invalidos en el campo');
        }
        return validar;
    };

    const validarContrasenia = (estate, regex) => {
        const validar = [];
        if(estate.campo.length<1){
            validar.push("Debes llenar este campo");
        }

        if(estate.campo.length<7 || estate.campo>25){
            validar.push("La contraseña debe tener un minimo de 7 caracteres y un maximo de 25");
        }

        if(!regex.test(estate.campo) && estate.campo.length>=7 && estate.campo.length<=25){
            validar.push("La contraseña debe tener al menos una letra minuscula, una letra mayuscula y un numero");
        }
        return validar;
    };

    const validarCodSis = (estate, regex) => {
        const validar = [];
        if(estate.campo.length<1){
            validar.push("Debes Llenar este campo");
        }

        if(estate.campo.length !=  9){
            validar.push("El codigo sis tiene 9 digitos");
        }

        if((!regex.test(estate.campo)) && (estate.campo.length==9) ){
            validar.push('El nombre solo puede contener caracteres alfabeticos y espacios');
        }

        return validar;
    };

    const validarImagen = () => {
        return [];
    };

    const validarCampos = () => {
        if(!codSis.valido){
            setCodSis({...codSis, valido:'false'});
        }
        if(!telefono.valido){
            setTelefono({...telefono, valido:'false'});
        }
        if(!nombreU.valido){
            setNombreU({...nombreU, valido:'false'});
        }
        if(!pass.valido){
            setPass({...pass, valido:'false'});
        }
        return codSis.valido === 'true' && telefono.valido === 'true' &&
                nombreU.valido === 'true' && pass.valido === 'true'
    };

    const actualizar = (e) => {
        e.preventDefault();
        if(validarCampos()){
            if(pass.campo == rPass.campo){
                const datos = new FormData(document.getElementById('formulario'));

                fetch('api/actualizarUsuario', {
                    method:'POST',
                    body:datos
                }).then((response) => response.json()).then((json) => {
                    if(json.mensaje){
                        alert(json.mensaje);
                    } else {
                        alert("Registro Exitoso!");
                        location.replace("Login");
                    }
                });

            } else {
                alert("Las contraseñas no coinciden");
            }
        }
    }

    return (
        <main>
            <Card>
                <form onSubmit= { actualizar } 
                      id='formulario' 
                      method='POST' 
                      encType="multipart/form-data" 
                      className=' m-5 d-flex text-center justify-content-center'>
                    <ContenedorPrincipal>
                        <h1>Registrarse</h1>
                        <ContenedorElementos>
                            <ContenedorInputs>
                                <Input estado={codSis} 
                                       cambiarEstado={setCodSis} 
                                       regex = { expresiones.codsis } 
                                       nombre='codsis' 
                                       placeholder='Codigo Sis (*)' 
                                       tipo='number'
                                       funcValidar={ validarCodSis }/>
                                <Input estado={telefono} 
                                       cambiarEstado={setTelefono} 
                                       regex = { expresiones.telefono } 
                                       nombre='telefono' 
                                       placeholder='Telefono' 
                                       tipo='number'
                                       funcValidar={ validarTelefono }/>
                                <Input estado={nombreU} 
                                       cambiarEstado={setNombreU} 
                                       regex = { expresiones.nombreUsuario } 
                                       nombre='nombreU' 
                                       placeholder='Nombre de Usuario (*)' 
                                       tipo='text'
                                       funcValidar={ validarNombreUsuario }/>
                                <Input estado={pass} 
                                       cambiarEstado={setPass} 
                                       regex = { expresiones.contrasenia } 
                                       nombre='contrasenia' 
                                       placeholder='Contraseña (*)' 
                                       tipo='password'
                                       funcValidar={ validarContrasenia }/>
                                <Input estado={rPass} 
                                       cambiarEstado={setRPass} 
                                       regex = { null } 
                                       nombre='contraseniaR' 
                                       placeholder='Repita Contraseña (*)' 
                                       tipo='password'
                                       funcValidar={ validarImagen }/>
                            </ContenedorInputs>
                            <div className=' d-flex justify-content-center text-center'>
                                <div>
                                <InputImg name = 'foto_perfil' 
                                            estado = { imagen }
                                            cambiarEstado = { setImagen } 
                                            funcValidar = { validarImagen }/>
                                </div>
                            </div>
                        </ContenedorElementos>
                        <ContenedorBoton>
                            <p>¿Ya tienes cuenta? presione <a href='Login'>aqui</a></p>
                            <div>
                                <Boton className=' mb-4' type='submit' >Registrarse</Boton>
                            </div>
                        </ContenedorBoton>      
                    </ContenedorPrincipal>
                </form>
            </Card>
        </main>
    )
}

export default RegistroUsuario
