import {faUser,
faUsers,
faAddressCard,
faBriefcase,
faPowerOff,
faClipboard,
faRocket,
faUsersCog,
faEdit,
faFileImport,
faUserPlus,
faUserFriends,
faFileContract,
faFileAlt} from '@fortawesome/free-solid-svg-icons'
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
    link :'EspacioGeneral',
    name:'espacioGeneral',
    contenido:'Espacio General',
    img: faRocket,
    onClick: null
},{
    link : "RegistroGE",
    name:'crearGrupoEmpresal',
    contenido:'Crear Grupo Empresa',
    img:faAddressCard,
    onClick: null
},{
    link : "Inscritos",
    name:'inscritosMateria',
    contenido:'Inscritos en la Materia',
    img:faUserFriends,
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
    link :'EspacioGeneral',
    name:'espacioGeneral',
    contenido:'Espacio General',
    img: faRocket,
    onClick: null
},{
    link : 'GE-'+sessionStorage.getItem('ge'),
    name:'grupoEmpresa',
    contenido:'Mi Grupo Empresa',
    img:faUsers,
    onClick: null
},{
    link : "Inscritos",
    name:'inscritosMateria',
    contenido:'Inscritos en la Materia',
    img:faUserFriends,
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
    link :'EspacioGeneral',
    name:'espacioGeneral',
    contenido:'Espacio General',
    img: faRocket,
    onClick: null
},{
    link : 'GE-'+sessionStorage.getItem('ge'),
    name:'grupoEmpresa',
    contenido:'Mi Grupo Empresa',
    img:faUsers,
    onClick: null
},{
    link : "Esp-de-Asesoramiento-"+sessionStorage.getItem('ge'),
    name:'espacioTrabajo',
    contenido:'Mi Espacio de trabajo',
    img:faBriefcase,
    onClick: null
},{
    link : "Inscritos",
    name:'inscritosMateria',
    contenido:'Inscritos en la Materia',
    img:faUserFriends,
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
    link : "VentanaAdmin-"+sessionStorage.getItem('id'),
    name:'',
    contenido:'Administrar Usuarios',
    img:faUsersCog,
    onClick: null
},{
    link : "ImportarDatos",
    name:'',
    contenido:'Importar Datos',
    img:faFileImport,
    onClick: null
},{
    link : "RegitroUsuarioAdmin",
    name:'',
    contenido:'Registrar Usuario',
    img:faUserPlus,
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
    link :'EspacioGeneral',
    name:'espacioGeneral',
    contenido:'Espacio General',
    img: faRocket,
    onClick: null
},{
    link : 'Contrato',
    name:'contrato',
    contenido:'Contrato',
    img:faFileContract,
    onClick: null
},{
    link : 'EspacioRevision',
    name:'revision',
    contenido:'DocumentacionGE',
    img:faFileAlt,
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
