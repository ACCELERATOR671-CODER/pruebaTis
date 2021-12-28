import React, { useState, useEffect } from 'react'
import { Icono, 
        Button, 
        Contenedor } from '../elementos/home';
import { faChevronCircleRight,
         faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import CardPrimary from './home/CardPrimary';
import CardSecundary from './home/CardSecundary';
const Home = ({lc}) => {
    const [actual, setActual] = useState(null);
    const [next, setNext] = useState(null);
    const [previous, setPrevious] = useState(null);
    useEffect(() => {
        
        lc.start();
        update();

    }, [])

    const siguiente = () => {
        lc.previous();
        update();
    }

    const anterior = () => {
        lc.next();
        update();
    }

    const update = ()=> {
        setActual(lc.getActual());
        setNext(lc.getNext());
        setPrevious(lc.getAfter());
    }

    return (
        <>
            <Contenedor>
                <Button onClick={ anterior }>
                    <Icono icon = { faChevronCircleLeft }/>
                </Button>
                    {(next) && (<CardSecundary dato={next} />)}
                    {(actual) && (<CardPrimary dato = {actual}/>)}
                    {(previous) && (<CardSecundary dato={previous} />)}                      
                <Button onClick={ siguiente }>
                    <Icono icon={ faChevronCircleRight }/> 
                </Button>
            </Contenedor>
        </>
    )
}

export default Home
