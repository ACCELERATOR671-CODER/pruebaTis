import React,{ useState } from 'react'
import { Card } from '../elementos/card'
import { Cuadro, Grid } from '../elementos/rua'
import { Boton } from '../elementos/registro'
import Input from './rua/Input'
import SelectRua from './rua/SelectRua'

const RegistroUsuarioAdmin = () => {
    //crear el estado, crear la validacion, mandar en el input los 
    //datos creados junto a su expReg y añadir en verificar inputs
    const [nombre, setNombre] = useState({campo:'', valido: null});
    const [codsis, setCodsis] = useState({campo:'', valido: null, existe:'false'});
    const [email, setEmail] = useState({campo:'', valido: null, existe:'false'})
    
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

    const validarCodSis = (estate, regex) => {
        const validar = [];
        if(estate.campo.length < 1){
            validar.push('Debe llenar este campo');
        }
        if(estate.campo.length != 9){
            validar.push('el codigosis debe contener 9 caracteres');
        }
        if(!regex.test(estate.campo) && estate.campo.length == 9){
            validar.push('Hay caracteres invalidos en el campo');
        }
        if(estate.existe == 'true'){
            validar.push('el codigo sis ya esta registrado');
        }
        return validar;
    };

    const validarNombre = (estate, regex) => {
        const validar = [];
        if(estate.campo.length<1){
            validar.push('Debes llenar este campo');
        }
        if(estate.campo.length>50 || estate.campo.length<3){
            validar.push('el campo debe contener entre 3 y 30 caracteres');
        }
        if((!regex.test(estate.campo)) && (estate.campo.length>2 && estate.campo.length < 51) ){
            validar.push('El nombre solo puede contener caracteres alfabeticos y espacios');
        }

        return validar;
    }

    const verificarInputs = () => {
        if(!nombre.valido){
            setNombre({...nombre, valido:'false'});
        }

        if(!codsis.valido){
            setCodsis({...codsis, valido:'false'});
        }

        if(!email.valido){
            setEmail({...email, valido:'false'});
        }
    };

    const expresiones = {
        nombre: /^[a-zA-Z\s]{3,50}$/, 
        correo: /^[a-zA-Z0-9_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        codigoSis: /^\d{9,9}$/,
    };

    const registrar = (e) => {
        e.preventDefault();
        verificarInputs();
        if(nombre.valido == 'true' && 
            codsis.valido == 'true' && 
            email.valido == 'true'){
            const form = new FormData(e.currentTarget);
            fetch('api/createUser',{
                method:'POST',
                body:form
            })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
            })
        }
    }

    return (
        <main>
            <Card className='p-5'>
                <Grid onSubmit={ registrar }>
                    <h1>Registrar Usuario</h1>
                    <Input estado={nombre} 
                           cambiarEstado={setNombre} 
                            regex = {expresiones.nombre} 
                            nombre='nombreUsuario' 
                            placeholder='Nombre Completo' 
                            tipo='text'
                            funcValidar={validarNombre}/>
                    <Cuadro>
                        <Input estado={codsis} 
                            cambiarEstado={setCodsis} 
                                regex = {expresiones.codigoSis} 
                                nombre='codsis' 
                                placeholder='Codigo Sis' 
                                tipo='number'
                                funcValidar={validarCodSis}/>
                        <Input estado={email} 
                                cambiarEstado={setEmail} 
                                regex = {expresiones.correo} 
                                nombre='email' 
                                placeholder='Correo Electronico' 
                                tipo='email'
                                funcValidar={validarCorreo}/>
                        <SelectRua name = 'grupo' defaultValue='---seleccione una grupo---'/>
                        <SelectRua name = 'carrera' defaultValue='---seleccione una carrera---'/>
                    </Cuadro>
                    <Boton type='submit'>Registrar</Boton>
                </Grid>
            </Card>
        </main>
    )
}

export default RegistroUsuarioAdmin
