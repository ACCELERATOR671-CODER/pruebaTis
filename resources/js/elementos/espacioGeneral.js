import styled, { css } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colorPrimary, colorSecundary } from "../parametros/colores";


const CardEG  = styled.div`
    min-width: 700px;
    margin-top: 5%;
    text-align: center;
    transition: .5s ease all;
    background-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b}, 0.7);
    border-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b}, 0.4);
    border-radius: 30px;
    box-shadow: 10px 10px 10px;
    @media (max-width:700px){
        min-width: 0;
        width: 100%;
        margin: auto;
    }
`;

const Acordeon = styled.div`
    min-width: 600px;
    background-color: #f6f6f6;
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: space-between;

    @media (max-width:700px){
        min-width: 0;
    }
`;

const MarcoIcono = styled(FontAwesomeIcon)`
    font-size: 20px;
`;

const Panel = styled.div`   
    display: grid;
    gap: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
`;

const TextArea = styled.textarea`
    resize: none;
    height: 120px;
`;
const DescArea = styled.div`
    width: 100%;
    border-style: solid;
    border-color: black;
    padding: 10px;
`;

const GrupoCheckBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap : 10px;
`;

const ContenedorCheckBox = styled.div`
    display: grid;
    border-style: solid;
    text-align: left;
    padding-left: 3px;
    padding-right: 3px;
`;

const GrupoBotones = styled.div`
    display: flex;
    justify-content: space-between;
`;

const BotonCancel = styled.button`
    transition: .3s ease all;
    border-radius: 5px;
    color: white;
    border-style: solid;
    background-color: red;
    border-color: red;
    :hover{
        color: black;
        border-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b});
        background-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b});
    }
`;

export {Acordeon, MarcoIcono, Panel, TextArea, CardEG, GrupoCheckBox, ContenedorCheckBox,
        GrupoBotones, BotonCancel};
