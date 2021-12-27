import React from 'react';
import styled from "styled-components";
import { colorSecundary } from '../../../parametros/colores';

const ContenedorGE = styled.div`
    display: grid;
    background-color: rgba(${colorSecundary.r},${colorSecundary.g},${colorSecundary.b}, 0.2);
    grid-template-rows: auto;
    margin: 50px auto;
    border: 3px solid;
`;

const ContenedorTituloGE = styled.div`
    display: grid;
    grid-template-columns: 0.8fr 0.4fr;
`;

const ContenedorCarpetasGE = styled.div`
    display: grid;
    border-top: 3px solid ;
    background-color: snow;
    padding: 10px;
    overflow-x: auto;
`;


export { 
    ContenedorGE, 
    ContenedorCarpetasGE,
    ContenedorTituloGE,
};