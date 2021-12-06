import React,{ useRef, useState, useEffect } from "react";
import MensajeAlerta from "../RegistroGE/MensajeAlerta";
import IconoAtras from "../Svg/IconoAtras";
import IconoEditar from "../Svg/IconoEditar";
import IconoGuardar from "../Svg/IconoGuardar";

const PerfilUsuario = () => {

    const datos = {
        id: idUsuario
    }

    const nombreC = useRef(null);
    const nomUsuario = useRef(null); 
    const carrera = useRef(null);
    const grupo = useRef(null);
    const correo = useRef(null); 
    const telefono = useRef(null);
    const codSis = useRef(null);
    const imagen = useRef(null);
    const [logo, setLogo] = useState("../resources/socios/");

    useEffect(() => {
        const datoID = new FormData();
        datoID.append('id',datos.id)

        fetch('/api/usuario',{
            method: 'POST',
            body: datoID
        })
        .then((response) => response.json())
        .then((datoUsuario) => {
            nombreC.current.value = datoUsuario[0].nombreC;
            nomUsuario.current.value = datoUsuario[0].nombreUsuario;
            correo.current.value = datoUsuario[0].email;
            telefono.current.value = datoUsuario[0].telefono;
            codSis.current.value = datoUsuario[0].codSis;
            carrera.current.value = datoUsuario[1].nomCarrera;
            grupo.current.value = datoUsuario[2].nomGrupo;
            imagen.current.src = logo+datoUsuario[0].foto_perfil;
        })
    }, []);

    const [idDelLogueado, setIdDelLogueado] = useState('');
    const [edita, setEdita] = useState(false);
    const [editando, setEditando] = useState(false);

    const [valido, setValidaciones] = useState({
        nombreValido: true,
        nomUsuarioValido: true,
        correoValido: true,
        telefonoValido: true,
        codSisValido: true, 
    });

    const regexNombre = new RegExp('^[a-zA-Z ]+$');
    const regexNomUsuario = new RegExp('^[a-zA-Z0-9]+$');
    const regexCorreo = new RegExp('^[0-9]{9}@est+\.umss+\.edu+$');
    const regexTelefono = new RegExp('^[0-9]{7,8}$');
    const regexCodSis = new RegExp('^[0-9]{9}$');

    const verificarNombre = () => {
        let cmpNombre = document.getElementById('cmpNombre');
        const inputValue = nombreC.current.value;
        if (!regexNombre.test(inputValue)) {
            setValidaciones({
                ...valido,
                nombreValido: false
            })
            cmpNombre.setCustomValidity("Debe contener caracteres alfabeticos");
            cmpNombre.reportValidity();
        } else {
            setValidaciones({
                ...valido,
                nombreValido: true
            })
            cmpNombre.setCustomValidity("");
        }
    };

    const verificarNomUsuario = () => {
        let cmpNomUsuario = document.getElementById('cmpApellido');
        const inputValue = nomUsuario.current.value;
        if (!regexNomUsuario.test(inputValue)) {
            setValidaciones({
                ...valido,
                nomUsuarioValido: false
            })
            cmpNomUsuario.setCustomValidity("Debe contener caracteres alfanumericos");
            cmpNomUsuario.reportValidity();
        } else {
            setValidaciones({
                ...valido,
                nomUsuarioValido: true
            })
            cmpNomUsuario.setCustomValidity("");
        }
    };

    const verificarCorreo = () => {
        let cmpCorreo = document.getElementById('cmpCorreo');
        const inputValue = correo.current.value;
        if (!regexCorreo.test(inputValue)) {
            setValidaciones({
                ...valido,
                correoValido: false
            })
            cmpCorreo.setCustomValidity("Ingrese su correo institucional");
            cmpCorreo.reportValidity();
        } else {
            setValidaciones({
                ...valido,
                correoValido: true
            })
            cmpCorreo.setCustomValidity("");
        }
    };

    const verificarTelefono = () => {
        let cmpTelefono = document.getElementById('cmpTelefono');
        const inputValue = telefono.current.value;
        if (!regexTelefono.test(inputValue)) {
            setValidaciones({
                ...valido,
                telefonoValido: false
            })
            cmpTelefono.setCustomValidity("Solo numeros, minimo 7 maximo 8");
            cmpTelefono.reportValidity();
        } else {
            setValidaciones({
                ...valido,
                telefonoValido: true
            })
            cmpTelefono.setCustomValidity("");
        }
    };

    const verificarCodSis = () => {
        let cmpCodSis = document.getElementById('cmpCI');
        const inputValue = codSis.current.value;
        if (!regexCodSis.test(inputValue)) {
            cmpCodSis.setCustomValidity("Ingrese su codigo sis");
            cmpCodSis.reportValidity();
            setValidaciones({
                ...valido,
                codSisValido: false
            })
        } else {
            setValidaciones({
                ...valido,
                codSisValido: true
            })
            cmpCodSis.setCustomValidity("");
        }
    };

    useEffect(() => {
        setIdDelLogueado(sessionStorage.getItem('id'))
    }, []);

    useEffect(() => {
        setEdita(idDelLogueado == datos.id)
    }, [idDelLogueado]);
    

    const editarCampos = () => {
        setEditando(!editando);
        setEdita(false);
        document.getElementById('cmpNombre').disabled = false;
        document.getElementById('cmpApellido').disabled = false;
        document.getElementById('cmpCorreo').disabled = false;
        document.getElementById('cmpTelefono').disabled = false;
        document.getElementById('cmpCI').disabled = false;
    };

    const bloquearCampos = () => {
        setEditando(!editando);
        setEdita(true);
        document.getElementById('cmpNombre').disabled = true;
        document.getElementById('cmpApellido').disabled = true;
        document.getElementById('cmpCorreo').disabled = true;
        document.getElementById('cmpTelefono').disabled = true;
        document.getElementById('cmpCI').disabled = true;
        location.reload();
    };

    const actualizarDatos = () => {
        verificarNombre();
        verificarNomUsuario();
        verificarCorreo();
        verificarTelefono();
        verificarCodSis();
        if (valido.nombreValido && valido.nomUsuarioValido &&
            valido.correoValido && valido.telefonoValido &&
            valido.codSisValido) 
        {
            const formData = new FormData();
            formData.append('token',sessionStorage.getItem('token'));
            formData.append('nombreC',nombreC.current.value.trim());
            formData.append('nombreUsuario',nomUsuario.current.value);
            formData.append('email',correo.current.value);
            formData.append('telefono',telefono.current.value);
            formData.append('codSis',codSis.current.value);
            formData.append('imagen',imagenCarg.current.files[0])
            fetch('/api/actualizarPerfil', {
                method: 'POST',
                body: formData
            })
            .then((response) => {
                if (response.ok) {
                    alert("Actualizado");
                } else {
                    alert("Algo paso")
                }
            });
            bloquearCampos();
        } else {
            alert("Revise que los campos esten correctamente llenados!!");
        }
    };

    const imagenCarg = useRef(null);

    const onButtonClick = () => {    
        const img = document.getElementById('imagen')
        const files = imagenCarg.current.files;

        if(!files || !files.length){
            img.src = logo;
            return;
        }
        const image = files[0];
        const url = URL.createObjectURL(image);
        img.src = url;
    }

    return(
        <div id="contenedor">
            <div id="tarjeta-datos">
                <div id="img-usuario">
                    <img id="imagen" src={ "../resources/cargando.png" } alt="foto-perfil" ref={ imagen }/>
                </div>
                {
                    edita && (
                        <div id="cont-icono-editar" onClick={ editarCampos }>
                            <IconoEditar />
                        </div>
                    ) 
                }
                {
                    editando && (
                        <div id="cont-input-imagen">
                            <label htmlFor="input-file" className="btm-input-file">
                                Cambiar Foto
                            </label>
                            <input
                                id="input-file" 
                                type="file" 
                                accept="image/jpeg,image/jpg,image/png" 
                                onChange={ onButtonClick }
                                ref={ imagenCarg } 
                            />
                        </div>
                    )
                }
                <div id="datos">
                    <div>
                        <label id="lbDetalles">DETALLES DEL USUARIO:</label>
                    </div>
                    <div>
                        <label className="labels">Nombre:</label>
                        <input 
                            id="cmpNombre" 
                            className="texto" 
                            type="text" 
                            ref={ nombreC } 
                            onChange={ verificarNombre }
                            onFocus={ verificarNombre }
                            maxLength="30"
                            disabled  
                        /> 
                    </div>
                    <div>
                        <label className="labels">Nombre de Usuario:</label>
                        <input 
                            id="cmpApellido" 
                            className="texto" 
                            type="text" 
                            ref={ nomUsuario }
                            onChange={ verificarNomUsuario }
                            onFocus={ verificarNomUsuario }
                            maxLength="30" 
                            disabled
                        />
                    </div>
                    <div>
                        <label className="labels">Carrera:</label>
                        <input 
                            id="cmpCarrera" 
                            className="texto" 
                            type="text" 
                            ref={ carrera } 
                            disabled 
                        />
                    </div>
                    <div>
                        <label className="labels">Grupo:</label>
                        <input 
                            id="cmpGrupo" 
                            className="texto" 
                            type="text" 
                            ref={ grupo }  
                            disabled
                        /> 
                    </div>
                    <div>
                        <label className="labels">Correo Electrónico:</label>
                        <input 
                            id="cmpCorreo" 
                            className="texto" 
                            type="text" 
                            ref={ correo }
                            onChange={ verificarCorreo }
                            onFocus={ verificarCorreo } 
                            disabled
                        />
                    </div> 
                    <div>
                        <label className="labels">Teléfono/Celular:</label>
                        <input 
                            id="cmpTelefono" 
                            className="texto" 
                            type="text" 
                            ref={ telefono }
                            onChange={ verificarTelefono }
                            onFocus={ verificarTelefono }
                            maxLength="8" 
                            disabled  
                        />
                    </div>
                    <div>
                        <label className="labels">Codigo SIS:</label>
                        <input 
                            id="cmpCI" 
                            className="texto" 
                            type="text" 
                            ref={ codSis } 
                            onChange={ verificarCodSis }
                            onFocus={ verificarCodSis }
                            maxLength="9"
                            disabled />
                    </div> 
                </div>
                {
                    editando && (
                        <div id="cont-iconos-edicion">
                            <div id="cont-icono-atras" onClick={ bloquearCampos } >
                                <IconoAtras/>
                            </div>
                            <div id="cont-icono-guardar" onClick={ actualizarDatos }>
                                <IconoGuardar/>
                            </div>
                        </div>              
                    )
                } 
            </div>
        </div>
        
    );
};

export default PerfilUsuario;