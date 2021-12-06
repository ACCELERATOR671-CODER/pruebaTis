import React from 'react';
import styled, { css } from 'styled-components';
import { colorPrimary, colorSecundary } from '../../../parametros/colores';
 
const ContTabla = styled.div`
    margin: 20px;
    height: 95%;
    display: grid;
    grid-template-rows: 1fr 2fr;
`;

const ContTabla2 = styled.div`
    width: 100%;
    height: 300px;
    overflow-y: auto;
`;

const TBody = styled.tbody`
    
`;

const TItem = styled.tr`
    height: 55px;
    &:nth-child(even){
        background-color: rgb(${colorPrimary.r},${colorPrimary.g},${colorPrimary.b});
    }
    &:nth-child(odd){
        background-color: rgb(${colorSecundary.r},${colorSecundary.g},${colorSecundary.b});
    }
`;

const BotonInvitarSty = styled.button`
    background-color: rgb(${colorSecundary.r},${colorSecundary.g},${colorSecundary.b});
    color: rgb(${colorPrimary.r},${colorPrimary.g},${colorPrimary.b});
    border: 2px solid black;
    &:hover {
        background-color: rgb(${colorPrimary.r},${colorPrimary.g},${colorPrimary.b});
        color: black;
    }
`;

export {ContTabla, ContTabla2, TBody, TItem, BotonInvitarSty};