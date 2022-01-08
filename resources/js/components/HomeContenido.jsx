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
            descripcion: " Bienvenido. La empresa TIS tiene como mision realizar consultorias para la mejora de procesos de desarrollo de software. Con este objetivo, trabaja directamente con las empresas consultadas y su equipo en la prestacion de servicios de ingenieria de software relativo a un producto software (sistema).",
            link:null,
            img: './Home/celebracion-de-eventos.jpg'
        });
        lc.addDato({
            id:3,
            titulo:"Crea Tu Grupo Empresa",
            descripcion: "Créa grupo empresas o únete a una para participar en las asesorías con tu respectivo Consultor",
            link:null,
            img: './Home/Grupo Empresa.jpg'
        });
        lc.addDato({
            id:4,
            titulo:"Solicita ingresar a una grupo empresa",
            descripcion: "Puedes solicitar unirte a una grupo empresa en la seccion de grupo empresas ya Registradas.",
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
            descripcion: "El espacio general sirve para ver los anuncios, el calendario con respecto a las asesorias y la documentacion proporcionada por el consultor",
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
            descripcion: "Puede registrar eventos y reuniones a futuro de la Grupo Empresa",
            link:'#',
            img: './Home/Calendario.jpg'
        });
        
        lc.addDato({
            id:9,
            titulo:"Espacio de asesoramiento",
            descripcion: "Crea links y pdfs para mantener tu documentación en orden!",
            link:'#',
            img: './Home/Espacio de asesoramiento.jpg'
        });
    }

    const administrador = () => {
        lc.addDato({
            id: 1,
            titulo:"¡Bienvenido!",
            descripcion: "Bienvenido a la plataforma de apoyo a la empresa TIS, como administrador puede gestionar a los futuros estudiantes y consultores",
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
            descripcion: "Importa datos por lotes como funda empresa o nuevos usuarios desde un archivo externo",
            link:'ImportarDatos',
            img: './Home/importar.jpg'
        });
    }
    const consultor = () => {
        lc.addDato({
            id: 1,
            titulo:"¡Bienvenido!",
            descripcion: "Bienvenido, como Consultor puedes gestionar, revisar y generar documentos para las Grupo Empresas",
            link:null,
            img: './Home/celebracion-de-eventos.jpg'
        });
       
        lc.addDato({
            id: 2,
            titulo:"Espacio General",
            descripcion: "Crea, edita o elimina los anuncios, la documentacion y diferentes eventos en el calendario general!",
            link:null,
            img: './Home/Espacio General.jpg'
        });
        lc.addDato({
            id: 3,
            titulo:"Grupo Empresas ",
            descripcion: "Visualiza todas las Grupo Empresas Validas que existan en la gestion ",
            link:null,
            img: './Home/Grupo Empresa.jpg'
        });
        lc.addDato({
            id: 4,
            titulo:"Estudiantes en tu grupo",
            descripcion: "Revisa todos los usuarios registrados en tu grupo",
            link:null,
            img: './Home/personasGrupos.jpg'
        });
        lc.addDato({
            id: 5,
            titulo:"Revisa las Propuestas",
            descripcion: "Como consultor, revisa todas las propuestas subidas de todas las Grupo Empresas",
            link:null,
            img: './Home/propuestas.jpg'
        });
        lc.addDato({
            id: 6,
            titulo:"Realiza Contratos",
            descripcion: "Genera contratos de las Grupo Empresas validas con los datos necesarios y una firma del consultor",
            link:null,
            img: './Home/contrato.jpg'
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
                
            } else if(json.nombreRol == 'Estudiante'){
                estudiante();
                
            } else {
                consultor();

            }
            setPreparado(true);
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
