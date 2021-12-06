import React, {useState, useEffect, useRef} from 'react'
import "./Accordion.css"
import Chevron from './chevron.svg'

export default function Accordion() {

    const [toggleD, setToggleD] = useState(false)
    const [toggleA, setToggleA] = useState(false)
    const [toggleDoc, setToggleDoc] = useState(false)
    
    const [heightEl, setHeightEl] = useState();

    const refHeight = useRef()

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])

    const toggleState = (toggle, setToggle) => {
        setToggle(!toggle)
    }

    return (
        <div className="accordion">

            <button 
            onClick={() => {toggleState(toggleD, setToggleD)}}
            className="accordion-visible">
                <span>DESCRIPCION</span>
                <img 
                className={toggleD && "active"}
                src={Chevron} />
            </button>
            
            <div 
            className={toggleD ? "accordion-toggle animated" : "accordion-toggle"}
            style={{height: toggleD ? `${heightEl}` : "0px"}}
            ref={refHeight}
            >   

                <p aria-hidden={toggleD ? "true" : "false"}>
                <textarea name="mensaje" placeholder="Ingresa una Descripcion de la empresa TIS" maxlength="140"></textarea>
                <button>Enviar</button>
                </p>
            </div>

            <button 
            onClick={() => {toggleState(toggleA, setToggleA)}}
            className="accordion-visible">
                <span>ANUNCIOS</span>
                <img 
                className={toggleA && "active"}
                src={Chevron} />
            </button>
            
            <div 
            className={toggleA ? "accordion-toggle animated" : "accordion-toggle"}
            style={{height: toggleA ? `${heightEl}` : "0px"}}
            ref={refHeight}
            >   
            
                <p margin-left = '0px' aria-hidden={toggleA ? "true" : "false"}>
                    <div border="1px solid #71caac"> 
                        <textarea></textarea>
                        <button>Agregar</button>
                    </div>
                </p>
            </div>

            <button 
            onClick={() => {toggleState(toggleDoc, setToggleDoc)}}
            className="accordion-visible">
                <span>DOCUMENTACION</span>
                <img 
                className={toggleDoc && "active"}
                src={Chevron} />
            </button>
            
            <div 
            className={toggleDoc ? "accordion-toggle animated" : "accordion-toggle"}
            style={{height: toggleDoc ? `${heightEl}` : "0px"}}
            ref={refHeight}
            >   
                <div border="1px solid #71caac"> 
                        <p>Aqui se introduce los Documentos</p>
                        <button>Agregar</button>
                    </div>
                
            </div>
        </div>
    )
}