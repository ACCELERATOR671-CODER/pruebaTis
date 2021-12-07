import {faUser,
faUsers,
faAddressCard,
faBriefcase,
faPowerOff,
faClipboard,
faUsersCog,
faEdit} from '@fortawesome/free-solid-svg-icons'
import { cerrarSession } from './session';

//SinGrupoEmpresa SGE
//ConGrupoEmpresa CGE
//ConGrupoEmpresaValida CGEV
//Administrador  A
//Consultor  C
const opcionesUsuarioSGE = [{
    link :'Socio-'+sessionStorage.getItem('id'),
    name:'perfil',
    contenido:'Mi Perfil',
    img:faUser,
    onClick: null
},{
    link : "RegistroGE",
    name:'crearGrupoEmpresal',
    contenido:'Crear Grupo Empresa',
    img:faAddressCard,
    onClick: null
},{
    link : "FundaEmpresa",
    name:'',
    contenido:'Funda-Empresa',
    img:faClipboard,
    onClick: null
},{
    link : "#",
    name:'cerrarSession',
    contenido:'Cerrar Session',
    img:faPowerOff,
    onClick: cerrarSession
},];

const opcionesUsuarioCGE = [{
    link :'Socio-'+sessionStorage.getItem('id'),
    name:'perfil',
    contenido:'Mi Perfil',
    img:faUser,
    onClick: null
},{
    link : 'GE-'+sessionStorage.getItem('ge'),
    name:'grupoEmpresa',
    contenido:'Mi Grupo Empresa',
    img:faUsers,
    onClick: null
},{
    link : "FundaEmpresa",
    name:'',
    contenido:'Funda-Empresa',
    img:faClipboard,
    onClick: null
},{
    link : "#",
    name:'cerrarSession',
    contenido:'Cerrar Session',
    img:faPowerOff,
    onClick: cerrarSession
},];

const opcionesUsuarioCGEV = [{
    link :'Socio-'+sessionStorage.getItem('id'),
    name:'perfil',
    contenido:'Mi Perfil',
    img:faUser,
    onClick: null
},{
    link : 'GE-'+sessionStorage.getItem('ge'),
    name:'grupoEmpresa',
    contenido:'Mi Grupo Empresa',
    img:faUsers,
    onClick: null
},{
    link : "FundaEmpresa",
    name:'',
    contenido:'Funda-Empresa',
    img:faClipboard,
    onClick: null
},{
    link : "Esp-de-Asesoramiento-"+sessionStorage.getItem('ge'),
    name:'espacioTrabajo',
    contenido:'Mi Espacio de trabajo',
    img:faBriefcase,
    onClick: null
},{
    link : "#",
    name:'cerrarSession',
    contenido:'Cerrar Session',
    img:faPowerOff,
    onClick: cerrarSession
},];

const opcionesUsuarioA = [{
    link :'Socio-'+sessionStorage.getItem('id'),
    name:'perfil',
    contenido:'Mi Perfil',
    img:faUser,
    onClick: null
},{
    link : "FundaEmpresa",
    name:'',
    contenido:'Funda-Empresa',
    img:faClipboard,
    onClick: null
},{
    link : "VentanaAdmin-"+sessionStorage.getItem('id'),
    name:'',
    contenido:'Administrar Usuarios',
    img:faUsersCog,
    onClick: null
},{
    link : "#",
    name:'cerrarSession',
    contenido:'Cerrar Session',
    img:faPowerOff,
    onClick: cerrarSession
},];

const opcionesUsuarioC = [{
    link :'Socio-'+sessionStorage.getItem('id'),
    name:'perfil',
    contenido:'Mi Perfil',
    img:faUser,
    onClick: null
},{
    link : 'ValidarGE',
    name:'grupoEmpresa',
    contenido:'Validar GE',
    img:faEdit,
    onClick: null
},{
    link : 'GEValidas',
    name:'grupoEmpresa',
    contenido:'Grupo-Empresas',
    img:faUsers,
    onClick: null
},{
    link : "FundaEmpresa",
    name:'',
    contenido:'Funda-Empresa',
    img:faClipboard,
    onClick: null
},{
    link : "#",
    name:'cerrarSession',
    contenido:'Cerrar Session',
    img:faPowerOff,
    onClick: cerrarSession
},];

const registrarse = {
    nombre:'Registrarse',
    link:'RegistroDeUsuario'
}

const iniciarSession = {
    nombre:'Iniciar Session',
    link:'Login'
}

const datosNavegador = [
    {
        nombre:'Grupo Empresas',
        link : "/GrupoEmpresas"
    },{
        nombre:'FundaEmpresa',
        link : "FundaEmpresa"
    },{
        nombre:'Inscritos en la materia',
        link : "Inscritos"
    }
];

export {opcionesUsuarioSGE,
        opcionesUsuarioCGE,
        opcionesUsuarioCGEV,
        opcionesUsuarioA,
        opcionesUsuarioC,
        registrarse,
        iniciarSession,
        datosNavegador};
