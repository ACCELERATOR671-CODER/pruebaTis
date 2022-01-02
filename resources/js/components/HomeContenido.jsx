import React,{ useState, useEffect } from 'react'
import { ListaCircular } from './home/listaCircular'
import Home from './home'
import { Card } from '../elementos/card'

const HomeContenido = () => {
    const [lc, setLista] = useState(new ListaCircular());
    const [preparado, setPreparado] = useState(false);

    const estudiante = () => {
        lc.addDato({
            id: 1,
            titulo:"¡Bienvenido!",
            descripcion: "La página TIS es un intermediario entre el usuario y la empresa TIS, nuestro objetivo es el de facilitar la asesoria a los estudiantes",
            link:null,
            img: './Home/celebracion-de-eventos.jpg'
        });
        lc.addDato({
            id:2,
            titulo:"¡Registrate!",
            descripcion: "Si estas inscrito a la materia entonces !Ya puedes Registrarte en la página!, utiliza tu còdigo sis para registrarteO comunicate con un administrador en caso de que haya algun problema con tu Registro.",
            link:null,
            img: './Home/1600x900_registro.jpg'
        });
        lc.addDato({
            id:3,
            titulo:"Crea Tu Grupo Empresa",
            descripcion: "Crea grupo empresas o únete a una para participar en las asesorías con tu respectivo Consultor",
            link:null,
            img: './Home/Grupo Empresa.jpg'
        });
        lc.addDato({
            id:4,
            titulo:"Solicita ingresar a una grupo empresa",
            descripcion: "Si ya estas registrado entonces puedes solicitar unirte a una grupo empresa en la seccion de grupo empresas ya Registradas.",
            link:'GrupoEmpresas',
            img: './Home/Solicitar.jpg'
        });
        lc.addDato({
            id:5,
            titulo:"Invita a un Socio",
            descripcion: "Si tienes una grupo empresa entonces puedes invitar a otros socios a formar parte de tu grupo empresa!",
            link:'Inscritos',
            img: './Home/ingresar.jpg'
        });
        lc.addDato({
            id:6,
            titulo:"Espacio General",
            descripcion: "El espacio general sirve para ver los anuncios, el calendario con respecto a las asesorias",
            link:'EspacioGeneral',
            img: './Home/Espacio General.jpg'
        });
        
        lc.addDato({
            id:7,
            titulo:"Foro de dudas",
            descripcion: "El Foro de dudas sirve para crear dudas y responder a la mismas, si tienes una duda o algo que comentar, entonces este es tu lugar!",
            link:'ForoDudas',
            img: './Home/Foro Dudas.jpg'
        });

        lc.addDato({
            id:8,
            titulo:"Calendario de la grupo empresa",
            descripcion: "El calendario de la grupo empresa sirve para planificar tus actividades a futuro con respecto al proyecto que implementarás",
            link:'#',
            img: './Home/Calendario.jpg'
        });
        
        lc.addDato({
            id:9,
            titulo:"Espacio de asesoramiento",
            descripcion: "Crea links y pdfs para mantener tu documentación en orden y sigue la metodología que elegiste!",
            link:'#',
            img: './Home/Espacio de asesoramiento.jpg'
        });
    }

    const administrador = () => {
        lc.addDato({
            id: 1,
            titulo:"¡Bienvenido!",
            descripcion: "La página TIS es un intermediario entre el usuario y la empresa TIS, nuestro objetivo es el de facilitar la asesoria a los estudiantes",
            link:null,
            img: './Home/celebracion-de-eventos.jpg'
        });
        lc.addDato({
            id: 2,
            titulo:"Crea Usuarios!",
            descripcion: "Crea nuevos usuarios ya sean consultores o estudiantes",
            link:'RegitroUsuarioAdmin',
            img: './Home/crear usuario.jpg'
        });
        lc.addDato({
            id: 3,
            titulo:"Crea nuevos Administradores",
            descripcion: "Otorga el rol administrador a otros usuarios para delegar el trabajo",
            link:'VentanaAdmin-'+sessionStorage.getItem('id'),
            img: './Home/crear usuario.jpg'
        });
        lc.addDato({
            id: 4,
            titulo:"Administra cuentas",
            descripcion: "Administra y resetea cuentas",
            link:'VentanaAdmin-'+sessionStorage.getItem('id'),
            img: './Home/adminitrar usuarios.jpg'
        });
        lc.addDato({
            id: 5,
            titulo:"Importa datos",
            descripcion: "Crea datos en masa como funda empresa o nuevos usuarios desde un archivo externo",
            link:'ImportarDatos',
            img: './Home/importar.jpg'
        });
    }

    useEffect(() => {
        const form = new FormData();
        form.append('idUsuario', sessionStorage.getItem('id'));
        fetch('api/getFullUser', {
            method:'POST',
            body:form
        })
        .then((response) => response.json())
        .then((json) => {   
            if(json.nombreRol == 'Administrador'){
                administrador();
                setPreparado(true);
            } else {
                estudiante();
                setPreparado(true);
            }
        })
    }, [])

    return (
        <>
           {(preparado) ? (<Home lc={ lc }/>)
           : (
            <main>
                <Card className='p-2'>
                    <h1>Cargando...</h1>
                </Card>
            </main>)}   
        </>
    )
}

export default HomeContenido
