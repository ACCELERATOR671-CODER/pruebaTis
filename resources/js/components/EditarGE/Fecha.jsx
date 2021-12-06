import React, { useState, useRef, useEffect } from 'react'

const Fecha = ({estado, cambiarEstado}) => {

    const ref = useRef(null);
    const [date,setDate] = useState({campo:''});

    const onChange = () => {
        setDate({campo:ref.current.value});
    };

    useEffect(() => {
        setDate({campo : validarCalendario()});
    }, [])
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
            <input name='fecha_registro' 
                    type='date' 
                    value= { date.campo }
                    max={validarCalendario()} 
                    min='1999-01-01'
                    ref = {ref}
                    onChange = { onChange}/><br/><br/>   
        </>
    )
}

export default Fecha;
