import React, { useState, useRef, useEffect } from 'react'

const Fecha = ({name = 'fecha_registro', cargarFecha = null, max = null, min = '1999-01-01'}) => {

    const ref = useRef(null);
    const [date,setDate] = useState({campo:''});

    const onChange = () => {
        setDate({campo:ref.current.value});
    };

    useEffect(() => {
        if (cargarFecha != null) {
            setDate({campo: cargarFecha})
        } else {
            setDate({campo : validarCalendario()});
        }
    }, [])

    useEffect(() => {
        if (cargarFecha != null) {
            setDate({campo: cargarFecha})
        }
    },[cargarFecha]);

    const validarCalendario = () => {
        const convertirDig = (n) => {
            return (n < 10) ? '0'+n : n;
        }
        const date = new Date();
        const [dia, mes, anio] = [convertirDig(date.getDate()), 
                                convertirDig(date.getMonth()+1),
                                    convertirDig(date.getFullYear())];
        return `${anio}-${mes}-${dia}`;
    }
    
    return (
        <>
            <input name={name}
                    type='date' 
                    value= { date.campo }
                    max={
                        max == null? 
                        validarCalendario()
                        :
                        max
                    } 
                    min={ min }
                    ref = {ref}
                    onChange = { onChange}/><br/><br/>   
        </>
    )
}

export default Fecha;
