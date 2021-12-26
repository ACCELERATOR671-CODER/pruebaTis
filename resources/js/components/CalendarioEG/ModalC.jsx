import React, { useState, useEffect, useRef } from 'react';
import { GrupoCheckBox, ContenedorCheckBox, GrupoBotones, BotonCancel } from '../../elementos/espacioGeneral';
import { Boton } from '../../elementos/registro';
import CheckBox from './CheckBox';

const ModalC = ({cambio, setCambio}) => {
  const [show, setShow] = useState(false);
  const [eventos, setEventos] = useState(null);
   
  const handleModalClose = () => {  
    setShow(false);
  };
  
  const handleModalOpen = () => {
    setShow(true);
  };
  
  useEffect(() => {
    fetch('api/ObtenerOpocionesG')
    .then((response) => response.json())
    .then((json) => {
        setEventos(json);
    });
  }, [cambio])

  const enviarFormulario = (e) => {
      e.preventDefault();
      const formulario = new FormData(e.currentTarget);
      fetch('api/crearFechaG',{
        method:'POST',
        body:formulario
      })
      .then((response) => {
        if(!response.ok){
          alert('hubo un problema interno del servidor, intentelo de nuevo mas tarde');
        }
        return response.json();
      })
      .then((json) => {
        if(json.mensaje){
          alert(json.mensaje);
        } else {
          console.log(json);
          alert('Evento Registrado Exitosamente!');
          handleModalClose();
          desmarcarChecks();
          setCambio(!cambio);
        }
      });
  };

  const desmarcarChecks = () => {
    const checks = document.getElementsByName('checkbox[]');
    checks.forEach((input) => {
        input.checked = false;
    })
  }

  return (
    <div>
      <div
        hidden={!show}>
        <div
          className="modal-background">
          <div className="modal-card p-4">
            <h1>Crear Nuevo Evento</h1>
            <form method='POST' onSubmit={ enviarFormulario } encType="multipart/form-data">
              <label htmlFor="">fecha : <input type="date" name='fecha' required/></label>
              <GrupoCheckBox>
                <ContenedorCheckBox>
                  <h5 className=' text-center'>Actividades</h5>
                  { (eventos) && ( (eventos[0].map((dato) => <CheckBox datos={ dato }/>)) )  }
                </ContenedorCheckBox>
                <ContenedorCheckBox>
                  <h5 className=' text-center'>Recursos</h5>
                  { (eventos) && ( (eventos[1].map((dato) => <CheckBox datos={ dato }/>)) )  }
                </ContenedorCheckBox>
                <ContenedorCheckBox>
                  <h5 className=' text-center'>Evaluación</h5>
                  { (eventos) && ( (eventos[2].map((dato) => <CheckBox datos={ dato }/>)) )  }
                </ContenedorCheckBox>
              </GrupoCheckBox>
              <GrupoBotones>
                <BotonCancel type='button' onClick={ handleModalClose }>Cancelar</BotonCancel>
                <Boton type='submit'>Crear</Boton>
              </GrupoBotones>
            </form>
          </div>
        </div>
      </div>
      <Boton
        onClick={handleModalOpen}>
        Crear Evento
      </Boton>
    </div>
  );
};

export default ModalC;
