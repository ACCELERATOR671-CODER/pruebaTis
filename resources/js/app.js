/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

//require('./bootstrap');
import 'bootstrap/dist/css/bootstrap.css';
/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//require('./components/Example');

import ReactDOM from 'react-dom';
import RegistroGE from './components/RegistroGE';
import React from 'react';
import '../css/app.css';
import {Fondo} from './elementos/card';
import PerfilUsuario from './components/DatosPerfilUsuario/perfilUsuario';
import Navegador from './components/Navegador';
import Login from './components/Login';
import VistaGrupoEmpresa from './components/VistaGrupoEmpresa';
import TabGE from './components/TabGE';
import Footer from './components/Footer';
import GrupoEmpresas from './components/GrupoEmpresas';
import RegistroUsuario from './components/RegistroUsuario';
import TabPerfil from './components/DatosPerfilUsuario/TabPerfil';
import FundaEmpresa from './components/tablaGE';
import EspacioGeneral from './components/EspacioGeneral';
import VistaInscritos from './components/DatosVistaInscritos/VistaInscritos';

import EditarGE from './components/EditarGE';
import PDF from './components/PDF';
import Comentario from './components/Comentario';
import VerSolicitudIngresoGE from './components/VerSolicitudIngresoGE';
import SolicitarIngresoGE from './components/SolicitarIngresoGE';
import SeccionDudas from './components/SeccionDudas';
import Debate from './components/Debate';
import GEvalida from './components/GEvalida';
import GEPorValidar from './components/GEPorValidar';
import EspacioDeAsesoramiento from './components/EspacioDeAsesoramiento';
import VentanaAdmin from './components/VentanaAdmin';
//import Login from "./components/Login/Login"

/*

    if(document.getElementById('login')){
        ReactDOM.render(<Login/>,document.getElementById('regGE'));
    }

*/

if (document.getElementById('viewgevalida')) {
    ReactDOM.render(
        <>
            <GEvalida/>
        </>, document.getElementById('viewgevalida'));

};

if (document.getElementById('viewvalidarge')) {
    ReactDOM.render(
        <>
            <GEPorValidar/>
        </>, document.getElementById('viewvalidarge'));

};

if (document.getElementById('fondo')) {
    ReactDOM.render(
        <>
            <Fondo src='./resources/asesoria-cont-financ_001.png' />
        </>, document.getElementById('fondo'));

};

if (document.getElementById('regGE')) {
    ReactDOM.render(
        <div >
            <RegistroGE />
        </div>, document.getElementById('regGE'));
}

if (document.getElementById('editGE')) {
    ReactDOM.render(
        <div >
            <EditarGE/>
        </div>, document.getElementById('editGE'));
}

if (document.getElementById('subirPDF')) {
    ReactDOM.render(
        <div >
            <PDF/>
        </div>, document.getElementById('subirPDF'));
}

if (document.getElementById('comentario')) {
    ReactDOM.render(
        <div >
            <Comentario/>
        </div>, document.getElementById('comentario'));
}

if (document.getElementById('solicitarIngresoGE')) {
    ReactDOM.render(
        <div >
            <SolicitarIngresoGE/>
        </div>, document.getElementById('solicitarIngresoGE'));
}

if (document.getElementById('verSolicitudIngresoGE')) {
    ReactDOM.render(
        <div >
            <VerSolicitudIngresoGE/>
        </div>, document.getElementById('verSolicitudIngresoGE'));
}


/* if (document.getElementById('comentario')) {
    ReactDOM.render(
        <div >
            <Comentario/>
        </div>, document.getElementById('comentario'));
} */

if(document.getElementById('perfil')){
    ReactDOM.render(<div >
                        <TabPerfil />
                  </div>
        ,document.getElementById('perfil'));
}

if(document.getElementById('navegador')){
    ReactDOM.render(<Navegador />, document.getElementById('navegador'));
}

if(document.getElementById('login')){
    ReactDOM.render(<div >
                        <Login />
                  </div>
        ,document.getElementById('login'));
}

if(document.getElementById('vistaGE')){
    ReactDOM.render(<>
        <TabGE/>
    </>, document.getElementById('vistaGE'));
}

if(document.getElementById('footer')){
    ReactDOM.render(<Footer/>,document.getElementById('footer'));
}

if(document.getElementById('ge')){
    ReactDOM.render(<GrupoEmpresas/>,document.getElementById('ge'));
}

if(document.getElementById('registroU')){
    ReactDOM.render(<RegistroUsuario/>,document.getElementById('registroU'));
}

if(document.getElementById('fundaempresa')){
    ReactDOM.render(<div >
                        <FundaEmpresa />
                  </div>
        ,document.getElementById('fundaempresa'));
}

if(document.getElementById('espaciogeneral')){
    ReactDOM.render(<div >
                        <EspacioGeneral />
                  </div>
        ,document.getElementById('espaciogeneral'));

}

if(document.getElementById('vistaInscritos')){
    ReactDOM.render(<VistaInscritos/>,document.getElementById('vistaInscritos'));
}

if(document.getElementById('dudas')){
    ReactDOM.render(<SeccionDudas/>,document.getElementById('dudas'));
}

if(document.getElementById('debate')){
    ReactDOM.render(<Debate />,document.getElementById('debate'));
}

if(document.getElementById('espAse')){
    ReactDOM.render(<EspacioDeAsesoramiento />,document.getElementById('espAse'));
}

if(document.getElementById('VenAd')){
    ReactDOM.render(<VentanaAdmin />,document.getElementById('VenAd'));
}
